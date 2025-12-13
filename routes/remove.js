const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const listPath = path.join(__dirname, '../list.json');

const fileContent = fs.readFileSync(listPath, 'utf-8');

let data = JSON.parse(fileContent);

router.post('/:id', (req, res) => {
  const id = Number(req.params.id);

  data = data.filter(e => e.id !== id);

  fs.writeFileSync(listPath, JSON.stringify(data, null, 2));

  res.redirect('/browse');
// res.send("Delede me vrom de gah");
})

module.exports = router;