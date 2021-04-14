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
  "referralSource": {
    type: String
  },
  "personalHistory": {
    type: String,
    enum: ["single","married","divorce","seperated","widowed","children"]
  },
  "occupation": {
    type: String
  },
  "allergiesToMedication": {
    type: String
  },
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
    type: Array,
    "items": {
      type: Object,
      "properties": {
        "onset": {
          type: String
        },
        "location": {
          type: String
        },
        "chronicity": {
          type: String
        },
        "frequence": {
          type: String
        },
        "duration": {
          type: String
        },
        "intensity": {
          type: Number,
          enum: [0,1,2,3,4,5,6,7,8,9,10]
        },
        "backgroundPain": {
          type: Number,
          enum: [0,1,2,3,4,5,6,7,8,9,10]
        },
        "quality": {
          type: String,
        },
        "treatments": {
          type: String,
        },
        "aggravatingFactors": {
          type: String,
        },
        "RelievingFactors": {
          type: String,
        },
        "temporalChar": {
          type: String,
        },
        "associatedFeatures": {
          type: String,
        },
        "referralPattern": {
          type: String,
        },
        "sleep": {
          type: String,
        },
      }
    }
  },
  "primaryCarePhysician": {
    type: String
  },
  "primaryDentist": {
    type: String
  },
  "anyOtherPhyscian": {
    type: String
  },
  "additionalNotes": {
    type: String
  }
});

module.exports = mongoose.model('Section1', section1Schema);
