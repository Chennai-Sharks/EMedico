import { Card } from '@material-ui/core';
import React from 'react';

import useStyles from './AuthPageStyles';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.background}>
			<div className={classes.authBoxBg}>
				<Card elevation={1} className={classes.authBox}>
					Login
				</Card>
			</div>
		</div>
	);
};

export default AuthPage;
