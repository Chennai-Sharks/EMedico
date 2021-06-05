const express = require('express');
const app = express();
const dotenv = require('dotenv');
var cors = require('cors');
const verify = require('./routes/verifyToken');
const router =  require('./routes/index');

//Import Routes
const authRoute = require('./routes/auth');

dotenv.config(); //To access/config the DB connection token

//Connect to DB
const connectDB = require('./config/db');
connectDB();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

app.use('/api/users', authRoute);

// use 'M2' if u want jwt verification , else use 'M1'  
// M1
app.use('/api', router);

// M2
//app.use('/api',verify, router);

app.listen(port, () => console.log(`Server is running on port ${port}`.yellow.bold));