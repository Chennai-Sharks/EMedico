import React from 'react'
import CustomAppBar from '../../widgets/CustomAppBar/CustomAppBar';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import TextField from '@material-ui/core/TextField';



const Form = () => {


    return (
        <div>        
            <CustomAppBar />
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "First Name" placeholder = "eg. John Doe" />
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "Patient Id" placeholder = "eg. 123xyz"/>
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "First Name" />            
            <TextField style = {{display: 'flex', margin: 30}} id="outlined-number" label="Number" type="number" variant="outlined" />
        </div>
    )
}

export default Form