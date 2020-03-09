const express = require('express')
const app = express()
require('dotenv').config();
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')

const routes = require('./app/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1/', cors(), routes);

app.use(function (req, res, next) {
    next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log('err',err.message);
});


module.exports = app;
