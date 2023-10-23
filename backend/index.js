const express = require('express');
const url = require('url');
const fs = require('fs');
const PORT = process.env.PORT || 3200;
const HOST = process.env.HOST || 'localhost';
const fileUpload = require('express-fileupload');
const { updateCard } = require('./functions/updateCard')

const app = express();

app.use(fileUpload({
    createParentPath: true,
}))
// const urlencodedParser = express.urlencoded({ extended: false });

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});

app.get('/api', (req, res) => {
    let urlReques = url.parse(req.url, true)
    console.log(urlReques.query)
    if (urlReques.query.page === 'main') {
        if (urlReques.query.query === 'cards') {
            t1(urlReques.query.collection, res)
            t3(res)
        }
        else if (urlReques.query.query === 'products') {
            t3(res)
        }
        else if (urlReques.query.query === 'bests') {
            t2(urlReques.query.collections, res)
        } else {
            res.json({
                message: "Top imagees --- ok"
            })
        }
    }
    else if (urlReques.query.page === 'wedding' || 'children' || 'anniversary' || 'birthday' || 'bento' || 'corporate') {
        t6(res, urlReques.query.page)
    }
    else if (urlReques.query.mutation === 'post') {
        console.log('work!!!!!!')
    } else {
        res.json({
            message: "Not Found"
        })
    }
})

app.post('/api', (req, res) => {
    let urlReques = url.parse(req.url, true)
    // console.log(urlReques.query)
    if (urlReques.query.update === 'true') {
        updateCard(req, res, urlReques.query)
    }


})


function t1(fileName, res) {
    const { data } = JSON.parse(fs.readFileSync(`./db/main/popular/${fileName}.json`, 'utf8'))
    res.json(data)
}

function t2(fileName, res) {
    console.log(fileName)
    const { data } = JSON.parse(fs.readFileSync(`./db/main/best/${fileName}.json`, 'utf8'))
    res.json(data)
}

function t3(res) {
    console.log('t3')
    let arr = ['anniversary', 'bento', 'birthday', 'children', 'corporate', 'festive', 'wedding']
    let result = []
    let accum = []
    arr.map((item, index) => result.push(t4(item)))
    result.map(item => item.map(elem => {
        elem.path = __filename
        accum.push(elem)
    }))
    res.json(accum)
}

function t4(dirName) {
    const { data } = JSON.parse(fs.readFileSync(`./db/${dirName}/catalog.json`, 'utf8'))
    return data
}

function t6(res, dirName) {
    const { data } = JSON.parse(fs.readFileSync(`./db/${dirName}/catalog.json`, 'utf8'))
    data.map(item => item.dirName = dirName)
    console.log(data)
    res.json(data)
}