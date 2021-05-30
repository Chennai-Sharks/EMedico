import { makeStyles } from '@material-ui/core';

const AuthStyles = makeStyles(() => ({
	background: {
		display: 'flex',
		minHeight: '100vh',
		flexDirection: 'column',
		backgroundColor: '#F4F5F7',
	},
	authBoxBg: {
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: '70px 16px',
	},

	loginTitleLayout: {
		padding: '32px',
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	loginTitle: {
		margin: '0px 0px 0.35em',
		fontWeight: 600,
		fontSize: '1.5rem',
	},
	imgLogo: {
		maxHeight: '40px',
		width: 'auto',
	},
	form: {
		marginTop: '20px',
		display: 'flex',
		flexDirection: 'column',
		padding: '16px 32px',
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
