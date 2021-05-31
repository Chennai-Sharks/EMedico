import React from 'react'
import CustomAppBar from '../../widgets/CustomAppBar/CustomAppBar';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const Form = () => {
    const gender = ["male", "female", "other"];
    const personalHistory = ["single", "married", "divorce", "separated", "widowed", "children"];

    return (
        

        <div>        
            <CustomAppBar />
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "First Name" placeholder = "eg. John Doe" />
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "Patient Id" placeholder = "eg. 123xyz"/>
            <CustomTextField style = {{display: 'flex', margin: 30}} label="Age" type="number" placeholder = "eg. 20"/>
            <FormControl variant="outlined" style = {{display: 'flex', margin: 30}}>
                <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"          
                    label="Gender"
                    >                    
                    {
                        gender.map((item) => (
                            <MenuItem key = {item} value={item}>{item}</MenuItem>
                        ))
                    }                                    
                    </Select>
            </FormControl>        
            <FormControl variant="outlined" style = {{display: 'flex', margin: 30}}>                    
                <InputLabel id="demo-simple-select-outlined-label">Personal History</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"          
                    label="Personal History"                    
                    >                    
                    {
                        personalHistory.map((item) => (
                            <MenuItem key = {item} value={item}>{item}</MenuItem>
                        ))
                    }                                    
                    </Select>
            </FormControl>
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "Occupation" placeholder = "eg. Engineer"/>
            <CustomTextField style = {{display: 'flex', margin: 30}} label = "Allergies to Medication" placeholder = "eg. Headache, Nausea"/>

            <FormControl variant="outlined" style = {{display: 'flex', margin: 30}}>                    
                <InputLabel id="demo-simple-select-outlined-label">Tested positive for covid in the past?</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"          
                    label="Tested positive for covid in the past?"                    
                    >                    
                    {
                        personalHistory.map((item) => (
                            <MenuItem key = {item} value={item}>{item}</MenuItem>
                        ))
                    }                                    
                    </Select>
            </FormControl>
            

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