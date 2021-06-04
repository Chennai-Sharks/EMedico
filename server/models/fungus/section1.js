const mongoose = require('mongoose');

const section1Schema = new mongoose.Schema({
	mongoid: String,

	date: {
		type: Date,
		default: Date.now,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		enum: ['male', 'female', 'other'],
		required: true,
	},
	personalHistory: {
		type: String,
		enum: ['single', 'married', 'divorce', 'separated', 'widowed', 'children'],
	},
	occupation: String,
	allergiesToMedication: String,
	covidScreeningTest: {
		covid: {
			String,
			enum: ['yes', 'no'],
		},
		homecareHospitalized: {
			type: String,
			enum: ['Home care', 'Hospitalized'],
		},
		ventilatorProlongedLifeSupport: {
			type: String,
			enum: ['yes', 'no'],
		},
	},
	diabeticStatus: String,
	immunoCompromised: ['yes', 'no'],
	steroidHistory: String,
	postCovidSymptoms: [String],
	mucormycosisSymptoms: {
		sinusitis: ['yes', 'no'],
		nasalBlockage: ['yes', 'no'],
		blackishDiscoloration: ['yes', 'no'],
		facialErythema: ['yes', 'no'],
		eyeSymptoms: ['yes', 'no'],
		facialPainNumbness: ['yes', 'no'],
		toothacheMobileTooth: ['yes', 'no'],
		palatalUlceration: ['yes', 'no'],
		halitosis: ['yes', 'no'],
		skinLesions: ['yes', 'no'],
		fever: ['yes', 'no'],
		headache: ['yes', 'no'],
		alteredSensorium: ['yes', 'no'],
	},
});

module.exports = mongoose.model('fSection1', section1Schema);
