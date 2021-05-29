const express = require('express');
const app = express();
const User = require('./models/User');
const dotenv = require('dotenv');
var cors = require('cors');
const colors = require('colors');

//Import Routes
const authRoute = require('./routes/auth');
const doctorRoute = require('./routes/doctor');
const ofpCreateRoute = require('./routes/ofp/post');
const ofpGetRoute = require('./routes/ofp/get');
const ofpDeleteRoute = require('./routes/ofp/delete');
const ofpUpdateRoute = require('./routes/ofp/patch');
const ofpPdfRoute = require('./routes/ofp/pdf');
const ofpSearchRoute = require('./routes/ofp/search');
const mongoose = require('mongoose');
dotenv.config(); //To access/config the DB connection token

//Connect to DB
const connectDB = require('./config/db');
connectDB();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());


//Route Middlewares
app.use('/api/users', authRoute);
app.use('/api/doctor',doctorRoute);
app.use('/api/ofp/create',ofpCreateRoute);
app.use('/api/ofp/get', ofpGetRoute);
app.use('/api/ofp/delete', ofpDeleteRoute);
app.use('/api/ofp/update', ofpUpdateRoute);
app.use('/api/ofp/pdf', ofpPdfRoute);
app.use('/api/ofp/search', ofpSearchRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`.yellow.bold));
