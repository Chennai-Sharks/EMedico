import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const CustomRadioButton = ({array, label}) => {
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup aria-label="gender" name="gender1"  >
                    {array.map((item) => (
                        <FormControlLabel value={item} control={<Radio />} label={item} />
                    ))}                    
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default CustomRadioButton
