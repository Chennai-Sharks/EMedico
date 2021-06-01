import React from 'react'
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useField } from 'formik';

const CustomDropdownSelect = ({array, ...props}) => {    
    const [field, meta]  = useField(props);
    const errorText = (meta.error && meta.touched) ? meta.error : ''; 
    return (
        <div>
            <TextField
          id="outlined-select-currency"
          select
                                           
          variant="outlined" 
          InputProps={{
			style: {
				borderRadius: '16px',
			},
		}}
		style={{
			paddingBottom: '20px',
		}} label={props.label} {...field} helperText = {errorText} error = {!!errorText}
        >
          {array.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        </div>
    ) 
}

export default CustomDropdownSelect
