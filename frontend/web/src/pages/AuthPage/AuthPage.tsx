import { CircularProgress, Divider, Link, Typography } from '@material-ui/core';
import React from 'react';
import CustomCard from 'widgets/CustomCard/CustomCard';

import {
	AuthSignInModel,
	AuthSignUpModel,
	LoginProvider,
	LogUpProvider,
} from '@emedico/shared';

import useStyles from './AuthPageStyles';

import LogoImg from '../../assets/logo.svg';
import { Field, Formik } from 'formik';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomButton from 'widgets/CustomButton/CustomButton';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
	const classes = useStyles();
	const [isLogin, setIslogin] = React.useState(true);

	const initialSignInValue: AuthSignInModel = {
		email: '',
		password: '',
	};

	const initialSignUpValue: AuthSignUpModel = {
		email: '',
		password: '',
		name: '',
	};

	return (
		<div className={classes.background}>
			<div className={classes.authBoxBg}>
				<CustomCard>
					<div className={classes.loginTitleLayout}>
						<div>
							<Typography className={classes.loginTitle}>
								{isLogin ? 'Login' : 'Register'}
							</Typography>
							<Typography variant='subtitle2' color='textSecondary'>
								{isLogin ? 'Log in' : 'Register'} on the platform
							</Typography>
						</div>
						<img src={LogoImg} alt='Logo' className={classes.imgLogo} />
					</div>
					<div className={classes.form}>
						<Formik
							initialValues={isLogin ? initialSignInValue : initialSignUpValue}
							validate={(values) => {
								const error: Record<string, string> = {};

								return error;
							}}
							onSubmit={async (values, actions) => {
								actions.setSubmitting(true);
								console.log(values);

								if (isLogin) {
									const response = await LoginProvider.mutateAsync(
										values as AuthSignInModel
									);
									console.log(response.data);
								} else {
									const response = await LogUpProvider.mutateAsync(
										values as AuthSignUpModel
									);

									console.log(response.data);
								}
								actions.setSubmitting(false);
							}}
						>
							{({ isSubmitting, errors }) => (
								<>
									<Field
										name='email'
										label='Email Address'
										error={!!errors.email}
										as={CustomTextField}
									/>
									{!isLogin && (
										<Field
											name='name'
											label='Name'
											error={!!(errors as AuthSignUpModel).name}
											as={CustomTextField}
										/>
									)}
									<Field
										name='password'
										label='Password'
										error={!!errors.password}
										as={CustomTextField}
									/>
									<CustomButton disabled={isSubmitting}>
										{isLogin ? (
											LoginProvider.isLoading ? (
												<CircularProgress />
											) : (
												'Log in'
											)
										) : LogUpProvider.isLoading ? (
											<CircularProgress />
										) : (
											'Register'
										)}
									</CustomButton>
								</>
							)}
						</Formik>
					</div>
					<div
						style={{
							padding: '20px',
						}}
					>
						<Divider variant='middle' />
						<Typography
							variant='subtitle2'
							color='textSecondary'
							className={classes.createAccountbutton}
							onClick={() => {
								setIslogin(!isLogin);
							}}
						>
							{isLogin
								? 'Create account on the platform'
								: 'Already have an account'}
						</Typography>
						<Link
							href='/'
							variant='subtitle2'
							color='textSecondary'
							style={{
								paddingLeft: '20px',
								paddingTop: '10px',
							}}
						>
							Forgot Password
						</Link>
					</div>
				</CustomCard>
			</div>
		</div>
	);
};

export default AuthPage;
