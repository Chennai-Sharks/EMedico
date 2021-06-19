const mongoose = require('mongoose');

const section3Schema = new mongoose.Schema({
	mongoid: String,

    "ulceration":{
        type:String,
        enum:['yes','no']
    },
    "blackishNecroticEschar":{
        type:String,
        enum:['yes','no']
    },
    "nasalNotes":String,
    "oralExamination":String,
    "eyeRedness":{
        type:String,
        enum:['yes','no']
    },
    "eyeWatering":{
        type:String,
        enum:['yes','no']
    },
    "proptosis":{
        type:String,
        enum:['yes','no']
    },
    "periorbitalEdema":{
        type:String,
        enum:['yes','no']
    },
    "ecchymosis":{
        type:String,
        enum:['yes','no']
    },
    "restrictedEyeMovement":{
        type:String,
        enum:['yes','no']
    },
    "ophthalmoplegia":{
        type:String,
        enum:['yes','no']
    },
    "decreasedCornealSensation":{
        type:String,
        enum:['yes','no']
    },
    "fundusRedSpot":{
        type:String,
        enum:['yes','no']
    },
    "fundusDiscEdema":{
        type:String,
        enum:['yes','no']
    },
    "ocularNotes":String,
    "microbiology":[String],
    "pathology":[String],
    "radiology":[String],
    "generalInvestigation":[String]
});

module.exports = mongoose.model('fSection3', section3Schema);
