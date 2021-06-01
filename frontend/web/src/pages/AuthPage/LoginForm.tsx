import React from 'react';
import { AuthSignInModel, LoginProvider, doctorIdStore } from '@emedico/shared';
import { Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomButton from 'widgets/CustomButton/CustomButton';

import useStyles from './AuthPageStyles';
import { CircularProgress } from '@material-ui/core';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
	const classes = useStyles();
	const router = useHistory();
	const LoginInMutation = LoginProvider();
	const docStore = doctorIdStore((state) => state);

	const initialSignInValue: AuthSignInModel = {
		email: '',
		password: '',
	};
	return (
		<Formik
			validateOnChange={false}
			validateOnBlur={false}
			validateOnMount={false}
			initialValues={initialSignInValue}
			validate={(values) => {
				const errors: Record<string, string> = {};
				const regexp = new RegExp(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				);

				if (!regexp.test(values.email)) errors.email = 'Email Invalid';

				if (values.password.length <= 6)
					errors.password = 'Password length should be greater than 6.';

				return errors;
			}}
			onSubmit={async (values, actions) => {
				actions.setSubmitting(true);
				console.log(values);
				try {
					const response = await LoginInMutation.mutateAsync(values);
					console.log(response.data._id);
					docStore.setDocId(response.data._id);
					router.replace('/home');
				} catch (error) {
					console.log(error.response.data);
				}

				actions.setSubmitting(false);
			}}
		>
			{({ isSubmitting, errors }) => (
				<Form className={classes.form}>
					<Field
						name='email'
						label='Email Address'
						error={!!errors.email}
						helperText={errors.email}
						as={CustomTextField}
					/>

					<Field
						name='password'
						label='Password'
						helperText={errors.password}
						error={!!errors.password}
						type='password'
						as={CustomTextField}
					/>
					<CustomButton disabled={isSubmitting} type='submit'>
						{LoginInMutation.isLoading ? <CircularProgress /> : 'Log in'}
					</CustomButton>
				</Form>
			)}
		</Formik>
	);
};
export default LoginForm;
