import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { Field, getIn, useFormikContext } from 'formik';
import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomDropDown from 'widgets/CustomDropdown/CustomDropDown';
import CustomRadio from 'widgets/CustomRadio/CustomRadio';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import { BFFormInitialValues } from '@emedico/shared';
import { formStyles } from './BFSection1FormStyles';
      
interface BFSection1FormProps {}

const fieldName = [
	'concurrentCovid',
	'recentCovid',
	'diabetesMellitus',
	'longtermSteroids',
	'highDoseOfSteroids',
	'immunocompromised',
	'malignancy',
	'transplant',
	'broadspectrumAntibiotics',
	'longtermOxygenTherapy',
	'prolongedICU',
	'mechanicalVentilation',
	'headache',
	'lowFever',
	'malaiseAndLethargy',
	'nasalObstruction',
	'nasaldischarge',
	'eyeRedness',
	'eyeWatering',
	'periorbitalSwelling',
	'eyeDiscoloration',
	'proptosis',
	'diplopia',
	'visionDiminution',
	'ptosis',
	'ophthalmoplegia',
	'facialSwellingOrPain',
	'parenthesia',
	'infraOrbitalNumbness',
	'toothache',
	'teethLoosening',
	'oralMucosaDiscoloration',
	'teethSensationLoss',
	'teethNumbness',
	'ulceration',
	'palatalPerforation',
];

const fieldLabel = [
	'Concurrent Covid',
	'Recently treated COVID -19',
	'Uncontrolled Diabetes Mellitus',
	'Long-term Steroids',
	'High Dose Of Steroids',
	'Immunocompromised Individuals',
	'Malignancy',
	'Transplant',
	'Prolonged use of broad-spectrum antibiotics',
	'Long term Oxygen Therapy',
	'Prolonged ICU stays',
	'People under Mechanical Ventilation',
	'Headache',
	'Low grade `fever',
	'Malaise & Lethargy',
	'Nasal Obstruction',
	'Nasal discharge often bloody',
	'Pain and redness around eyes',
	'Eyes Watering',
	'Periorbital Swelling',
	'Eye Discoloration',
	'Proptosis',
	'Diplopia',
	'Diminution of vision',
	'Ptosis',
	'Ophthalmoplegia',
	'Facial Swelling & Pain',
	'Parenthesia',
	'Numbness in infra Orbital region',
	'Toothache',
	'Loosening of teeth',
	'Blackish discoloration of oral mucosa',
	'Loss of sensation in teeth',
	'Teeth Numbness',
	'Ulceration',
	'Perforation over palatal region',
];

const BFSection1Form: React.FC<BFSection1FormProps> = () => {
	const classes = formStyles();

	const { errors, touched } = useFormikContext<typeof BFFormInitialValues>();

	return (
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
						name='section1.name'
						label='Name'
						padding={classes.textFieldPadding}
						as={CustomTextField}
						error={errors.section1?.name && touched.section1?.name}
						helperText={errors.section1?.name}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field
						name='section1.age'
						label='Age'
						type='number'
						padding={classes.textFieldPadding}
						as={CustomTextField}
						error={!!(errors.section1?.age && touched.section1?.age)}
						helperText={errors.section1?.age}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field
						name='section1.dpid'
						label='Patient ID'
						padding={classes.textFieldPadding}
						as={CustomTextField}
						error={errors.section1?.dpid && touched.section1?.dpid}
						helperText={errors.section1?.dpid}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field
						name='section1.gender'
						label='Gender'
						type='select'
						items={['male', 'female', 'other']}
						as={CustomDropDown}
						error={errors.section1?.gender && touched.section1?.gender}
						helperText={errors.section1?.gender}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field
						name='section1.occupation'
						label='Occupation'
						padding={classes.textFieldPadding}
						as={CustomTextField}
						error={errors.section1?.occupation && touched.section1?.occupation}
						helperText={errors.section1?.occupation}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<Field
						name='section1.personalHistory'
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
						error={
							errors.section1?.personalHistory &&
							touched.section1?.personalHistory
						}
						helperText={errors.section1?.personalHistory}
					/>
				</Grid>

				{fieldName.map((item: string, index) => {
					const fieldLabelContent = fieldLabel[index];
					return (
						<Grid item xs={12} sm={6} key={index}>
							<CustomRadio
								name={`section1.${item}`}
								label={fieldLabelContent}
								items={['yes', 'no']}
								error={!!getIn(errors.section1, item)}
								// getIn is from formik. hover over getIn to see it's info
								// you will get that.
							/>
						</Grid>
					);
				})}
			</Grid>
		</CustomCard>
	);
};

export default BFSection1Form;
