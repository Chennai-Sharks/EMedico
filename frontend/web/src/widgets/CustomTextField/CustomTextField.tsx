import { TextField } from '@material-ui/core';
import React from 'react';

type CustomTextFieldProps = any;

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
	return (
		<TextField
			variant='outlined'
			InputProps={{
				style: {
					borderRadius: '16px',
				},
			}}
			style={{
				paddingBottom: '20px',
				width: '100%',
			}}
			{...props}
			className={props.padding}
		/>
	);
};
export default CustomTextField;
