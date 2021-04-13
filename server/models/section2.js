const mongoose = require('mongoose');

const childSection2Schema = new mongoose.Schema({
  "onset": {
    type: String,
    required: true
  },
  "location": {
    type: String,
    required: true
  },
  "intensity": {
    type: String,
    required: true
  },
  "frequency": {
    type: String,
    required: true
  },
  "quality": {
    type: String,
    required: true
  },
  "duration": {
    type: String,
    required: true
  },
  "aggravatingFactors": {
    type: String,
    required: true
  },
  "alleviatingFactors": {
    type: String,
    required: true
  },
});

const section2Schema = new mongoose.Schema({
  children: [childSection2Schema]
})

module.exports = mongoose.model('Section2',section2Schema);
