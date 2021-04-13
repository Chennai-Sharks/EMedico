const mongoose = require('mongoose');

const section3Schema = new mongoose.Schema({
  "currentIllness": {
    type: String
  },
  "surgicalMedicalHist": {
    type: String
  },
  "currentMedications": {
    "dosage": {
      type: String
    },
    "startDate": {
      type: String
    },
    "Effect": {
      type: String
    }
  },
  "pastMedications": {
    type: String
  },
  "concomitantMedicalTreatment": {
    type: String
  },
  "resultsPriorMedTests": {
    type: String
  },
  "famHistTmdOrofacialPain": {
    type: String
  },
  "reviewOfSystem": {
    type: String
  },
  "ent": {
    type: String
  },
  "genitourinary": {
    type: String
  },
  "cv": {
    type: String
  },
  "musculoSkeletal": {
    type: String
  },
  "respiratory": {
    type: String
  },
  "neurological": {
    type: String
  },
  "gi": {
    type: String
  },
  "endocrine": {
    type: String
  },
  "psychiatric": {
    type: String
  },
  "hematopoitic": {
    type: String
  },
  "obGyn": {
    type: String
  },
  "pregnant": {
    type: Boolean
  },
  "other": {
    type: String
  },
});

module.exports = mongoose.model('Section3', section3Schema);
