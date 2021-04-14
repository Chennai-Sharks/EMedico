const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name:{
    type:String
  },
  dpid:{
    type:String
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 200
  },
  patients:[patientSchema],
  email: {
    type: String,
    required: true,
    max: 200, 
    min: 10
  },
  password: {
    type: String,
    required: true,
    max: 1000,
    min: 8
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
