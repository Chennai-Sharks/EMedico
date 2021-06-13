import * as Yup from 'yup';

export const section2FormModel: Array<Record<string, any>> = [
	{
		type: 'title',
		label: 'Pulmonary Manifestations',
	},
	{
		name: 'feverOnBroadAntibiotics',
		label: 'Refractory fever on broad-spectrum antibiotics',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'nonproductiveCough',
		label: 'Non-productive cough',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'progressiveDyspnea',
		label: 'Progressive dyspnea',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'pleuriticChestPain',
		label: 'Pleuritic Chest Pain',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		type: 'title',
		label: 'Cutaneous and soft tissue mucormycosis',
	},
	{
		name: 'erythema',
		label: 'Erythema',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'induration',
		label: 'Induration',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'blackEscharAtTrauma',
		label: 'Black Eschar at trauma/puncture site',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'musclePain',
		label: 'Muscle pain with deeper involvement',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		type: 'title',
		label: 'Gastrointestinal mucormycosis',
	},
	{
		name: 'fever',
		label: 'Fever',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'bleedingPerAnus',
		label: 'Bleeding per anus',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'massLikeLesions',
		label: 'Mass like lesions',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'gutPerforation',
		label: 'Perforation of gut',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		type: 'title',
		label: 'Mucormycosis of bones and joints',
	},
	{
		name: 'localPainAndTenderness',
		label: 'Local pain and tenderness',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'cellulitis',
		label: 'Cellulitis',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		type: 'title',
		label: 'Cerebral involvement',
	},
	{
		name: 'alteredSensorium',
		label: 'Altered sensorium',
		type: 'radio',
		props: ['yes', 'no'],
	},
];

let intermediate = section2FormModel.filter((item) => item.type !== 'title');

let validationSchema: Record<string, any> = {};

intermediate.forEach((item) => {
	validationSchema[item.name] = Yup.string().required('Required');
});

export const Section2ValidationSchema = validationSchema;

// export { validationSchema };

// console.log(validationSchema);
