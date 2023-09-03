const express = require('express');
const url = require('url');
const PORT = process.env.PORT || 3100;
const HOST = process.env.HOST || 'localhost';

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});

app.get('/api', (req, res) => {
    console.log(req.method)
    // console.log(req.body)
    // if(req.method === 'GET'){
    //     let urlReques = url.parse(req.url,true)
    //     console.log(urlReques.query)
    // }else{
    //     console.log(req.method)
    // }
    res.json({
        message: "Hello from backend GET"
    })
})
app.post('/api',urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.json(req.body);
    // console.log(req.method)
    // let urlReques = url.parse(req.url, true)
    // console.log(urlReques.query)
    // res.json({
    //     message: "Hello from backend POST"
    // })
})    


// app.update('/api',urlencodedParser, (req, res) => {
//     if(!req.body) return res.sendStatus(400);
//     console.log('update');
//     res.json('updated');
//     // console.log(req.method)
//     // let urlReques = url.parse(req.url, true)
//     // console.log(urlReques.query)
//     // res.json({
//     //     message: "Hello from backend POST"
//     // })
// })  