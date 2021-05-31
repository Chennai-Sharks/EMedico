import React from 'react'
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import './Form.css';

const Form = () => {
    const myStyle = {
        container: {
            margin: 30,            
            display: 'flex',
            flexDirection: 'column'
        },
        field: {
            margin: 30,            
        }
    }

    return (
        <div>                    
            <div style = {myStyle.container}>
                <CustomTextField style = {myStyle.field} label = "First Name" />
                <CustomTextField style = {myStyle.field} label = "First Name" />
                <CustomTextField style = {myStyle.field} label = "First Name" />
            </div>            
        </div>
    )
}

export default Form