import React from 'react'
import {Radio} from "@material-ui/core"
import CustomDropdownSelect from 'widgets/CustomDropdownSelect/CustomDropdownSelect';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomRadioButton from 'widgets/CustomRadioButton/CustomRadioButton';
import CustomButton from 'widgets/CustomButton/CustomButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
    name: yup.string().required().max(10),
    gender: yup.string().required(),
    personalHistory: yup.string().required()
});

const Form1 = () => {    

    const customStyles = {
        item: {
            display: 'flex', 
            margin: 30
        }
    }    

    return (    
        <div >     
            <Formik initialValues = {{
                name: "",  
                dpid: "",
                age: "",
                covid: "",
                gender: "",
                personalHistory: ""

            }} 
            validationSchema = {validationSchema}
            onSubmit = {async (data, {setSubmitting, resetForm})  => {
                setSubmitting(true);                
                console.log(data);
                setSubmitting(false);
                resetForm();
            }} >   
            {({values, errors, isSubmitting}) => (
                <Form>
                    
                    <CustomTextField name = "name" label = "Name" type = "input" placeholder = "eg: John Doe" style = {customStyles.item} />
                    <CustomTextField name = "dpid" label = "Patient ID" type = "input" placeholder = "eg: 123xyz" style = {customStyles.item} />                    
                    <CustomTextField name = "age" label = "Age" type = "number" placeholder = "eg: 20" style = {customStyles.item} />                    
                                                                                                   
                    <CustomDropdownSelect name = "gender" label = "Gender" type = "select" array = {["male", "female", "other"]} />
                    <CustomDropdownSelect name = "personalHistory" label = "Personal History" type = "select" array = {["single", "married", "divorce", "separated", "widowed", "children"]} />
                    
                    <CustomRadioButton head = {"Gender"} name = "covid" type = "radio" value = "Yes" label = "Yes?" />
                    <CustomRadioButton name = "covid" type = "radio" value = "No" label = "No?" />                                                                                
                                                            
                    <CustomButton style = {customStyles.item} disabled = {isSubmitting} children = "Submit" type ="submit" /> 

                    <pre style = {customStyles.item}>{JSON.stringify(values, null, 2)}</pre>
                    <pre style = {customStyles.item}>{JSON.stringify(errors, null, 2)}</pre>
                </Form>
            )}                
            </Formik>
            
            {/*                         

            <CustomTextField style = {customStyles.item} label = "Occupation" placeholder = "eg. Engineer"/>
            <CustomTextField style = {customStyles.item} label = "Allergies to Medication" placeholder = "eg. Headache, Nausea"/>

            <CustomRadioButton  label = "Tested Positive for Covid in the past?" array = {["yes", "no"]} />
            <CustomRadioButton  label = "Home Care or Hospitalized" array = {["Home Care", "Hospitalized"]} />
            <CustomRadioButton  label = "Ventilator/Prolonged Life Support" array = {["yes", "no"]} />

            <CustomTextField style = {customStyles.item} label = "Diabetic Status" placeholder = "eg. Headache, Nausea"/>
            <CustomTextField style = {customStyles.item} label = "Immuno Compromised" placeholder = "eg. Headache, Nausea"/>
            <CustomTextField style = {customStyles.item} label = "Steroid History" placeholder = "eg. Headache, Nausea"/>
            
            <CustomTextField style = {customStyles.item} label = "Post Covid Symptoms" multiline placeholder = "eg. Headache, Nausea"/>

            <CustomRadioButton  label = "sinusitis" array = {["yes", "no"]} />
            <CustomRadioButton  label = "nasalBlockage" array = {["yes", "no"]} />
            <CustomRadioButton  label = "blackishDiscoloration" array = {["yes", "no"]} />
            <CustomRadioButton  label = "facialErythema" array = {["yes", "no"]} />
            <CustomRadioButton  label = "eyeSymptoms" array = {["yes", "no"]} />
            <CustomRadioButton  label = "facialPain/numbness" array = {["yes", "no"]} />
            <CustomRadioButton  label = "toothache/mobileTooth" array = {["yes", "no"]} />
            <CustomRadioButton  label = "palatalUlceration" array = {["yes", "no"]} />
            <CustomRadioButton  label = "halitosis" array = {["yes", "no"]} />
            <CustomRadioButton  label = "skinLesions" array = {["yes", "no"]} />
            <CustomRadioButton  label = "fever" array = {["yes", "no"]} />
            <CustomRadioButton  label = "headache" array = {["yes", "no"]} />
            <CustomRadioButton  label = "alteredSensorium" array = {["yes", "no"]} />
             */}
            
            
        </div>
    )
}

export default Form1