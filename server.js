const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const activities = require('./routes/api/activities');

const app = express();

// Enable use of CORS
// https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// BodyParser middleware
app.use(express.json());

const db = require('./config/keys').mongoUri;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/activities', activities);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Sever started on port ${port}`));