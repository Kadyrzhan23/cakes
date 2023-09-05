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
            const {data} = JSON.parse(fs.readFileSync('./db/main/wedding.json','utf8'))
            res.json(data)
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

