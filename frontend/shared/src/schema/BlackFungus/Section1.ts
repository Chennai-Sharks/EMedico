export const section1FormInitialValues = {
	name: '',
	dpid: '',
	age: '',
	gender: '',
	personalHistory: '',
	occupation: '',
	allergiesToMedication: '',
	covid: '',
	homecareOrHospitalized: '',
	ventilatorOrProlongedLifeSupport: '',
	diabeticStatus: '',
	immunoCompromisedState: '',
	steroidHistory: '',
	postCovidSymptoms: [],
	sinusitis: '',
	nasalBlockage: '',
	blackishDiscoloration: '',
	facialErythema: '',
	eyeSymptoms: '',
	facialPainNumbness: '',
	toothacheOrMobileTooth: '',
	palatalUlceration: '',
	halitosis: '',
	skinLesions: '',
	fever: '',
	headache: '',
	alteredSensorium: '',
};

data: [
	// array of objects.
	{
		type: '', // values in this can be textfield, radio,dropdown, title
		name: '', // this is used for formik. for title there will be not be this field
		label: '', // label for ui
		props: {
			// this object has differnt values for different types. no props for title.
		},
	},
];

// for type textfield,
props: {
} //empty object.

// for type radio,
props: {
	options: []; // array of string,
}

// for type dropdown,
props: {
	items: []; // array of string;
}
