const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cors = require('cors');

//Import Routes
const authRoute = require('./routes/auth');

dotenv.config(); //To access/config the DB connection token

//Connect to DB
const connectDB = require('./config/db');
connectDB();

//Middleware
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use('/api/users', authRoute);

app.listen(3000, () => console.log('Server is running'));
