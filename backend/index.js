const express = require('express');
const url = require('url');
const fs = require('fs');
const PORT = process.env.PORT || 3200;
const HOST = process.env.HOST || 'localhost';
const db = require('./db/main/wedding.json')

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});

app.get('/api', (req, res) => {
    let urlReques = url.parse(req.url, true)
    console.log(urlReques.query)
    if(urlReques.query.page === 'main'){
        if(urlReques.query.query === 'cards'){
            t1(urlReques.query.collection,res)
            // const {data} = JSON.parse(fs.readFileSync('./db/main/children.json','utf8'))
            // const {data} = JSON.parse(fs.readFileSync(`./db/main/${urlReques.query.collection}.json`,'utf8'))
            // res.json(data)
            // let result = Object.values(JSON.parse(data))
            // res.json(result[0])
            // console.log('work')
        }else{
            res.json({
                message: "Top imagees --- ok"
            })
        }
    }else{
        res.json({
            message: "Not Found"
        })
    }
})


function t1(fileName,res){
    const {data} = JSON.parse(fs.readFileSync(`./db/main/${fileName}.json`,'utf8'))
    res.json(data)
}
