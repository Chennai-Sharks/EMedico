const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name:{
    type:String,
    trim: true
  },
  dpid:{
    type:String
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  patients:[patientSchema],
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
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
