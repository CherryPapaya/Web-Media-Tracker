const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const { json } = require('stream/consumers');

const listPath = path.join(__dirname, '../../list.json');

router.use(express.urlencoded({ extended: true }));

router.get('/show', (req, res) => {
  const fileContent = fs.readFileSync(listPath, 'utf-8');

  res.json(fileContent);
});

module.exports = router;