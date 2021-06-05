import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';


import {
	section1FormInitialValues,
	AddBFSection1FormProvider,
	AddPatientProvider,
	BFSection1BeforeFormSubmit,
} from '@emedico/shared';

import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomDropDown from 'widgets/CustomDropdown/CustomDropDown';
import CustomRadio from 'widgets/CustomRadio/CustomRadio';
import CustomButton from 'widgets/CustomButton/CustomButton';
import CustomChipInput from 'widgets/CustomChipInput/CustomChipInput';
import { CircularProgress } from '@material-ui/core';

interface BFSection1FormProps {}

const BFSection1Form: React.FC<BFSection1FormProps> = () => {
	const classes = useStyles();
	const addPatientProvider = AddPatientProvider();
	const bfSection1FormProvider = AddBFSection1FormProvider();
	
	return (
		<CustomNavBar pageName='Black Fungus - Add Patients'>
			<Formik
				initialValues={section1FormInitialValues}
				onSubmit={async (values) => {
					console.log(values);
					const data = BFSection1BeforeFormSubmit(values);
					console.log(data);
					const response = await addPatientProvider.mutateAsync({
						name: values.name,
						dpid: values.dpid,
					});
					const mongoId: string = response.data._id;
					const response1 = await bfSection1FormProvider.mutateAsync({
						mongoId,
						data,
					});

					console.log(response1.data);
				}}
			>
				{({ values, isSubmitting }) => (
					<Form>
						<CustomCard
							customStyle={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
						>
							<Typography className={classes.title} variant='h5'>
								Section 1
							</Typography>
							<Divider />

							<Grid container spacing={3} className={classes.layout}>
								<Grid item xs={12} sm={6}>
									<Field
										name='name'
										label='Name'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<Field
										name='age'
										label='Age'
										type='number'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<Field
										name='personalHistory'
										label='Personal History'
										type='select'
										items={[
											'single',
											'married',
											'divorce',
											'separated',
											'widowed',
											'children',
										]}
										as={CustomDropDown}
									/>
									<CustomRadio
										name='covid'
										label='Tested Positive for Covid in the past?'
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='ventilatorProlongedLifeSupport'
										label='Ventilator or in prolonged life support'
										items={['yes', 'no']}
									/>
									<Field
										name='immunoCompromised'
										label='Immuno Compromised State'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<Field
										name='steroidHistory'
										label='Steroid History'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<Field
										name='diabeticStatus'
										label='Diabetic Status'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<CustomRadio
										name='blackishDiscoloration'
										// topMargin={true}
										label='Blackish Discoloration'
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='eyeSymptoms'
										label='Eye Symptoms'
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='toothacheMobileTooth'
										label='Toothache or MobileTooth'
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='halitosis'
										label='Halitosis'
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='fever'
										label='Fever'
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='alteredSensorium'
										label='Altered Sensorium'
										items={['yes', 'no']}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Field
										name='dpid'
										label='Patient ID'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<Field
										name='gender'
										label='Gender'
										type='select'
										items={['male', 'female', 'other']}
										as={CustomDropDown}
									/>
									<Field
										name='allergiesToMedication'
										label='Allergies to Medication'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<CustomRadio
										name='homecareHospitalized'
										topMargin={true}
										label='Home Care or Hospitalized?'
										items={['Home Care', 'Hospitalized']}
									/>
									<CustomRadio
										name='sinusitis'
										label='Sinusitis'
										topMargin={true}
										items={['yes', 'no']}
									/>

									<Field
										name='steroidHistory'
										label='Steroid History'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<CustomChipInput
										name='postCovidSymptoms'
										label='Post Covid Symptoms'
										value={values.postCovidSymptoms}
										padding={classes.textFieldPadding}
									/>
									<Field
										name='occupation'
										label='Occupation'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
									<CustomRadio
										name='nasalBlockage'
										label='Nasal Blockage'
										topMargin={true}
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='facialErythema'
										label='Facial Erythema'
										topMargin={true}
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='facialPainNumbness'
										label='Facial Pain or Numbness'
										topMargin={true}
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='palatalUlceration'
										label='Palatal Ul Ceration'
										// topMargin={false}
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='skinLesions'
										label='Skin Lesions'
										topMargin={true}
										items={['yes', 'no']}
									/>
									<CustomRadio
										name='headache'
										label='Headache'
										items={['yes', 'no']}
									/>
								</Grid>
							</Grid>
							<Divider />
							<CustomButton
								disabled={isSubmitting}
								customStyle={{
									marginLeft: '40%',
									marginRight: '40%',
									marginBottom: '20px',
								}}
								type='submit'
							>
								{bfSection1FormProvider.isLoading ? (
									<CircularProgress />
								) : (
									'submit'
								)}
							</CustomButton>
						</CustomCard>
					</Form>
				)}
			</Formik>
		</CustomNavBar>
	);
};

const useStyles = makeStyles(() => ({
	layout: {
		width: '100%',
	},
	title: {
		margin: '20px 20px',
		fontSize: '1.5 rem',
		fontWeight: 'bold',
	},
	textFieldPadding: {
		margin: '20px',
		paddingRight: '20px',
		marginBottom: '0px',
	},
}));

export default BFSection1Form;
