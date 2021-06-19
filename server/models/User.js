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
  userId:{
    type:String,
    required: true
  },
  ofpPatients:[patientSchema],
  fPatients:[patientSchema],
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  dash: Object,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
