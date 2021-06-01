import React from 'react'
import CustomDropdownSelect from 'widgets/CustomDropdownSelect/CustomDropdownSelect';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomRadioButton from 'widgets/CustomRadioButton/CustomRadioButton';
import CustomButton from 'widgets/CustomButton/CustomButton';
import { Formik } from 'formik';


const Form = () => {    

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
                dpid: "",
                age: ""
            }} 
            onSubmit = {async (data, {setSubmitting, resetForm})  => {
                setSubmitting(true);
                
                await console.log(data);
                setSubmitting(false);
                resetForm();
            }} >   
            {({values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                <form onSubmit={handleSubmit} >
                    <CustomTextField name = "name" value = {values.name} onChange = {handleChange} onBlur = {handleBlur} style = {customStyles.item} label = "Name" placeholder = "eg. John Doe" />
                    <CustomTextField name = "dpid" value = {values.dpid} onChange = {handleChange} onBlur = {handleBlur} style = {customStyles.item} label = "Patient Id" placeholder = "eg. 123xyz"/>
                    <CustomTextField name = "age" value = {values.age} onChange = {handleChange} onBlur = {handleBlur} style = {customStyles.item} label="Age" type="number" placeholder = "eg. 20"/> 
                    <CustomButton disabled = {isSubmitting} children = "Submit" type ="submit" /> 
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </form>
            )}                
            </Formik>
            
            {/* <CustomDropdownSelect array = {["male", "female", "other"]}  label = {'Gender'}/>
            <CustomDropdownSelect array = {["single", "married", "divorce", "separated", "widowed", "children"]}  label = {'Personal History'}/>

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

export default Form