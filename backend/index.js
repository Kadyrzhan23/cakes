const express = require('express');
const url = require('url');
const fs = require('fs');
const PORT = process.env.PORT || 3200;
const HOST = process.env.HOST || 'localhost';
const db = require('./db/main/popular/wedding.json')

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});

app.get('/api', (req, res) => {
    let urlReques = url.parse(req.url, true)
    // console.log(urlReques.query)
    if(urlReques.query.page === 'main'){
        if(urlReques.query.query === 'cards'){
            t1(urlReques.query.collection,res)
        }
        else if(urlReques.query.query === 'bests'){
            t2(urlReques.query.collections,res)
        } else{
            res.json({
                message: "Top imagees --- ok"
            })
        }
    }
    else if(urlReques.query.page === 'wedding' || 'children' || 'anniversary' || 'birthday'){
        t6(res,urlReques.query.page)
    }else{
        res.json({
            message: "Not Found"
        })
    }
})


function t1(fileName,res){
    const {data} = JSON.parse(fs.readFileSync(`./db/main/popular/${fileName}.json`,'utf8'))
    res.json(data)
}

function t2(fileName,res){
    console.log(fileName)
    const {data} = JSON.parse(fs.readFileSync(`./db/main/best/${fileName}.json`,'utf8'))
    res.json(data)
}

// function t3(res){
//     const {data} = JSON.parse(fs.readFileSync(`./db/birthday/catalog/catalog.json`,'utf8'))
//     res.json(data)
//     console.log('Birthday')
// }


// function t4(res){
//     const {data} = JSON.parse(fs.readFileSync(`./db/children/catalog.json`,'utf8'))
//     res.json(data)
//     console.log('Children')
// }

// function t5(res){
//     const {data} = JSON.parse(fs.readFileSync(`./db/anniversary/catalog.json`,'utf8'))
//     res.json(data)
//     console.log('anniversary')
// }

function t6(res,filename){
    const {data} = JSON.parse(fs.readFileSync(`./db/${filename}/catalog.json`,'utf8'))
    res.json(data)
    // console.log('anniversary')
}