const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes());

app.listen(PORT, () => {
    console.log(`Server Working on ${PORT}`)
})
