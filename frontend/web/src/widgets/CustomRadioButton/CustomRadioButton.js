import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from '@material-ui/core/Radio';
import { useField } from 'formik';

const CustomRadioButton = ({label, ...props}) => {
    const [field] = useField(props);
    
    return (
        <> 
            <FormLabel component="legend">{props.head}</FormLabel>
            <FormControlLabel {...field} control={<Radio />} label = {label} />
        </>
    )
}

export default CustomRadioButton