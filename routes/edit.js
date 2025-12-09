const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const listPath = path.join(__dirname, '../list.json');


router.get('/', (req, res) => {
  res.render('edit');
})

let data = [];

router.get('/:title', (req, res) => {
  const title = req.params.title;

  const fileContent = fs.readFileSync(listPath, 'utf-8');

  if (fileContent) {
    data = JSON.parse(fileContent);
  }

  const entry = data.find(e => e.title === title);

  res.render('edit', { entry });
})

router.put('/', (req, res) => {
  res.send("PUTTEDED");



})

module.exports = router;