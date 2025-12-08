const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const listPath = path.join(__dirname, '../../list.json');

let data = [];

router.get('/edit', (req, res) => {
  res.render('edit');
})

router.get('/edit/:title', (req, res) => {
  const title = req.params.title;

  const fileContent = fs.readFileSync(listPath, 'utf-8');
  if (fileContent) {
    data = JSON.parse(fileContent);
  }

  const entry = data.find(e => e.title === title);

  res.render('edit', { entry });
  // console.log(entry);



})

module.exports = router;