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
				<CustomRadio
					name='immunoCompromised'
					label='Immuno Compromised?'
					items={['yes', 'no']}
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
				<CustomRadio name='halitosis' label='Halitosis' items={['yes', 'no']} />
				<CustomRadio name='fever' label='Fever' items={['yes', 'no']} />
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
					value={props.values.postCovidSymptoms}
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
				<CustomRadio name='headache' label='Headache' items={['yes', 'no']} />
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
