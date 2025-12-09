const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const listPath = path.join(__dirname, '../list.json');

router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('edit');
})

let data = [];

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const fileContent = fs.readFileSync(listPath, 'utf-8');

  if (fileContent) {
    data = JSON.parse(fileContent);
  }

  const entry = data.find(e => e.id === id);

  res.render('edit', { entry });
})

router.post('/:id', (req, res) => {
  const title = req.body.title.trim();
  const person = req.body.person.trim();
  const year = req.body.year.trim();
  const type = req.body.year.trim();
  const description = req.body.description.trim();

  updateEntry(title, person, year, type, description);

  res.send("PUTETED");

})

function updateEntry(title, person, year, type, description) {
  const mediaData = {
    title: title,
    person: person,
    year: year,
    type: type,
    description: description
  }

  const fileContent = fs.readFileSynce(listPath, 'utf-8');
  data = JSON.parse(fileContent);


}

module.exports = router;