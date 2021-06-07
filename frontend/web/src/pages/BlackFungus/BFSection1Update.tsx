import React, { useState } from 'react';
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
	UpdateBFSection1Data,
	BFSection1BeforeFormSubmit,
	getPatientStore,
	snackBarStore,
} from '@emedico/shared';
import { Form, Formik } from 'formik';
import BFSection1Form from './components/BFSection1Form';
import CustomButton from 'widgets/CustomButton/CustomButton';
import CustomDialog from 'widgets/CustomDialog/CustomDialog';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';

interface BFSection1UpdateProps {}

const BFSection1Update: React.FC<BFSection1UpdateProps> = (props) => {
	const classes = useStyles();

	const getPatient = getPatientStore((state) => state);

	const allPatients = GetBFAllPatients();
	const { data, isLoading, isError, refetch } = GetBFSection1Data(
		getPatient.mongoId
	);

	const updateForm = UpdateBFSection1Data();

	const snackBar = snackBarStore((state) => state);

	const [loading, setLoading] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);

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
			onSubmit={async (values, action) => {
				action.setSubmitting(true);
				setLoading(true);

				try {
					const data = BFSection1BeforeFormSubmit({ ...values });
					console.log(data);

					console.log(
						await updateForm.mutateAsync({ data, mongoId: getPatient.mongoId })
					);

					setLoading(false);
					setOpenDialog(true);
				} catch (error) {
					setLoading(false);
					console.log(error.response.data.message);
					snackBar.setOpen(true);
					snackBar.setmessage(error.response.data.message);
				}
				action.setSubmitting(false);
			}}
		>
			{({ values, isSubmitting }) => {
				return (
					<CustomNavBar pageName='Black Fungus - Update Details of Patient'>
						{allPatients.isLoading && <LinearProgress />}
						{allPatients.isError && (
							<Typography style={{ marginTop: '40%', marginLeft: '40%' }}>
								No Patients there
							</Typography>
						)}

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
												{loading ? <CircularProgress /> : 'Update'}
											</CustomButton>
										</CustomCard>
									</Form>
								) : (
									isLoading && <LinearProgress />
								)}
								<CustomDialog
									open={openDialog}
									notOkButtonText={undefined}
									okButtonText='Okay'
									onOkHandled={() => {
										setOpenDialog(false);
										getPatient.setMongoId('');
										window.location.reload();
									}}
									title='Success'
									content='Patient Details are updated successfully.'
									onClose={() => {}}
								/>
								<CustomSnackBar
									open={snackBar.open}
									handleClose={() => snackBar.setOpen(false)}
									message={snackBar.message}
									severity='error'
								/>
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
