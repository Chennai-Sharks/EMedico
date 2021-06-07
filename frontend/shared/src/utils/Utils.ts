export const APIURL =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:4000'
		: 'https://main-emedico-rwkomcoo5sdqbotb-gtw.qovery.io';

export const covidScreeningTest = [
	'covid',
	'homecareOrHospitalized',
	'ventilatorOrProlongedLifeSupport',
];

export const mucormycosisSymptoms = [
	'sinusitis',
	'nasalBlockage',
	'blackishDiscoloration',
	'facialErythema',
	'eyeSymptoms',
	'facialPainNumbness',
	'toothacheOrMobileTooth',
	'palatalUlceration',
	'halitosis',
	'skinLesions',
	'fever',
	'headache',
	'alteredSensorium',
];
