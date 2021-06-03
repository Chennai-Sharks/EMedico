import React from 'react';
import { Field } from 'formik';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { ToggleButtonGroup } from 'formik-material-ui-lab';
import { makeStyles, Typography } from '@material-ui/core';

type CustomRadioProps = any;

const CustomRadio: React.FC<CustomRadioProps> = (props) => {
	const classes = useStyles();
	return (
		<div
			className={classes.layout}
			style={{
				marginBottom: props.topMargin ? '5px' : '15px',
			}}
		>
			<Typography variant='h6' className={classes.labelStyle}>
				{props.label}
			</Typography>
			<Field
				type='checkbox'
				exclusive
				name={props.name}
				component={ToggleButtonGroup}
			>
				{(props.items as string[]).map((item, index) => (
					<ToggleButton
						classes={{
							selected: classes.selected,
						}}
						color='primary'
						className={classes.btWidth}
						key={index}
						value={item}
						size='medium'
					>
						{item}
					</ToggleButton>
				))}
			</Field>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	layout: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		// margin: '30px',
		marginBottom: '20px',
		marginTop: '30px',
	},

	labelStyle: {
		fontSize: '1rem',
		[theme.breakpoints.up('md')]: {
			fontSize: '1.1rem',
		},
		fontWeight: 'bold',
		margin: '20px',

		marginRight: '0px',
		textAlign: 'center',
	},
	btWidth: {
		width: '90px',
		height: '50px',
		// fontSize: '1rem',
		textAlign: 'center',
		borderRadius: '16px',
	},
	selected: {
		backgroundColor: '#5664D2 !important',
		color: 'white !important',
	},
}));

export default CustomRadio;
