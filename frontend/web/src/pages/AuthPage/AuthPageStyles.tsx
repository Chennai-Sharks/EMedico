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
		boxSizing: 'border-box',
		padding: '80px 16px',
	},
	authBox: {
		borderRadius: '16px',
		display: 'flex',
		padding: '32px',
	},
}));

export default AuthStyles;
