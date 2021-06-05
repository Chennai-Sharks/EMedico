import { Divider, makeStyles, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import {
	section1FormInitialValues,
	AddBFSection1FormProvider,
	AddPatientProvider,
	BFSection1BeforeFormSubmit,
} from '@emedico/shared';

import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomButton from 'widgets/CustomButton/CustomButton';
import { CircularProgress } from '@material-ui/core';
import BFSection1Form from './components/BFSection1Form';

interface BFSection1CreateProps {}

const BFSection1Create: React.FC<BFSection1CreateProps> = () => {
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

							<BFSection1Form values={values} />

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

export default BFSection1Create;
