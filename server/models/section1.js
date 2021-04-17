const mongoose = require('mongoose');

const section1Schema = new mongoose.Schema({
  "date": {
    "type": Date,
    default: Date.now
  },
  "name": {
    type: String,
    required: true
  },
  "age": {
    type: Number,
    required: true
  },
  "gender": {
    type: String,
    enum: ["male","female","other"],
    required: true
  },
  "treatingDentist": {
    type: String,
    required: true
  },
  "purposeOfVisit": {
    type: String,
    enum: ["evaluation","treatment","second Opinion","legal","MVA","other"],
    required: true
  },
  "referralSource": String,
  "personalHistory": {
    type: String,
    enum: ["single","married","divorce","seperated","widowed","children"]
  },
  "occupation": String,
  "allergiesToMedication": String,
  "chiefComplaints": {
    type: Array,
    "items": {
      type: String
    }
  },
  "additionalConcerns": {
    type: Array,
    "items": {
      type: String
    }
  },
  "historyOfpresentingIllness":{
        "onset": String,
        "location": String,
        "chronicity": String,
        "frequence": String,
        "duration": String,
        "intensity": {
          type: Number,
          enum: [0,1,2,3,4,5,6,7,8,9,10]
        },
        "backgroundPain": {
          type: Number,
          enum: [0,1,2,3,4,5,6,7,8,9,10]
        },
        "quality": String,
        "treatments": String,
        "aggravatingFactors": String,
        "RelievingFactors": String,
        "temporalChar": String,
        "associatedFeatures": String,
        "referralPattern": String,
        "sleep": String,
  },
  "primaryCarePhysician": String,
  "primaryDentist": String,
  "anyOtherPhyscian": String,
  "additionalNotes": String
});

module.exports = mongoose.model('Section1', section1Schema);
