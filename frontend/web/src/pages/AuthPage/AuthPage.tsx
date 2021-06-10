// import { Divider, Link, Typography } from '@material-ui/core';
import React from 'react';
// import CustomCard from 'widgets/CustomCard/CustomCard';

import useStyles from './AuthPageStyles';
import LoginPhoto from '../../assets/login.svg';

import LogoImg from '../../assets/logo.svg';
import { Typography } from '@material-ui/core';
import CustomButton from 'widgets/CustomButton/CustomButton';
import GoogleLogin from 'react-google-login';
// import LoginForm from './LoginForm';
// import LogUpForm from './LogUpForm';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
	const classes = useStyles();

	return (
		<div className={classes.background}>
			<div className={classes.loginBox}>
				<div className={classes.loginTitleLayout}>
					<img src={LogoImg} className={classes.imgLogo} alt='logo' />
					<Typography variant='h4' style={{ paddingLeft: '10px' }}>
						EMedico
					</Typography>
				</div>
				<Typography
					style={{
						marginTop: '15px',
						paddingLeft: '45px',
						fontWeight: 'bold',
					}}
					variant='h5'
				>
					Login in to you account
				</Typography>
				<div style={{ paddingTop: '50px', paddingLeft: '25%' }}>
					<GoogleLogin clientId='2' />
				</div>
			</div>
			<img src={LoginPhoto} className={classes.imageBox} alt='main cover' />
		</div>
	);
};

export default AuthPage;

/* 	<CustomCard>
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
					{isLogin ? (
						<LoginForm />
					) : (
						<LogUpForm setLoginState={() => setIslogin(!isLogin)} />
					)}

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
				*/
