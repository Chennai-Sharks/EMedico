const express = require('express');
const app = express();

var cors = require('cors');
const verify = require('./routes/verifyToken');
const router = require('./routes/index');
const dotenv = require('dotenv');
dotenv.config();
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
//Import Routes
const authRoute = require('./routes/auth');

var corsOptions = {
  origin: process.env.ORIGIN,
};

//Middleware
app.use(express.json({ limit: '10kb' }));
app.use(cors(corsOptions));
app.use(xss());
app.use(helmet());
app.use(mongoSanitize());

app.use('/api/users', authRoute);

// use 'M2' if u want jwt verification , else use 'M1'
// M1
//app.use('/api', router);

// M2
app.use('/api', verify, router);

module.exports = app;
