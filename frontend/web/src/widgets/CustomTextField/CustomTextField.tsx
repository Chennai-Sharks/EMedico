import { TextField } from '@material-ui/core';
import React from 'react';
import { useField } from 'formik';

type CustomTextFieldProps = any;

const CustomTextField: React.FC<CustomTextFieldProps> = ({placeholder, ...props}) => {
	const [field, meta]  = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : ''; 
    return(
        <TextField variant='outlined'
		InputProps={{
			style: {
				borderRadius: '16px',
			},
		}}
		style={{
			paddingBottom: '20px',
		}} placeholder = {placeholder} label = {props.label} {...field} helperText = {errorText} error = {!!errorText} />
    )
};
export default CustomTextField;