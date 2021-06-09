import { Grid, makeStyles } from '@material-ui/core';
import { Field } from 'formik';
import React from 'react';
import CustomChipInput from 'widgets/CustomChipInput/CustomChipInput';
import CustomDropDown from 'widgets/CustomDropdown/CustomDropDown';
import CustomRadio from 'widgets/CustomRadio/CustomRadio';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';

interface BFSection1FormProps {
	values: any;
}

const BFSection1Form: React.FC<BFSection1FormProps> = (props) => {
	const classes = useStyles();
	const fieldName = ["headache", "lowFever", "malaiseAndLethargy", "nasalObstruction", "nasaldischarge",
				  "eyeRedness", "eyeWatering", "periorbitalSwelling", "eyeDiscoloration","proptosis",
				  "diplopia", "visionDiminution", "ptosis", "ophthalmoplegia", "facialSwellingOrPain",
				  "parenthesia", "infraOrbitalNumbness", "toothAche", "loosingTeeth", "oralMucosaDiscoloration",
				  "teethSensationLoss", "teethNumbness", "ulceration", "palatalPerforation"];

	const fieldLabel = ["headache", "lowFever", "malaiseAndLethargy", "nasalObstruction", "nasaldischarge",
				  "eyeRedness", "eyeWatering", "periorbitalSwelling", "eyeDiscoloration","proptosis",
				  "diplopia", "visionDiminution", "ptosis", "ophthalmoplegia", "facialSwellingOrPain",
				  "parenthesia", "infraOrbitalNumbness", "toothAche", "loosingTeeth", "oralMucosaDiscoloration",
				  "teethSensationLoss", "teethNumbness", "ulceration", "palatalPerforation"];

	return (
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
				<h1 style = {{marginLeft: "0.8em", textDecoration: "underline"}} >
					Predisposing Factors: 
				</h1>			{/* I've summa made these styles, feel free it change it :3 */}
				<CustomRadio
					name='concurrentCovid'
					label='Concurrent Covid'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='diabetesMellitus'
					label='Uncontrolled Diabetes Mellitus'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='highDoseOfSteroids'
					label='High Dose Of Steroids'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='malignancy'
					label='Malignancy'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='broadspectrumAntibiotics'
					label='Prolonged use of broad-spectrum antibiotics'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='prolongedICU'
					label='Prolonged ICU stays'
					topMargin={true}
					items={['yes', 'no']}
				/>	
				<h1 style = {{marginLeft: "0.8em", textDecoration: "underline"}} >
					Clinical Presentation: 
				</h1>
				{fieldName.map(
					(item, index) => {	
							const fieldLabelContent = fieldLabel[index]					
							return (
								<CustomRadio
									name={item}
									label={fieldLabelContent}
									topMargin={true}
									items={['yes', 'no']}
									key = {index}
								/>	
								)																				
						}
					)
				}
{/* 
Object.keys(BFSection1DataTransformation(data?.data)).map(
										(item, index) => {
											console.log(item);
											const newData = BFSection1DataTransformation(data?.data);
											return (
												<div
													style={{
														width: '50%',
														display: 'flex',
														flexDirection: 'row',
														alignItems: 'center',
													}}
													key={index}
												>
													<Typography className={classes.title} style={{}}>
														{toHeaderCase(item)}:
													</Typography>
													{
														/// Post covid symptoms is array, so this the hack to bring
														/// - if array is empty.
														toHeaderCase(item) === 'Post Covid Symptoms' ? (
															(newData[item] as string[]).length > 0 ? (
																(newData[item] as string[]).map(
																	(item, index) => (
																		<Typography key={index}>
																			{item ? `${item},` : '-'}
																		</Typography>
																	)
																)
															) : (
																<Typography> - </Typography>
															)
														) : (
															<Typography>
																{newData[item] ? newData[item] : '-'}
															</Typography>
														)
													}
												</div>
											);
										}
									)} */}

				{/* <CustomRadio
					name='covid'
					label='Tested Positive for Covid in the past?'
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='ventilatorOrProlongedLifeSupport'
					label='Ventilator or in prolonged life support'
					items={['yes', 'no']}
				/>

				<Field
					name='diabeticStatus'
					label='Diabetic Status'
					padding={classes.textFieldPadding}
					as={CustomTextField}
				/>
				<Field
					name='steroidHistory'
					label='Steroid History'
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
					name='toothacheOrMobileTooth'
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
				<CustomRadio 
					name='headache' 
					label='Headache' 
					items={['yes', 'no']} 
				/> */}
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
					name='occupation'
					label='Occupation'
					padding={classes.textFieldPadding}
					as={CustomTextField}
				/>
				<br />
				<br />
				<br />
				<br />
				<CustomRadio
					name='recentCovid'
					label='Recently treated COVID -19'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='longtermSteroids'
					label='Long-term Steroids'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='immunocompromised'
					label='Immunocompromised Individuals'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='transplant'
					label='transplant'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='longtermOxygenTherapy'
					label='Long term Oxygen Therapy'
					topMargin={true}
					items={['yes', 'no']}
				/>
				<CustomRadio
					name='mechanicalVentilation'
					label='People under Mechanical Ventilation'
					topMargin={true}
					items={['yes', 'no']}
				/>

				{/* <Field
					name='allergiesToMedication'
					label='Allergies to Medication'
					padding={classes.textFieldPadding}
					as={CustomTextField}
				/>
				<CustomRadio
					name='homecareOrHospitalized'
					topMargin={true}
					label='Home Care or Hospitalized?'
					items={['Home care', 'Hospitalized']}
				/>
				<CustomRadio
					name='sinusitis'
					label='Sinusitis'
					topMargin={true}
					items={['yes', 'no']}
				/>

				<CustomChipInput
					name='postCovidSymptoms'
					label='Post Covid Symptoms'
					value={props.values.postCovidSymptoms}
					padding={classes.textFieldPadding}
				/>				
				<CustomRadio
					name='immunoCompromisedState'
					label='Immuno Compromised?'
					items={['yes', 'no']}
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
				/> */}

					

			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles(() => ({
	layout: {
		width: '100%',
	},

	textFieldPadding: {
		margin: '20px',
		paddingRight: '20px',
		marginBottom: '0px',
	},
}));

export default BFSection1Form;
