import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

interface CustomButtonProps {
	onClick?: () => void;
	disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
	const useStyles = makeStyles(() => ({
		button: {
			backgroundColor: 'rgb(86, 100, 210)',
			color: 'white',
			borderRadius: '16px',
			lineHeight: 1.75,
			fontSize: '1rem',
			minWidth: '64px',
			padding: '8px 22px',
			marginTop: '20px',
			textDecoration: '',
			'&:hover': {
				backgroundColor: '#3C4693',
			},
		},
	}));

	const classes = useStyles();
	return (
		<Button
			variant='contained'
			className={classes.button}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</Button>
	);
};
export default CustomButton;
