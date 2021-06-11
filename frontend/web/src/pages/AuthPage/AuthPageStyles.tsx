import { makeStyles } from '@material-ui/core';

const AuthStyles = makeStyles((theme) => ({
	background: {
		display: 'flex',
		minHeight: '100vh',
		minWidht: '100vw',
		overflow: 'none',
		flexDirection: 'column-reverse',
		backgroundColor: '#ECF0FD',
	},
	loginBox: {
		width: '100%',
		paddingLeft: '32px',
		height: '40vh',
		// [theme.breakpoints.up('sm')]: {
		// 	maxWidth: '600px',
		// },
	},
	imageBox: {
		width: '100%',
		height: '60vh',
		backgroundColor: 'white',

		// [theme.breakpoints.up('sm')]: {
		// 	maxWidth: '600px',
		// },
	},

	loginTitleLayout: {
		paddingTop: '20px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},

	imgLogo: {
		maxHeight: '35px',
		width: 'auto',
	},

	createAccountbutton: {
		paddingLeft: '20px',
		paddingTop: '10px',
		'&:hover': {
			cursor: 'pointer',
			textDecoration: 'underline',
		},
	},
}));

export default AuthStyles;
