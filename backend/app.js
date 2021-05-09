var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const cron = require('node-cron');

const followup = require('./schedulers/followup');

var indexRouter = require('./routes/index');
var applicationsRouter = require('./routes/application');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/applications', applicationsRouter);

// Send email everyday at midnight
cron.schedule('0 0 0 * * *', function() {
    followup();
});

module.exports = app;
