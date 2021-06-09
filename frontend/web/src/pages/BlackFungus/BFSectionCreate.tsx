import { Divider, makeStyles, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';

import {
	section1FormInitialValues,
	AddBFSection1FormProvider,
	AddPatientProvider,
	BFSection1BeforeFormSubmit,
	snackBarStore,
} from '@emedico/shared';

import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomButton from 'widgets/CustomButton/CustomButton';
import { CircularProgress } from '@material-ui/core';
import BFSection1Form from './components/BFSection1Form';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';
import CustomDialog from 'widgets/CustomDialog/CustomDialog';

interface BFSection1CreateProps {}

const BFSection1Create: React.FC<BFSection1CreateProps> = () => {
	const classes = useStyles();
	const addPatientProvider = AddPatientProvider();
	const bfSection1FormProvider = AddBFSection1FormProvider();

	const [openDialog, setOpenDialog] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const snackBar = snackBarStore((state) => state);

	return (
		<Formik
			initialValues={section1FormInitialValues}
			onSubmit={async (values) => {
				try {
					setLoading(true);
					const data = BFSection1BeforeFormSubmit({ ...values });
					const response = await addPatientProvider.mutateAsync({
						name: values.name,
						dpid: values.dpid,
					});
					const mongoId: string = response.data._id;
					console.log(mongoId);
					const response1 = await bfSection1FormProvider.mutateAsync({
						mongoId,
						data,
					});
					setLoading(false);
					setOpenDialog(!openDialog);

					console.log(response1.data);
				} catch (error) {
					setLoading(false);

					console.log(error.response.data.message);
					snackBar.setOpen(true);
					snackBar.setmessage(error.response.data.message);
				}
			}}
		>
			{({ values, isSubmitting, resetForm }) => (
				<>
					<Form className={classes.content}>
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
								{loading ? <CircularProgress /> : 'submit'}
							</CustomButton>
						</CustomCard>
					</Form>
					<CustomDialog
						open={openDialog}
						notOkButtonText={undefined}
						okButtonText='Okay'
						onOkHandled={() => {
							setOpenDialog(false);
							resetForm();
						}}
						title='Success'
						content='Patient Added Successfully.'
						onClose={() => {}}
					/>
					<CustomSnackBar
						open={snackBar.open}
						handleClose={() => snackBar.setOpen(false)}
						message={snackBar.message}
						severity='error'
					/>
				</>
			)}
		</Formik>
	);
};

const useStyles = makeStyles((theme) => ({
	layout: {
		width: '100%',
	},
	content: {
		marginTop: theme.spacing(3),
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
