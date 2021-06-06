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
		enum: ['single', 'married', 'divorce', 'separated', 'widowed', 'children'],
		trim: true
	},
	occupation: {
		type: String,
		trim: true
	},
	allergiesToMedication: {
		type: String,
		trim: true
	},
	covidScreeningTest: {
		covid: {
			type: String,
			enum: ['yes', 'no'],
		},
		homecareOrHospitalized: {
			type: String,
			enum: ['Home care', 'Hospitalized'],
		},
		ventilatorOrProlongedLifeSupport: {
			type: String,
			enum: ['yes', 'no'],
		},
	},
	diabeticStatus: {
		type: String,
		trim: true
	},
	immunoCompromisedState: {
		type: String,
		enum: ['yes', 'no'],
	},
	steroidHistory: {
		type: String,
		trim: true
	},
	postCovidSymptoms: [String],
	mucormycosisSymptoms: {
		sinusitis: {
			type: String,
			enum: ['yes', 'no'],
		},
		nasalBlockage: {
			type: String,
			enum: ['yes', 'no'],
		},
		blackishDiscoloration: {
			type: String,
			enum: ['yes', 'no'],
		},
		facialErythema: {
			type: String,
			enum: ['yes', 'no'],
		},
		eyeSymptoms: {
			type: String,
			enum: ['yes', 'no'],
		},
		facialPainNumbness: {
			type: String,
			enum: ['yes', 'no'],
		},
		toothacheOrMobileTooth: {
			type: String,
			enum: ['yes', 'no'],
		},
		palatalUlceration: {
			type: String,
			enum: ['yes', 'no'],
		},
		halitosis: {
			type: String,
			enum: ['yes', 'no'],
		},
		skinLesions: {
			type: String,
			enum: ['yes', 'no'],
		},
		fever: {
			type: String,
			enum: ['yes', 'no'],
		},
		headache: {
			type: String,
			enum: ['yes', 'no'],
		},
		alteredSensorium: {
			type: String,
			enum: ['yes', 'no'],
		},
	},
});

module.exports = mongoose.model('fSection1', section1Schema);
