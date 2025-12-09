const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const listPath = path.join(__dirname, '../list.json');

// parse form data (urlencoded)
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('add');
})

let data = [];

router.post('/', (req, res) => {
    const title = req.body.title.trim();
    const person = req.body.person.trim();
    const year = req.body.year;
    const type = req.body.type;
    const description = req.body.description.trim();

    addEntry(title, person, year, type, description);

    res.render('add');
})

function addEntry(title, person, year, type, description) {
    // const id = computeID();

    const mediaData = {
        title: title,
        person: person,
        year: year,
        type: type,
        description: description,
    }


    if (fs.existsSync(listPath)) {
        const fileContent = fs.readFileSync(listPath, 'utf-8');
        if (fileContent) {
            data = JSON.parse(fileContent);
        }
    }

    data.push(mediaData);

    fs.writeFileSync(listPath, JSON.stringify(data, null, 2));
}

module.exports = router;