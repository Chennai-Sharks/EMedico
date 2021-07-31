import React from 'react';

import useStyles from './AuthPageStyles';
import LoginPhoto from '../../assets/login.svg';

import LogoImg from '../../assets/logo.svg';
import { Box, Typography, LinearProgress } from '@material-ui/core';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';
import {
  snackBarStore,
  docDetailsStore,
  credentialStore,
  AuthProvider,
} from '@emedico/shared';

import { useHistory } from 'react-router-dom';
import { CheckAuthState } from '../../utils/CheckAuthState';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = (props: any) => {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);
  const isAuth = CheckAuthState();

  const snackBar = snackBarStore((state) => state);
  const cred = credentialStore((state) => state);
  const docDetails = docDetailsStore((state) => state);

  const authMutation = AuthProvider();

  const router = useHistory();

  React.useEffect(() => {
    if (isAuth) {
      router.replace(
        props.location.state ? props.location.state.goTo : '/home'
      );
    }
  }, [isAuth, props.location.state, router]);

  return (
    <Box className={classes.background} overflow='hidden'>
      <div className={classes.loginBox}>
        {loading && <LinearProgress />}
        <div className={classes.titlePadding} />

        <div className={classes.loginTitleLayout}>
          <img src={LogoImg} className={classes.imgLogo} alt='logo' />
          <Typography
            variant='h4'
            style={{ paddingLeft: '10px', fontWeight: 'bold' }}
          >
            Maxillo
          </Typography>
        </div>
        <Box m={3.5} />

        <div className={classes.loginButtonLayout}>
          <Typography variant='h5' style={{ fontWeight: 'bold' }}>
            Login in to your account
          </Typography>
          <Box m={2} />
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_KEY as string}
            cookiePolicy={'single_host_origin'}
            onRequest={() => {
              setLoading(true);
            }}
            onSuccess={async (response) => {
              const finalResponse = response as GoogleLoginResponse;
              try {
                const serverResponse = await authMutation.mutateAsync({
                  email: finalResponse.profileObj.email,
                  name: finalResponse.profileObj.name,
                  userId: finalResponse.profileObj.googleId,
                });
                cred.setDocId(serverResponse.data.did);
                cred.setToken(serverResponse.data.jwt);
                cred.setExpiredIn(serverResponse.data.exp);

                docDetails.setEmail(finalResponse.profileObj.email);
                docDetails.setProfileUrl(finalResponse.profileObj.imageUrl);
                docDetails.setName(finalResponse.profileObj.name);

                setLoading(false);
              } catch (error: any) {
                console.log(error);
                snackBar.setOpen(true);
                snackBar.setmessage(
                  error.response
                    ? error.response.data.message
                    : 'Something went wrong. Try again or contact us.'
                );
                setLoading(false);
              }
            }}
            onFailure={(response) => {
              setLoading(false);
              snackBar.setOpen(true);
              snackBar.setmessage(response.error);
            }}
          />
          <Box m={2} />

          <Typography variant='subtitle2'>
            By signing in, you agree to our{' '}
            <a
              href={`${process.env.REACT_APP_WEBSITE_URL as string}/privacy`}
              target='_blank'
              style={{ textDecoration: 'none' }}
              rel='noreferrer'
            >
              Privacy Policy
            </a>
          </Typography>
          <Box m={0.5} />

          <Typography variant='subtitle2'>
            Copyright 2021, Team Maxillo
          </Typography>
        </div>
      </div>
      <img src={LoginPhoto} className={classes.imageBox} alt='main cover' />
      <CustomSnackBar
        open={snackBar.open}
        handleClose={() => snackBar.setOpen(false)}
        message={snackBar.message}
        severity='error'
      />
    </Box>
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
