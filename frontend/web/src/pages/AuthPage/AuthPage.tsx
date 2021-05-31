import { Divider, Link, Typography } from '@material-ui/core';
import React from 'react';
import CustomCard from 'widgets/CustomCard/CustomCard';

import useStyles from './AuthPageStyles';

import LogoImg from '../../assets/logo.svg';
import LoginForm from './LoginForm';
import LogUpForm from './LogUpForm';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
	const classes = useStyles();
	const [isLogin, setIslogin] = React.useState(true);

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
			</div>
		</div>
	);
};

export default AuthPage;
