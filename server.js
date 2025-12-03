const express = require('express');
const fs = require('fs');
const app = express();

// serve static HTML/CSS/JS
app.use(express.static('public'));

const add = require('./routes/add');
app.use('/', add);

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.listen(3000);
