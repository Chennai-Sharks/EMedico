import * as Yup from 'yup';

export const section1FormModel: Array<Record<string, any>> = [
  {
    type: 'title',
    label: 'General Details',
  },
  {
    name: 'name',
    type: 'textfield',
    label: 'Name',
  },
  {
    name: 'dpid',
    type: 'textfield',
    label: 'Patient ID',
  },
  {
    name: 'age',
    type: 'textfield',
    label: 'Age',
  },
  {
    name: 'gender',
    type: 'dropdown',
    props: ['male', 'female', 'other'],
    label: 'Gender',
  },
  {
    name: 'phoneNumber',
    type: 'textfield',
    label: 'Phone number',
  },
  {
    name: 'email',
    type: 'textfield',
    label: 'Email',
  },
  {
    name: 'city',
    type: 'textfield',
    label: 'Town/City',
  },
  {
    name: 'personalHistory',
    type: 'dropdown',
    props: ['single', 'married', 'divorce', 'separated', 'widowed', 'children'],
    label: 'Personal History',
  },
  {
    name: 'occupation',
    type: 'textfield',
    label: 'Occupation',
  },
  {
    type: 'title',
    label: 'Predisposing Factors',
  },
  {
    name: 'vaccination',
    type: 'dropdown',
    props: ['None', '1 dose', '2 doses'],
    label: 'Vaccinated',
  },
  {
    name: 'complaintRegion',
    type: 'dropdown',
    props: ['Mouth','Nose','Ear','Face'],
    label: 'Region of complaint'
  },
  {
    name: 'concurrentCovid',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Concurrent covid',
  },
  {
    name: 'recentCovid',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Recently treated for Covid',
  },

  {
    name: 'diabetesMellitus',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Uncontrolled Diabetes Mellitus',
  },
  {
    name: 'longtermSteroids',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Long term Steroids',
  },
  {
    name: 'highDoseOfSteroids',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'High dose of Steroids',
  },
  {
    name: 'immunocompromised',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Immuno-compromised individual',
  },
  {
    name: 'malignancy',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Malignancy',
  },
  {
    name: 'transplant',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Transplant',
  },
  {
    name: 'broadspectrumAntibiotics',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Broad spectrum Antibiotics',
  },
  {
    name: 'longtermOxygenTherapy',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Longterm Oxygen Therapy',
  },
  {
    name: 'prolongedICU',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Prolonged ICU stays',
  },
  {
    name: 'mechanicalVentilation',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Mechanical Ventilation',
  },
  {
    type: 'bigtitle',
    label: 'Clinical Presentation',
  },
  {
    type: 'title',
    label: 'Generalised Symptoms',
  },
  {
    name: 'headache',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Headache',
  },
  {
    name: 'lowFever',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Low fever',
  },
  {
    name: 'malaiseAndLethargy',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Malaise and Lethargy',
  },
  {
    type: 'title',
    label: 'Nasal Symptoms',
  },
  {
    name: 'nasalObstruction',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Nasal Obstruction',
  },
  {
    name: 'nasaldischarge',
    type: 'dropdown',
    props: ['bloody', 'brownish', 'blackish', 'None'],
    label: 'Nasal discharge',
  },
  {
    type: 'title',
    label: 'Ocular Manifestations',
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
    name: 'periorbitalSwelling',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Periorbital swelling',
  },
  {
    name: 'eyeDiscoloration',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Eye discoloration',
  },
  {
    name: 'proptosis',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Proptosis',
  },
  {
    name: 'diplopia',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Diplopia',
  },
  {
    name: 'visionDiminution',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Diminution of Vision',
  },
  {
    name: 'ptosis',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Ptosis',
  },
  {
    name: 'ophthalmoplegia',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'ophthalmoplegia',
  },
  {
    name: 'facialSwellingOrPain',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Facial swelling or pain',
  },
  {
    name: 'parenthesia',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Parenthesia',
  },
  {
    name: 'infraOrbitalNumbness',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Numbness in the infra orbital region',
  },
  {
    type: 'title',
    label: 'Oral Manifestations',
  },
  {
    name: 'toothache',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Toothache',
  },
  {
    name: 'teethLoosening',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Loosening of teeth',
  },
  {
    name: 'oralMucosaDiscoloration',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Blackish discoloration of oral mucosa',
  },
  {
    name: 'teethSensationLoss',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Loss of sensation',
  },
  {
    name: 'teethNumbness',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Numbness',
  },
  {
    name: 'ulceration',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Ulceration',
  },
  {
    name: 'palatalPerforation',
    type: 'radio',
    props: ['yes', 'no'],
    label: 'Perforation over palatal region',
  },
];

// Future improvements, just check for item.name in section1FormModel itself. No need
// Extra things.

let dummy = section1FormModel.filter((item) => item.type !== 'title');

let validationSchema: Record<string, any> = {};

dummy.forEach((item) => {
  if (item.name) {
    if (item.name === 'name')
      validationSchema[item.name] = Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required');
    else if (item.name === 'age')
      validationSchema[item.name] = Yup.number()
        .required('Required')
        .positive()
        .integer();
    else validationSchema[item.name] = Yup.string().required('Required');
  }
});

export const Section1ValidationSchema = validationSchema;
