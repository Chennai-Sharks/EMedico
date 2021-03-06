// A Note for future updates
// As of now this initial values and the data in model folder is not coupled.
// In future remove this and extract the name (name: 'hospitalizedOrHomeCare')
// from the Form Model. By this way, when changes are made to the model,
// it is automatically reflected in the initial values too(Like how it is done for schema).
// NO NEED OF COPYING. MAKE THE CODE DRY!

export const BFFormInitialValues = {
  section1: {
    name: '',
    dpid: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: '',
    city: '',
    personalHistory: '',
    occupation: '',
    concurrentCovid: '',
    hospitalizedOrHomeCare: '',
    recentCovid: '',
    diabetesMellitus: '',
    longtermSteroids: '',
    highDoseOfSteroids: '',
    immunocompromised: '',
    malignancy: '',
    transplant: '',
    broadspectrumAntibiotics: '',
    longtermOxygenTherapy: '',
    prolongedICU: '',
    mechanicalVentilation: '',
    headache: '',
    lowFever: '',
    malaiseAndLethargy: '',
    nasalObstruction: '',
    nasaldischarge: '',
    eyeRedness: '',
    eyeWatering: '',
    periorbitalSwelling: '',
    eyeDiscoloration: '',
    proptosis: '',
    diplopia: '',
    visionDiminution: '',
    ptosis: '',
    ophthalmoplegia: '',
    facialSwellingOrPain: '',
    parenthesia: '',
    infraOrbitalNumbness: '',
    toothache: '',
    teethLoosening: '',
    oralMucosaDiscoloration: '',
    teethSensationLoss: '',
    teethNumbness: '',
    ulceration: '',
    palatalPerforation: '',
  },
  section2: {
    feverOnBroadAntibiotics: '',
    nonproductiveCough: '',
    progressiveDyspnea: '',
    pleuriticChestPain: '',
    erythema: '',
    induration: '',
    blackEscharAtTrauma: '',
    musclePain: '',
    fever: '',
    bleedingPerAnus: '',
    massLikeLesions: '',
    gutPerforation: '',
    localPainAndTenderness: '',
    cellulitis: '',
    alteredSensorium: '',
  },
  section3: {
    ulceration: '',
    blackishNecroticEschar: '',
    nasalNotes: '',
    oralExamination: '',
    eyeRedness: '',
    eyeWatering: '',
    proptosis: '',
    periorbitalEdema: '',
    ecchymosis: '',
    restrictedEyeMovement: '',
    ophthalmoplegia: '',
    decreasedCornealSensation: '',
    fundusRedSpot: '',
    fundusDiscEdema: '',
    ocularNotes: '',
    microbiology: [],
    pathology: [],
    radiology: [],
    generalInvestigation: [],
  },
};

// data: [
// 	// array of objects.
// 	{
// 		type: '', // values in this can be textfield, radio,dropdown, title
// 		name: '', // this is used for formik. for title there will be not be this field
// 		label: '', // label for ui
// 		props: {
// 			// this object has different values for different types. no props for title.
// 		},
// 	},
// ];

// // for type textfield,
// props: {
// } //empty object.

// // for type radio,
// props: {
// 	options: []; // array of '',
// }

// // for type dropdown,
// props: {
// 	items: []; // array of '';
// }
