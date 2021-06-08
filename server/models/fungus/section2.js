const mongoose = require('mongoose');

const section2Schema = new mongoose.Schema({
	mongoid: String,
    "feverOnBroadAntibiotics":{
        type:String,
        enum:['yes','no']
    },
    "nonproductiveCough":{
        type:String,
        enum:['yes','no']
    },
    "progressiveDyspnea":{
        type:String,
        enum:['yes','no']
    },
    "pleuriticChestPain":{
        type:String,
        enum:['yes','no']
    },
    "erythema":{
        type:String,
        enum:['yes','no']
    },
    "induration":{
        type:String,
        enum:['yes','no']
    },
    "blackEscharAtTrauma":{
        type:String,
        enum:['yes','no']
    },
    "musclePain":{
        type:String,
        enum:['yes','no']
    },
    "fever":{
        type:String,
        enum:['yes','no']
    },
    "bleedingPerAnus":{
        type:String,
        enum:['yes','no']
    },
    "massLikeLesions":{
        type:String,
        enum:['yes','no']
    },
    "gutPerforation":{
        type:String,
        enum:['yes','no']
    },
    "localPainAndTenderness":{
        type:String,
        enum:['yes','no']
    },
    "cellulitis":{
        type:String,
        enum:['yes','no']
    },
    "alteredSensorium":{
        type:String,
        enum:['yes','no']
    }
});

module.exports = mongoose.model('fSection2', section2Schema);
