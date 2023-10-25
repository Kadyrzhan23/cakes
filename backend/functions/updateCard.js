const fs = require('fs');

const updateCard = (req, res, query) => {
    const data = require(`../db/${query.dirname}/catalog.json`)
    let temp = ''
    if (query.post === 'uploads') {
        if (!req.files) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const file = req.files.file
        if (!file) return res.json({ message: 'Incorrect input name' });
        const newFileName = encodeURI(Date.now() + '-' + file.name)
        file.mv(`../frontend/public/pages/${query.dirname}/${newFileName}`, err => {
            if (err) {
                console.error(err)
                return res.status(500).send(err)
            }
            data.data.forEach((card) => {
                if (card.id === query.id) {
                    temp = card.img
                    card.img = `./pages/${query.dirname}/${newFileName}`
                    console.log('file was upload')
                    fs.writeFileSync(`./db/${query.dirname}/catalog.json`, JSON.stringify(data));
                }
            })
        })
        fs.unlink(`.././frontend/public/${temp}`,err => err && console.log(err))
        console.log('unlinkeddd') // нужно поработать над удалением
        // res.json({
        //     fileName: file.name,
        //     filePath: `uploads/${newFileName}`
        // })
    }
    data.data.forEach(card => {
        if (card.id === query.id) {
            if (query.title !== '') {
                card.title = query.title
            }
            if (query.price !== '') {
                card.price = query.price
            }
        }
    });
    fs.writeFileSync(`./db/${query.dirname}/catalog.json`, JSON.stringify(data));
    res.json(data)
}

module.exports = {
    updateCard
}