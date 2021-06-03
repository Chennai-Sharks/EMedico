import { makeStyles, MenuItem, TextField } from '@material-ui/core';
import React from 'react';

type CustomDropDownProps = any;

const useStyles = makeStyles(() => ({
	selectStyle: {
		borderRadius: '16px',
		marginTop: '20px',
		marginBottom: '20px',
		marginLeft: '20px',
		width: '97%',
	},
}));

const CustomDropDown: React.FC<CustomDropDownProps> = (props) => {
	const classes = useStyles();
	return (
		<>
			<TextField
				select
				{...props}
				variant='outlined'
				InputProps={{
					style: {
						borderRadius: '16px',
					},
				}}
				className={classes.selectStyle}
			>
				{props.items.map((item: string, index: number) => (
					<MenuItem value={item} key={index}>
						{item}
					</MenuItem>
				))}
			</TextField>
		</>
	);
};

export default CustomDropDown;
