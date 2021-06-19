const express = require('express');
const app = express();
const dotenv = require('dotenv');
var cors = require('cors');
const verify = require('./routes/verifyToken');
const router = require('./routes/index');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config(); //To access/config the DB connection token

//Connect to DB
const connectDB = require('./config/db');
connectDB();
const port = process.env.PORT;

// var whitelist = ['https://maxillo.in', 'http://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

//Middleware
app.use(express.json({ limit: '10kb' }));
app.use(cors());
app.use(xss());
app.use(helmet());
app.use(mongoSanitize());

app.use('/api/users', authRoute);

// use 'M2' if u want jwt verification , else use 'M1'
// M1
//app.use('/api', router);

// M2
app.use('/api', verify, router);

app.listen(port, () =>
  console.log(`Server is running on port ${port}`.yellow.bold)
);
