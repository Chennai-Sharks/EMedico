const app = require('./app');

const dotenv = require('dotenv');
dotenv.config(); //To access/config the DB connection token

//Connect to DB
const connectDB = require('./config/db');
connectDB();

const port = process.env.PORT;
app.listen(port, () =>
console.log(`Server is running on port ${port}`.yellow.bold)
);
