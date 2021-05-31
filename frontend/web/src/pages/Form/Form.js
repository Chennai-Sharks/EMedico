import React from 'react'
import CustomAppBar from '../../widgets/CustomAppBar/CustomAppBar';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import './Form.css';

const Form = () => {
    return (
        <div>        
            <CustomAppBar />
            <CustomTextField className = "field" label = "First Name" />
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "First Name" />
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "First Name" />
            <h1>Hello</h1>
        </div>
    )
}

export default Form