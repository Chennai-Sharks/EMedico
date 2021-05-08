const express = require('express');
const app = express();
const User = require('./models/User');
const dotenv = require('dotenv');
var cors = require('cors');
const colors = require('colors');

//Import Routes
const authRoute = require('./routes/auth');
const createRoute = require('./routes/post');
const getRoute = require('./routes/get');
const deleteRoute = require('./routes/delete');
const updateRoute = require('./routes/patch');
const pdfRoute = require('./routes/pdf');
const mongoose = require('mongoose');
dotenv.config(); //To access/config the DB connection token

//Connect to DB
const connectDB = require('./config/db');
connectDB();
const port = process.env.PORT;

//Middleware
app.use(express.json());
app.use(cors());

// search route   'query' is the search input
app.get('/api/search/:did/:query', async(req, res)=>{

       await User.aggregate([
            // matching the doctor document
            {
                $match:  { _id: mongoose.Types.ObjectId("6076c7c4a9ee3e09e0c23a60") }
            },

            //unwind the patients array
            { "$unwind": "$patients"},

            //using match to filter the matching patients
            { "$match":{
                    "$or":[
                        { "patients.name": {"$regex": req.params.query.toString() , "$options": "i" } },
                        { "patients.dpid": {"$regex": req.params.query.toString() , "$options": "i" } }
                    ]
            }},

            // patients array is put back together
            {
                $group: {
                    "_id": "$_id",
                //  "name":{ "$first": "$name" },  // syntax for adding non array type fields
                    "patients":{ "$push": "$patients"},
                }
            }

         ]).exec(function (err, result) {
            if (err) return res.status(400).send(err);
            res.send(result[0].patients);
          });
});

//Route Middlewares
app.use('/api/users', authRoute);
app.use('/api/create',createRoute);
app.use('/api/get', getRoute);
app.use('/api/delete', deleteRoute);
app.use('/api/update', updateRoute);
app.use('/api/pdf', pdfRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`.yellow.bold));
