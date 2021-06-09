const mongoose = require('mongoose');

const section1Schema = new mongoose.Schema({
	mongoid: String,
	patientDetails:{
		date: {
			type: Date,
			default: Date.now,
		},
		age: {
			type: Number,
			required: true,
			trim: true
		},
		gender: {
			type: String,
			enum: ['male', 'female', 'other'],
			required: true,
			trim: true
		},
		personalHistory: {
			type: String,
			enum: ['single', 'married', 'divorce', 'separated', 'widowed', 'children',''],
			trim: true
		},
		occupation: {
			type: String,
			trim: true
		}
	},	
	"predisposingFactors":{
		"concurrentCovid":{
			type:String,
			enum:['yes','no']
		},
		"recentCovid":{
			type:String,
			enum:['yes','no']
		},
		"diabetesMellitus":{
			type:String,
			enum:['yes','no']
		},
		"longtermSteroids":{
			type:String,
			enum:['yes','no']
		},
		"highDoseOfSteroids":{
			type:String,
			enum:['yes','no']
		},
		"immunocompromised":{
			type:String,
			enum:['yes','no']
		},
		"malignancy":{
			type:String,
			enum:['yes','no']
		},
		"transplant":{
			type:String,
			enum:['yes','no']
		},
		"broadspectrumAntibiotics":{
			type:String,
			enum:['yes','no']
		},
		"longtermOxygenTherapy":{
			type:String,
			enum:['yes','no']
		},
		"prolongedICU":{
			type:String,
			enum:['yes','no']
		},
		"mechanicalVentilation":{
			type:String,
			enum:['yes','no']
		}
	},
	"clinicalPresentation":{
		"headache":{
			type:String,
			enum:['yes','no']
		},
		"lowFever":{
			type:String,
			enum:['yes','no']
		},
		"malaiseAndLethargy":{
			type:String,
			enum:['yes','no']
		},
		"nasalObstruction":{
			type:String,
			enum:['yes','no']
		},
		"nasaldischarge":{
			type:String,
			enum:['bloody','brownish','blackish','None']
		},
		"eyeRedness":{
			type:String,
			enum:['yes','no']
		},
		"eyeWatering":{
			type:String,
			enum:['yes','no']
		},
		"periorbitalSwelling":{
			type:String,
			enum:['yes','no']
		},
		"eyeDiscoloration":{
			type:String,
			enum:['yes','no']
		},
		"proptosis":{
			type:String,
			enum:['yes','no']
		},
		"diplopia":{
			type:String,
			enum:['yes','no']
		},
		"visionDiminution":{
			type:String,
			enum:['yes','no']
		},
		"ptosis":{
			type:String,
			enum:['yes','no']
		},
		"ophthalmoplegia":{
			type:String,
			enum:['yes','no']
		},
		"facialSwellingOrPain":{
			type:String,
			enum:['yes','no']
		},
		"parenthesia":{
			type:String,
			enum:['yes','no']
		},
		"infraOrbitalNumbness":{
			type:String,
			enum:['yes','no']
		},
		"toothache":{
			type:String,
			enum:['yes','no']
		},
		"teethLoosening":{
			type:String,
			enum:['yes','no']
		},
		"oralMucosaDiscoloration":{
			type:String,
			enum:['yes','no']
		},
		"teethSensationLoss":{
			type:String,
			enum:['yes','no']
		},
		"teethNumbness":{
			type:String,
			enum:['yes','no']
		},
		"ulceration":{
			type:String,
			enum:['yes','no']
		},
		"palatalPerforation":{
			type:String,
			enum:['yes','no']
		}
	}
});

module.exports = mongoose.model('fSection1', section1Schema);
