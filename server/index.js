const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import Routes
const authRoute = require('./routes/auth');

dotenv.config(); //To access/config the DB connection token

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log("DB Connected"));

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server is running'));
