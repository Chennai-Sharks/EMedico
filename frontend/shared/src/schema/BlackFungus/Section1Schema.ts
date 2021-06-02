export const section1Schema = [
	{
		type: 'textfield',
		props: {
			name: 'age',
			type: 'number',
		},

		// type2:'dropdown',
		// type3:'radio',
		// type4:'chip',
	},
	{
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
			enum: [
				'single',
				'married',
				'divorce',
				'separated',
				'widowed',
				'children',
			],
		},
		occupation: String,
		allergiesToMedication: String,
		covidScreeningTest: {
			testedPositiveForCovid: {
				String,
				enum: ['yes', 'no'],
			},
			'homeCare/hospitalized': {
				type: String,
				enum: ['Home care', 'Hospitalized'],
			},
			'ventilator/prolongedLifeSupport': {
				type: String,
				enum: ['yes', 'no'],
			},
		},
		diabeticStatus: String,
		'Immunocompromised state': String,
		SteroidHistory: String,
		postCovidSymptoms: [String],
		mucormycosisSymptoms: {
			sinusitis: ['yes', 'no'],
			nasalBlockage: ['yes', 'no'],
			blackishDiscoloration: ['yes', 'no'],
			facialErythema: ['yes', 'no'],
			eyeSymptoms: ['yes', 'no'],
			'facialPain/numbness': ['yes', 'no'],
			'toothache/mobileTooth': ['yes', 'no'],
			palatalUlceration: ['yes', 'no'],
			halitosis: ['yes', 'no'],
			skinLesions: ['yes', 'no'],
			fever: ['yes', 'no'],
			headache: ['yes', 'no'],
			alteredSensorium: ['yes', 'no'],
		},
	},
];
