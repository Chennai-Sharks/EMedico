import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const CustomDropdownSelect = ({array, label}) => {    

    return (
        <div>
            <FormControl variant="outlined" style = {{display: 'flex', margin: 30}}>                    
                <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"          
                    label="Tested positive for covid in the past?"                    
                    >                    
                    {
                        array.map((item) => (
                            <MenuItem key = {item} value={item}>{item}</MenuItem>
                        ))
                    }                                                                           
                    </Select>
            </FormControl>
        </div>
    ) 
}

export default CustomDropdownSelect
