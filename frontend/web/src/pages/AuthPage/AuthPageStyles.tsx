import { makeStyles } from '@material-ui/core';

const AuthStyles = makeStyles((theme) => ({
	background: {
		display: 'flex',
		minHeight: '100vh',
		minWidth: '100vw',
		flexDirection: 'column-reverse',
		backgroundColor: '#ECF0FD',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},
	titlePadding: {
		[theme.breakpoints.up('md')]: {
			paddingTop: '30px',
		},
	},
	loginBox: {
		height: '40vh',

		width: '100%',
		// order: 2,
		[theme.breakpoints.up('md')]: {
			width: '385px',
			height: 'auto',
		},
	},
	imageBox: {
		width: '100%',
		height: '60vh',
		// order: 1,
		backgroundColor: 'white',

		[theme.breakpoints.up('md')]: {
			height: '100vh',
			display: 'block',
			width: 'calc(100% - 385px)',
		},
	},

	loginTitleLayout: {
		paddingTop: '20px',
		display: 'flex',
		paddingLeft: '32px',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},

	imgLogo: {
		maxHeight: '35px',
		width: 'auto',
	},
	loginButtonLayout: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
}));

export default AuthStyles;
