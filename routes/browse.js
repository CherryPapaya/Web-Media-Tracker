const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const listPath = path.join(__dirname, '../list.json');

router.get('/', (req, res) => {
  const fileContent = fs.readFileSync(listPath, 'utf-8');
  const data = JSON.parse(fileContent);

  data.sort((a, b) => a.title.localeCompare(b.title));

  res.render('browse', { data });
});

module.exports = router;