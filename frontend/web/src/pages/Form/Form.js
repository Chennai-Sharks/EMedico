import React from 'react'
import CustomDropdownSelect from 'widgets/CustomDropdownSelect/CustomDropdownSelect';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';


const Form = () => {
    const gender = ["male", "female", "other"];
    const personalHistory = ["single", "married", "divorce", "separated", "widowed", "children"];

    return (
        

        <div>        
            
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "First Name" placeholder = "eg. John Doe" />
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "Patient Id" placeholder = "eg. 123xyz"/>
            <CustomTextField style = {{display: 'flex', margin: 30}} label="Age" type="number" placeholder = "eg. 20"/>
            
            <CustomDropdownSelect array = {gender}  label = {'Gender'}/>
            <CustomDropdownSelect array = {personalHistory}  label = {'Personal History'}/>

            <CustomTextField style = {{display: 'flex', margin: 30}} label = "Occupation" placeholder = "eg. Engineer"/>
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "Allergies to Medication" placeholder = "eg. Headache, Nausea"/>            

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