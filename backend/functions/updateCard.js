const fs = require('fs');

const updateCard = (req, res, query) => {
    if(query.update === 'true'){
        const data = require(`../db/${query.dirname}/catalog.json`)
        if (query.post === 'uploads') {
            if (!req.files) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            const file = req.files.file
            if (!file) return res.json({ message: 'Incorrect input name' });
            const newFileName = encodeURI(Date.now() + '-' + file.name)
            file.mv(`../frontend/public/uploads/${newFileName}`, err => {
                if (err) {
                    console.error(err)
                    return res.status(500).send(err)
                }
                console.log('file was upload')
            })
            // res.json({
            //     fileName: file.name,
            //     filePath: `uploads/${newFileName}`
            // })
        }
        data.data.forEach(card => {
            if(card.id === query.id){
                if(query.title !== ''){
                    card.title = query.title
                } 
                if(query.price !== ''){
                    card.price = query.price
                }
            }
        });
        fs.writeFileSync(`./db/${query.dirname}/catalog.json`, JSON.stringify(data), (err)=> err && console.log('err'));
        res.json(data)
    }
}

module.exports = {
    updateCard
}