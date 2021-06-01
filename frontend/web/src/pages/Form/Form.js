import React from 'react'
import CustomDropdownSelect from 'widgets/CustomDropdownSelect/CustomDropdownSelect';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomRadioButton from 'widgets/CustomRadioButton/CustomRadioButton';
import CustomButton from 'widgets/CustomButton/CustomButton';
import { Formik, Field, Form } from 'formik';


const Form1 = () => {    

    const customStyles = {
        item: {
            display: 'flex', 
            margin: 30
        }
    }

    // const formik = useFormik({
    //     initialValues: {
    //       Name: '',
    //       PatientId: '',
    //       Age: ''
    //     },
    //     onSubmit: values => {
    //       alert(JSON.stringify(values, null, 2));
    //     },
    //   });

    return (    
        <div >     
            <Formik initialValues = {{
                name: "",                
                sinus: "no"
            }} 
            onSubmit = {async (data, {setSubmitting, resetForm})  => {
                setSubmitting(true);                
                console.log(data);
                setSubmitting(false);
                resetForm();
            }} >   
            {({values, isSubmitting}) => (
                <Form>
                    <Field name = "name" label = "Name" type = "input" as = {CustomTextField} style = {customStyles.item} placeholder = "eg. John Doe" />
                    

                    <Field name = "sinus" label = "sinusitis" type = "radio" as = {CustomRadioButton} array = {["yes", "no"]} />
                                        
                    <CustomButton style = {customStyles.item} disabled = {isSubmitting} children = "Submit" type ="submit" /> 
                    <pre style = {customStyles.item}>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}                
            </Formik>
            
            {/* 
            <Field name = "dpid" label = "Patient ID" type = "input" as = {CustomTextField} style = {customStyles.item} placeholder = "eg. 123xyz" />
                    <Field name = "age" label="Age" type="number" as = {CustomTextField} style = {customStyles.item} placeholder = "eg. 20" />

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