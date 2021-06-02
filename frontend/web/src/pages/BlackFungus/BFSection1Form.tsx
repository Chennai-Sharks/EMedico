import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import { section1FormInitialValues } from '@emedico/shared';
import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';

interface BFSection1FormProps {}

const BFSection1Form: React.FC<BFSection1FormProps> = (props) => {
	const classes = useStyles();
	return (
		<CustomNavBar pageName='Black Fungus - Add Patients'>
			<Formik
				initialValues={section1FormInitialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{() => (
					<Form>
						<CustomCard>
							<Typography className={classes.title} variant='h5'>
								Section 1
							</Typography>
							<Divider />

							<Grid container spacing={3} style={{ overflowY: 'unset' }}>
								<Grid alignItems='stretch' item xs={12} sm={6}>
									<Field
										name='name'
										label='Name'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Field
										name='dpid'
										label='Patient ID'
										padding={classes.textFieldPadding}
										as={CustomTextField}
									/>
								</Grid>
							</Grid>
						</CustomCard>
					</Form>
				)}
			</Formik>
		</CustomNavBar>
	);
};

const useStyles = makeStyles(() => ({
	title: {
		margin: '20px 20px',
		fontSize: '1.5 rem',
		fontWeight: 'bold',
	},
	textFieldPadding: {
		margin: '20px',
		marginBottom: '0px',
		width: '100%',
	},
}));

export default BFSection1Form;
