import { Card, makeStyles } from '@material-ui/core';
import React from 'react';

interface CustomCardProps {}

const CustomCard: React.FC<CustomCardProps> = (props) => {
	const useStyles = makeStyles(() => ({
		cardStyle: {
			borderRadius: '16px',
			backgroundColor: 'white',
			overflow: 'hidden',
		},
	}));

	const classes = useStyles();

	return (
		<Card className={classes.cardStyle} elevation={1}>
			{props.children}
		</Card>
	);
};
export default CustomCard;
