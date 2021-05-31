import React from 'react'
import CustomDropdownSelect from 'widgets/CustomDropdownSelect/CustomDropdownSelect';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import CustomRadioButton from 'widgets/CustomRadioButton/CustomRadioButton';

const Form = () => {    

    const customStyles = {
        item: {
            display: 'flex', 
            margin: 30
        }
    }

    return (    
        <div >        
            
            <CustomTextField style = {customStyles.item} label = "First Name" placeholder = "eg. John Doe" />
            <CustomTextField style = {customStyles.item} label = "Patient Id" placeholder = "eg. 123xyz"/>
            <CustomTextField style = {customStyles.item} label="Age" type="number" placeholder = "eg. 20"/>
            
            <CustomDropdownSelect array = {["male", "female", "other"]}  label = {'Gender'}/>
            <CustomDropdownSelect array = {["single", "married", "divorce", "separated", "widowed", "children"]}  label = {'Personal History'}/>

            <CustomTextField style = {customStyles.item} label = "Occupation" placeholder = "eg. Engineer"/>
            <CustomTextField style = {customStyles.item} label = "Allergies to Medication" placeholder = "eg. Headache, Nausea"/>

            <CustomRadioButton  label = "Tested Positive for Covid in the past?" array = {["yes", "no"]} />
            <CustomRadioButton  label = "Home Care or Hospitalized" array = {["Home Care", "Hospitalized"]} />
            <CustomRadioButton  label = "Ventilator/Prolonged Life Support" array = {["yes", "no"]} />

            <CustomTextField style = {customStyles.item} label = "Diabetic Status" placeholder = "eg. Headache, Nausea"/>
            <CustomTextField style = {customStyles.item} label = "Immuno Compromised" placeholder = "eg. Headache, Nausea"/>
            <CustomTextField style = {customStyles.item} label = "Steroid History" placeholder = "eg. Headache, Nausea"/>
            <CustomTextField style = {customStyles.item} label = "Allergies to Medication" placeholder = "eg. Headache, Nausea"/>

        </div>
    )
}

export default Form

// "covidScreeningTest":{
//     "testedPositiveForCovid": String,
//     "homeCare/hospitalized":{
//         type: String,
//         enum: ['Home care','Hospitalized']
//     },
//     "ventilator/prolongedLifeSupport":{
//     type: String,
//     enum: ['yes','no'] 
//     }
// },
// "diabeticStatus": String,
// "Immunocompromised state": String,
// "SteroidHistory": String,
// "postCovidSymptoms":[String],

// "mucormycosisSymptoms":{
//     "sinusitis": ['yes','no'],
//     "nasalBlockage": ['yes','no'],
//     "blackishDiscoloration":['yes','no'],
//     "facialErythema":['yes','no'],
//     "eyeSymptoms":['yes','no'],
//     "facialPain/numbness":['yes','no'],
//     "toothache/mobileTooth":['yes','no'],
//     "palatalUlceration":['yes','no'],
//     "halitosis":['yes','no'],
//     "skinLesions":['yes','no'],
//     "fever":['yes','no'],
//     "headache":['yes','no'],
//     "alteredSensorium":['yes','no'],
// }