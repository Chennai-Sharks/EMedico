const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cors = require('cors');

//Import Routes
const authRoute = require('./routes/auth');
const createRoute = require('./routes/create');

dotenv.config(); //To access/config the DB connection token

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log("DB Connected"));

//Middleware
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use('/api/users', authRoute);
app.use('/api/create',createRoute);

app.listen(3000, () => console.log('Server is running'));
