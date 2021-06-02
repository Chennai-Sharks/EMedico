import React from 'react'
import CustomDropdownSelect from 'widgets/CustomDropdownSelect/CustomDropdownSelect';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomRadioButton from 'widgets/CustomRadioButton/CustomRadioButton';
import CustomButton from 'widgets/CustomButton/CustomButton';
import { Formik, Form } from 'formik';
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
            margin: 30,            
        }
    }    

    return (    
        <div >     
            <Formik initialValues = {{
                name: "",  
                dpid: "",
                age: "",                
                gender: "",
                personalHistory: "",
                occupation: "",
                allergiesToMedication: "",
                covid: "",
                homecareHospitalized: "",
                VentilatorProlongedLifeSupport: "",
                diabeticStatus: "",
                immunoCompromised: "",
                steroidHistory: "",
                postCovidSymptoms: ""

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
                    
                    <CustomTextField name = "name" label = "Name" type = "input" placeholder = "eg: John Doe"  />
                    <CustomTextField name = "dpid" label = "Patient ID" type = "input" placeholder = "eg: 123xyz"  />                    
                    <CustomTextField name = "age" label = "Age" type = "number" placeholder = "eg: 20"  />                    
                                                                                                   
                    <CustomDropdownSelect name = "gender" label = "Gender" type = "select" array = {["male", "female", "other"]} />
                    <CustomDropdownSelect name = "personalHistory" label = "Personal History" type = "select" array = {["single", "married", "divorce", "separated", "widowed", "children"]} />
                    
                    <CustomTextField name = "occupation" label = "Occupation" placeholder = "eg: Engineer"  />
                    <CustomTextField name = "allergiesToMedication" label = "Allergies to Medication" type = "number" placeholder = "eg: Headache, Nausea" />


                    <CustomRadioButton head = {"Tested Positive for Covid in the past?"} name = "covid" type = "radio" value = "Yes" label = "Yes" />
                    <CustomRadioButton name = "covid" type = "radio" value = "No" label = "No" />                    


                    <CustomRadioButton head = {"Home Care or Hospitalized?"} name = "homecareHospitalized" type = "radio" value = "Home Care" label = "Home Care" />
                    <CustomRadioButton name = "homecareHospitalized" type = "radio" value = "Hospitalized" label = "Hospitalized" />                    


                    <CustomRadioButton head = {"Ventilator/Prolonged Life Support"} name = "VentilatorProlongedLifeSupport" type = "radio" value = "Yes" label = "Yes" />
                    <CustomRadioButton name = "VentilatorProlongedLifeSupport" type = "radio" value = "No" label = "No" />                


                    <CustomTextField name = "diabeticStatus" label = "Diabetic Status" placeholder = "eg: IDK LOL" />
                    <CustomTextField name = "immunoCompromised" label = "Immuno Compromised" placeholder = "eg: IDK LOL" />
                    <CustomTextField name = "steroidHistory" label = "Steroid History" placeholder = "eg: IDK LOL" />                    

                    <CustomTextField name = "postCovidSymptoms" label = "Post Covid Symptoms" multiline placeholder = "eg: IDK LOL" />                    
                
                    
                                                            
                    <CustomButton style = {customStyles.item} disabled = {isSubmitting} children = "Submit" type ="submit" /> 

                    <pre style = {customStyles.item}>{JSON.stringify(values, null, 2)}</pre>
                    <pre style = {customStyles.item}>{JSON.stringify(errors, null, 2)}</pre>
                </Form>
            )}                
            </Formik>
            
            {/*                         

        

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