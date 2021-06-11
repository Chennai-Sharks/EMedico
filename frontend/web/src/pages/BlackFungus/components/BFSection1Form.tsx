import { Grid, makeStyles } from "@material-ui/core";
import { Field } from "formik";
import React from "react";
// import CustomChipInput from "widgets/CustomChipInput/CustomChipInput";
import CustomDropDown from "widgets/CustomDropdown/CustomDropDown";
import CustomRadio from "widgets/CustomRadio/CustomRadio";
import CustomTextField from "widgets/CustomTextField/CustomTextField";

interface BFSection1FormProps {
  values: any;
}

const BFSection1Form: React.FC<BFSection1FormProps> = (props) => {
  const classes = useStyles();
  const fieldName = [
    "concurrentCovid",
		"recentCovid",
		"diabetesMellitus",
		"longtermSteroids",
		"highDoseOfSteroids",
		"immunocompromised",
		"malignancy",
		"transplant",
		"broadspectrumAntibiotics",
		"longtermOxygenTherapy",
		"prolongedICU",
		"mechanicalVentilation",
    "headache",
    "lowFever",
    "malaiseAndLethargy",
    "nasalObstruction",
    "nasaldischarge",
    "eyeRedness",
    "eyeWatering",
    "periorbitalSwelling",
    "eyeDiscoloration",
    "proptosis",
    "diplopia",
    "visionDiminution",
    "ptosis",
    "ophthalmoplegia",
    "facialSwellingOrPain",
    "parenthesia",
    "infraOrbitalNumbness",
    "toothache",
    "teethLoosening",
    "oralMucosaDiscoloration",
    "teethSensationLoss",
    "teethNumbness",
    "ulceration",
    "palatalPerforation",
  ];

  const fieldLabel = [
    "Concurrent Covid",
		"Recently treated COVID -19",
		"Uncontrolled Diabetes Mellitus",
		"Long-term Steroids",
		"High Dose Of Steroids",
		"Immunocompromised Individuals",
		"Malignancy",
		"Transplant",
		"Prolonged use of broad-spectrum antibiotics",
		"Long term Oxygen Therapy",
		"Prolonged ICU stays",
		"People under Mechanical Ventilation",                                  
    "Headache",
    "Low grade `fever",
    "Malaise & Lethargy",
    "Nasal Obstruction",
    "Nasal discharge often bloody",
    "Pain and redness around eyes",
    "Eyes Watering",
    "Periorbital Swelling",
    "Eye Discoloration",
    "Proptosis",
    "Diplopia",
    "Diminution of vision",
    "Ptosis",
    "Ophthalmoplegia",
    "Facial Swelling & Pain",
    "Parenthesia",
    "Numbness in infra Orbital region",
    "Toothache",
    "Loosening of teeth",
    "Blackish discoloration of oral mucosa",
    "Loss of sensation in teeth",
    "Teeth Numbness",
    "Ulceration",
    "Perforation over palatal region",
  ];

  return (
    <Grid container spacing={3} className={classes.layout}>
      <Grid item xs={12} sm={6}>
        <Field
          name="name"
          label="Name"
          padding={classes.textFieldPadding}
          // {errors.firstName && touched.firstName ? (
          //   <div>{errors.firstName}</div>
          // ) : null}
          as={CustomTextField}
        />
        <Field
          name="age"
          label="Age"
          type="number"
          padding={classes.textFieldPadding}
          as={CustomTextField}
        />
        <Field
          name="personalHistory"
          label="Personal History"
          type="select"
          items={[
            "single",
            "married",
            "divorce",
            "separated",
            "widowed",
            "children",
          ]}
          as={CustomDropDown}
        />
        
        {/* <CustomRadio
          name="concurrentCovid"
          label="Concurrent Covid"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="diabetesMellitus"
          label="Uncontrolled Diabetes Mellitus"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="highDoseOfSteroids"
          label="High Dose Of Steroids"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="malignancy"
          label="Malignancy"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="broadspectrumAntibiotics"
          label="Prolonged use of broad-spectrum antibiotics"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="prolongedICU"
          label="Prolonged ICU stays"
          topMargin={true}
          items={["yes", "no"]}
        /> */}
        
        {fieldName.map((item, index) => {
          const fieldLabelContent = fieldLabel[index];
          return (
            <CustomRadio
              name={item}
              label={fieldLabelContent}
              topMargin={true}
              items={["yes", "no"]}
              key={index}
              required 
            />
          );
        })}        
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="dpid"
          label="Patient ID"
          padding={classes.textFieldPadding}
          as={CustomTextField}
        />
        <Field
          name="gender"
          label="Gender"
          type="select"
          items={["male", "female", "other"]}
          as={CustomDropDown}
        />
        <Field
          name="occupation"
          label="Occupation"
          padding={classes.textFieldPadding}
          as={CustomTextField}
        />
               
        {/* <CustomRadio
          name="recentCovid"
          label="Recently treated COVID -19"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="longtermSteroids"
          label="Long-term Steroids"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="immunocompromised"
          label="Immunocompromised Individuals"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="transplant"
          label="transplant"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="longtermOxygenTherapy"
          label="Long term Oxygen Therapy"
          topMargin={true}
          items={["yes", "no"]}
        />
        <CustomRadio
          name="mechanicalVentilation"
          label="People under Mechanical Ventilation"
          topMargin={true}
          items={["yes", "no"]}
        /> */}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  layout: {
    width: "100%",
  },

  textFieldPadding: {
    margin: "20px",
    paddingRight: "20px",
    marginBottom: "0px",
  },
}));

export default BFSection1Form;