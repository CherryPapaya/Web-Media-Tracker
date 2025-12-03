const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const listPath = path.join(__dirname, '../../list.json');

// parse form data (urlencoded)
router.use(express.urlencoded({ extended: true }));

let data = [];

router.post('/add', (req, res) => {
    const title = req.body.title;
    const year = req.body.year;
    const person = req.body.person;
    const type = req.body.type;
    const description = req.body.description;

    const mediaData = {
        title: title,
        year: year,
        person: person,
        type: type,
        description: description
    }

    if (fs.existsSync(listPath)) {
        const fileContent = fs.readFileSync(listPath, 'utf-8');
        data = JSON.parse(fileContent);
    }

    data.push(mediaData);

    fs.writeFileSync(listPath, JSON.stringify(data, null, 2));

    res.redirect('/add.html');
    // const dataPretty = JSON.stringify(data, null, 2);
    // console.log(`${dataPretty}`);
})

module.exports = router;