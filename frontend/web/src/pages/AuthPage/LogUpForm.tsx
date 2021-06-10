export {};

// import React from 'react';

// import { AuthSignUpModel, LogUpProvider, snackBarStore } from '@emedico/shared';

// import CustomTextField from 'widgets/CustomTextField/CustomTextField';
// import CustomButton from 'widgets/CustomButton/CustomButton';

// import useStyles from './AuthPageStyles';
// import { CircularProgress } from '@material-ui/core';
// import { Field, Form, Formik } from 'formik';
// import CustomDialog from 'widgets/CustomDialog/CustomDialog';
// import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';

// interface LogUpFormProps {
// 	setLoginState: () => void;
// }

// const LogUpForm: React.FC<LogUpFormProps> = (props) => {
// 	const classes = useStyles();
// 	const LogUpMutation = LogUpProvider();

// 	const snackBar = snackBarStore((state) => state);
// 	const [openDialog, setOpenDialog] = React.useState(false);

// 	const initialSignUpValue: AuthSignUpModel = {
// 		email: '',
// 		password: '',
// 		name: '',
// 	};

// 	return (
// 		<>
// 			<Formik
// 				validateOnChange={false}
// 				validateOnBlur={false}
// 				validateOnMount={false}
// 				initialValues={initialSignUpValue}
// 				validate={(values) => {
// 					const errors: Record<string, string> = {};
// 					const regexp = new RegExp(
// 						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// 					);

// 					if (!regexp.test(values.email)) errors.email = 'Email Invalid';
// 					if (values.name.length <= 3) errors.name = 'Name is Invalid';
// 					if (values.password.length <= 6)
// 						errors.password = 'Password length should be greater than 6.';

// 					return errors;
// 				}}
// 				onSubmit={async (values, actions) => {
// 					actions.setSubmitting(true);
// 					console.log(values);

// 					try {
// 						const response = await LogUpMutation.mutateAsync(values);

// 						console.log(response.data);
// 						setOpenDialog(true);
// 					} catch (error) {
// 						console.log(error.response.data);
// 						snackBar.setOpen(true);
// 						snackBar.setmessage(error.response.data);
// 					}

// 					actions.setSubmitting(false);
// 				}}
// 			>
// 				{({ isSubmitting, errors }) => (
// 					<Form className={classes.form}>
// 						<Field
// 							name='email'
// 							label='Email Address'
// 							error={!!errors.email}
// 							helperText={errors.email}
// 							as={CustomTextField}
// 						/>
// 						<Field
// 							name='name'
// 							label='Name'
// 							helperText={errors.name}
// 							error={!!(errors as AuthSignUpModel).name}
// 							as={CustomTextField}
// 						/>
// 						<Field
// 							name='password'
// 							label='Password'
// 							helperText={errors.password}
// 							error={!!errors.password}
// 							type='password'
// 							as={CustomTextField}
// 						/>
// 						<CustomButton disabled={isSubmitting} type='submit'>
// 							{LogUpMutation.isLoading ? <CircularProgress /> : 'Register'}
// 						</CustomButton>
// 					</Form>
// 				)}
// 			</Formik>
// 			<CustomDialog
// 				open={openDialog}
// 				notOkButtonText={undefined}
// 				okButtonText='Okay'
// 				onOkHandled={() => {
// 					setOpenDialog(false);
// 					props.setLoginState();
// 				}}
// 				title='Success'
// 				content='Registration done successfully. Click on Okay to Sign In.'
// 				onClose={() => {}}
// 			/>
// 			<CustomSnackBar
// 				open={snackBar.open}
// 				handleClose={() => snackBar.setOpen(false)}
// 				message={snackBar.message}
// 				severity='error'
// 			/>
// 		</>
// 	);
// };
// export default LogUpForm;
