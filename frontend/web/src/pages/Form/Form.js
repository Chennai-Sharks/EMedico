import React from 'react';
import CustomDropdownSelect from 'widgets/CustomDropdownSelect/CustomDropdownSelect';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomRadioButton from 'widgets/CustomRadioButton/CustomRadioButton';
import CustomButton from 'widgets/CustomButton/CustomButton';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	name: yup.string().required().max(10),
	gender: yup.string().required(),
	personalHistory: yup.string().required(),
});

const Form1 = () => {
	const customStyles = {
		item: {
			display: 'flex',
			margin: 30,
		},
	};

	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					dpid: '',
					age: '',
					gender: '',
					personalHistory: '',
					occupation: '',
					allergiesToMedication: '',
					covid: '',
					homecareHospitalized: '',
					VentilatorProlongedLifeSupport: '',
					diabeticStatus: '',
					immunoCompromised: '',
					steroidHistory: '',
					postCovidSymptoms: '',
					sinusitis: '',
					nasalBlockage: '',
					blackishDiscoloration: '',
					facialErythema: '',
					eyeSymptoms: '',
					facialPainNumbness: '',
					toothacheMobileTooth: '',
					palatalUlceration: '',
					halitosis: '',
					skinLesions: '',
					fever: '',
					headache: '',
					alteredSensorium: '',
				}}
				validationSchema={validationSchema}
				onSubmit={async (data, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					console.log(data);
					setSubmitting(false);
					resetForm();
				}}
			>
				{({ values, errors, isSubmitting }) => (
					<Form>
						<CustomTextField
							name='name'
							label='Name'
							type='input'
							placeholder='eg: John Doe'
						/>
						<CustomTextField
							name='dpid'
							label='Patient ID'
							type='input'
							placeholder='eg: 123xyz'
						/>
						<CustomTextField
							name='age'
							label='Age'
							type='number'
							placeholder='eg: 20'
						/>

						<CustomDropdownSelect
							name='gender'
							label='Gender'
							type='select'
							array={['male', 'female', 'other']}
						/>
						<CustomDropdownSelect
							name='personalHistory'
							label='Personal History'
							type='select'
							array={[
								'single',
								'married',
								'divorce',
								'separated',
								'widowed',
								'children',
							]}
						/>

						<CustomTextField
							name='occupation'
							label='Occupation'
							placeholder='eg: Engineer'
						/>
						<CustomTextField
							name='allergiesToMedication'
							label='Allergies to Medication'
							type='number'
							placeholder='eg: Headache, Nausea'
						/>

						<CustomRadioButton
							head={'Tested Positive for Covid in the past?'}
							name='covid'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='covid'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Home Care or Hospitalized?'}
							name='homecareHospitalized'
							type='radio'
							value='Home Care'
							label='Home Care'
						/>
						<CustomRadioButton
							name='homecareHospitalized'
							type='radio'
							value='Hospitalized'
							label='Hospitalized'
						/>

						<CustomRadioButton
							head={'Ventilator/Prolonged Life Support'}
							name='VentilatorProlongedLifeSupport'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='VentilatorProlongedLifeSupport'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomTextField
							name='diabeticStatus'
							label='Diabetic Status'
							placeholder='eg: IDK LOL'
						/>
						<CustomTextField
							name='immunoCompromised'
							label='Immuno Compromised'
							placeholder='eg: IDK LOL'
						/>
						<CustomTextField
							name='steroidHistory'
							label='Steroid History'
							placeholder='eg: IDK LOL'
						/>

						<CustomTextField
							name='postCovidSymptoms'
							label='Post Covid Symptoms'
							multiline
							placeholder='eg: IDK LOL'
						/>

						<CustomRadioButton
							head={'Sinusitis'}
							name='sinusitis'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='sinusitis'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Nasal Blockage'}
							name='nasalBlockage'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='nasalBlockage'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Blackish Discoloration'}
							name='blackishDiscoloration'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='blackishDiscoloration'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Facial Erythema'}
							name='facialErythema'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='facialErythema'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Eye Symptoms'}
							name='eyeSymptoms'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='eyeSymptoms'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Facial Pain/ Numbness'}
							name='facialPainNumbness'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='facialPainNumbness'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Toothache/MobileTooth'}
							name='toothacheMobileTooth'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='toothacheMobileTooth'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Palatal Ul Ceration'}
							name='palatalUlceration'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='palatalUlceration'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Halitosis'}
							name='halitosis'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='halitosis'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Skin Lesions'}
							name='skinLesions'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='skinLesions'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Fever'}
							name='fever'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='fever'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Headache'}
							name='headache'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='headache'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomRadioButton
							head={'Altered Sensorium'}
							name='alteredSensorium'
							type='radio'
							value='Yes'
							label='Yes'
						/>
						<CustomRadioButton
							name='alteredSensorium'
							type='radio'
							value='No'
							label='No'
						/>

						<CustomButton
							style={customStyles.item}
							disabled={isSubmitting}
							children='Submit'
							type='submit'
						/>

						<pre style={customStyles.item}>
							{JSON.stringify(values, null, 2)}
						</pre>
						<pre style={customStyles.item}>
							{JSON.stringify(errors, null, 2)}
						</pre>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Form1;
