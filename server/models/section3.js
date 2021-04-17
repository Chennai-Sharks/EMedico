const mongoose = require('mongoose');

const section3Schema = new mongoose.Schema({
  "currentIllness": String,
  "surgicalMedicalHist": String,
  "currentMedications": {
    "dosage": String,
    "startDate": String,
    "Effect": String
  },
  "pastMedications": String,
  "concomitantMedicalTreatment": String,
  "resultsPriorMedTests": String,
  "famHistTmdOrofacialPain": String,
  "reviewOfSystem": String,
  "ent": String,
  "genitourinary": String,
  "cv": String,
  "musculoSkeletal": String,
  "respiratory": String,
  "neurological": String,
  "gi": String,
  "endocrine": String,
  "psychiatric": String,
  "hematopoitic": String,
  "obGyn": String,
  "pregnant": Boolean,
  "other": String,
});

module.exports = mongoose.model('Section3', section3Schema);
