const express = require('express');
const url = require('url');
const PORT = process.env.PORT || 3200;
const HOST = process.env.HOST || 'localhost';

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});

app.get('/api', (req, res) => {
    let urlReques = url.parse(req.url, true)
    console.log(urlReques.query)
    if(urlReques.query.query === '7'){
        res.json({
            message: "Top imagees --- ok"
        })
    }else{
        res.json({
            message: "Not Found"
        })
    }
})
app.post('/api', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
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