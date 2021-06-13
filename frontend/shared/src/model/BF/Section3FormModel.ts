export const section3FormModel: Array<Record<string, any>> = [
	{
		type: 'title',
		label: 'Nasal endoscopy',
	},
	{
		name: 'ulceration',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'blackishNecroticEschar',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'nasalNotes',
		type: 'textfield',
		label: 'Notes',
	},
	{
		name: 'oralExamination',
		type: 'textfield',
		label: 'Oral Examination ',
	},
	{
		type: 'title',
		label: 'Ocular Examination',
	},
	{
		name: 'eyeRedness',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'eyeWatering',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'proptosis',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'periorbitalEdema',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'ecchymosis',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'restrictedEyeMovement',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'ophthalmoplegia',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'decreasedCornealSensation',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'fundusRedSpot',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'fundusDiscEdema',
		type: 'radio',
		props: ['yes', 'no'],
	},
	{
		name: 'ocularNotes',
		type: 'textfield',
		label: 'Notes',
	},
	{
		name: 'microbiology',
		type: 'checkbox',
		label: 'Microbiology',
		props: [
			'KOH smear',
			'Specimen: Nasal mucosal scraping in normal saline',
			'Specimen: Tissue biopsy from suspected mucosa in normal saline',
			'Fungal Culture',
		],
	},
	{
		name: 'pathology',
		type: 'checkbox',
		label: 'Pathology',
		props: ['Specimen: Debrided tissue in 10% Formalin'],
	},
	{
		name: 'radiology',
		type: 'checkbox',
		label: 'Radiology',
		props: [
			'HRCT Scan of Orbit, Paranasal sinuses & Brain, with contrast if renal status permits',
			'MRI Paranasal sinuses and orbits',
		],
	},
	{
		name: 'generalInvestigation',
		type: 'checkbox',
		label: 'General Investigation',
		props: [
			'CBC',
			'Fasting and Post Prandial Blood Sugar Monitoring',
			'HbA1C',
			'LFT',
			'RFT with electrolytes',
		],
	},
];
