const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');

// Utility for easy setup and access of XS Advanced environment variables and services 
const xsenv = require('@sap/xsenv');
// Extends the functionality of the hdb package, which is a JavaScript client for SQLDBC. 
const hdbext = require('@sap/hdbext');


const app = express();


// Setup middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('combined'));

// Setup middleware
const services = xsenv.getServices({ hana:'store-hdi-container' });
app.use(hdbext.middleware(services.hana));

app.use('*', (req, res) => {
    res.status(404).send('404');
});
module.exports = app;