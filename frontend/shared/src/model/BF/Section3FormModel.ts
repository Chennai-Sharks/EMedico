import * as Yup from 'yup';

export const section3FormModel: Array<Record<string, any>> = [
  {
    type: 'bigtitle',
    label: 'Diagnosis',
  },
  {
    type: 'title',
    label: 'Nasal endoscopy',
  },
  {
    name: 'ulceration',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Ulceration',
  },
  {
    name: 'blackishNecroticEschar',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Blackish necrotic eschar',
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
    label: 'Eye redness',
  },
  {
    name: 'eyeWatering',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Eye watering',
  },
  {
    name: 'proptosis',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Proptosis',
  },
  {
    name: 'periorbitalEdema',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Periorbital edema',
  },
  {
    name: 'ecchymosis',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Ecchymosis',
  },
  {
    name: 'restrictedEyeMovement',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Restricted eye movement',
  },
  {
    name: 'ophthalmoplegia',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Ophthalmoplegia',
  },
  {
    name: 'decreasedCornealSensation',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Decreased corneal sensation',
  },
  {
    name: 'fundusRedSpot',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Cherry Red spot in fundus',
  },
  {
    name: 'fundusDiscEdema',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Disc edema in fundus',
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

let dummy = section3FormModel.filter((item) => item.type !== 'title');

let validationSchema: Record<string, any> = {};

dummy.forEach((item) => {
  if (item.type === 'checkbox')
    validationSchema[item.name] = Yup.array()
      .min(1, 'Required')
      .of(Yup.string().required('Required'))
      .required('Required');
  else validationSchema[item.name] = Yup.string().required('Required');
});

export const Section3ValidationSchema = validationSchema;
