const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const listPath = path.join(__dirname, '../list.json');

const fileContent = fs.readFileSync(listPath, 'utf-8');
let data = JSON.parse(fileContent);

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const entry = data.find(e => e.id === id);

  res.render('entry', { entry });
});

module.exports = router;