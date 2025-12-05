const express = require('express');
const fs = require('fs');
const app = express();

// serve static HTML/CSS/JS
app.use(express.static('public'));
app.set('view engine', 'ejs');

const add = require('./routes/add');
const show = require('./routes/show');

app.use('/', add);
app.use('/', show);

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.get('/add', (req, res) => {
    res.render('add');
})

app.listen(3000);
