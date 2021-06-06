import React from 'react';
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import CustomAutoComplete from 'widgets/CustomAutoComplete/CustomAutoComplete';
import {
	CircularProgress,
	Divider,
	LinearProgress,
	makeStyles,
	Typography,
} from '@material-ui/core';
import CustomCard from 'widgets/CustomCard/CustomCard';

import {
	GetBFAllPatients,
	GetBFSection1Data,
	BFSection1DataTransformation,
	section1FormInitialValues,
	getPatientStore,
} from '@emedico/shared';
import { Form, Formik } from 'formik';
import BFSection1Form from './components/BFSection1Form';
import CustomButton from 'widgets/CustomButton/CustomButton';

interface BFSection1UpdateProps {}

const BFSection1Update: React.FC<BFSection1UpdateProps> = (props) => {
	const classes = useStyles();
	// const [patientMongoId, setPatientMongoId] = useState('');

	const getPatient = getPatientStore((state) => state);

	const allPatients = GetBFAllPatients();
	const { data, isLoading, isError, refetch } = GetBFSection1Data(
		getPatient.mongoId
	);

	// if (patientMongoId && !isLoading && !isError) {
	// 	console.log(isError);
	// 	const ndata = BFSection1DataTransformation(data?.data);
	// 	setpd((olddata) => {
	// 		if (olddata === patientdata) return;
	// 		else return ndata;
	// 	}); // console.log(BFSection1DataTransformation(data?.data));
	// }
	return (
		<Formik
			enableReinitialize={true}
			initialValues={
				!data
					? section1FormInitialValues
					: {
							...BFSection1DataTransformation(data.data),
							name: getPatient.name,
							dpid: getPatient.dpid,
					  }
			}
			onSubmit={() => {}}
		>
			{({ values, isSubmitting }) => {
				console.log(values);
				return (
					<CustomNavBar pageName='Black Fungus - Update Details of Patient'>
						{allPatients.isLoading && <LinearProgress />}

						{!allPatients.isLoading && !allPatients.isError && (
							<div className={classes.content}>
								<CustomAutoComplete
									label='Enter Patient name'
									data={allPatients.data?.data}
									onChange={(_: any, value: any) => {
										console.log('value' + value);
										if (value) {
											// setPatientMongoId(value._id);
											getPatient.setMongoId(value._id);
											getPatient.setName(value.name);
											getPatient.setDpid(value.dpid);
											refetch();
										} else {
											// setPatientMongoId('');
											getPatient.setMongoId('');
										}
									}}
								/>
								{data && !isLoading && !isError ? (
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
												{false ? <CircularProgress /> : 'Update'}
											</CustomButton>
										</CustomCard>
									</Form>
								) : (
									isLoading && <LinearProgress />
								)}
							</div>
						)}
					</CustomNavBar>
				);
			}}
		</Formik>
	);
};

const useStyles = makeStyles((theme) => ({
	content: {
		paddingTop: theme.spacing(3),
	},
	title: {
		margin: '20px 20px',
		fontSize: '1.5 rem',
		fontWeight: 'bold',
	},
}));
export default BFSection1Update;
