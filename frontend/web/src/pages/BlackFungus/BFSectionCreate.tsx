import {
  Divider,
  makeStyles,
  Typography,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Form, Formik, Field, FormikConfig, FormikValues } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import React from "react";

import {
  section1FormInitialValues,
  AddBFSection1FormProvider,
  AddPatientProvider,
  snackBarStore,
} from "@emedico/shared";

import CustomCard from "widgets/CustomCard/CustomCard";
import CustomButton from "widgets/CustomButton/CustomButton";
import { CircularProgress } from "@material-ui/core";
import BFSection1Form from './components/BFSection1Form';
import CustomSnackBar from "widgets/CustomSnackBar/CustomSnackBar";
import CustomDialog from "widgets/CustomDialog/CustomDialog";

import CustomDropDown from "widgets/CustomDropdown/CustomDropDown";
import CustomRadio from "widgets/CustomRadio/CustomRadio";
import CustomTextField from "widgets/CustomTextField/CustomTextField";

interface BFSection1CreateProps {}

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required(),
  age: Yup.number().required().positive().integer(),
  personalHistory: Yup.string().required(),
  gender: Yup.string().required(),
  dpid: Yup.string().required("Patient ID is a required field"),
  occupation: Yup.string().required(),
});

const validationSchema2 = Yup.object().shape({
  Page2: Yup.string().required(),
});

const BFSection1Create: React.FC<BFSection1CreateProps> = () => {
  const classes = useStyles();
  const addPatientProvider = AddPatientProvider();
  const bfSection1FormProvider = AddBFSection1FormProvider();

  const [openDialog, setOpenDialog] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const snackBar = snackBarStore((state) => state);

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
    <>
      <FormikStepper
        initialValues={section1FormInitialValues}
        onSubmit={async (values) => {
          try {
            setLoading(true);
            const response = await addPatientProvider.mutateAsync({
              name: values.name,
              dpid: values.dpid,
            });
            const mongoId: string = response.data._id;
            console.log(mongoId);
            const response1 = await bfSection1FormProvider.mutateAsync({
              mongoId,
              ...values,
            });
            setLoading(false);
            setOpenDialog(!openDialog);

            console.log(response1.data);
          } catch (error: any) {
            setLoading(false);
            console.log(error.response.data.message);
            snackBar.setOpen(true);
            snackBar.setmessage(error.response.data.message);
          }
        }}
      >
        {/* {({ errors, touched, values, isSubmitting, resetForm }) => (
        <> */}

        <FormikStep validationSchema = {validationSchema} label = "Section 1">
          <CustomCard
            customStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography className={classes.title} variant="h5">
              Section 1
            </Typography>
            <Divider />

            <Grid container spacing={3} className={classes.layout}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="name"
                  label="Name"
                  padding={classes.textFieldPadding}
                  as={CustomTextField}
                  // error={errors.name && touched.name}
                  // helperText={errors.name}
                />

                <Field
                  name="age"
                  label="Age"
                  type="number"
                  padding={classes.textFieldPadding}
                  as={CustomTextField}
                  // error={errors.age && touched.age}
                  // helperText={errors.age}
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
                  // error={errors.personalHistory && touched.personalHistory}
                  // helperText={errors.personalHistory}
                />                

                {fieldName.map((item, index) => {
                  const fieldLabelContent = fieldLabel[index];
                  return (
                    <CustomRadio
                      name={item}
                      label={fieldLabelContent}
                      topMargin={true}
                      items={["yes", "no"]}
                      key={index}
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
                  // error={errors.dpid && touched.dpid}
                  // helperText={errors.dpid}
                />
                <Field
                  name="gender"
                  label="Gender"
                  type="select"
                  items={["male", "female", "other"]}
                  as={CustomDropDown}
                  // error={errors.gender && touched.gender}
                  // helperText={errors.gender}
                />
                <Field
                  name="occupation"
                  label="Occupation"
                  padding={classes.textFieldPadding}
                  as={CustomTextField}
                  // error={errors.occupation && touched.occupation}
                  // helperText={errors.occupation}
                />
              </Grid>
            </Grid>
          </CustomCard>
        </FormikStep>

        <FormikStep validationSchema={validationSchema2} label = "Section 2">
          <CustomCard
            customStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Divider />

            <Field
              name="Page2"
              label="Page 2"
              padding={classes.textFieldPadding}
              as={CustomTextField}
            />
          </CustomCard>
        </FormikStep>

        <FormikStep label = "Section 3">
          <CustomCard
            customStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Divider />

            <Field
              name="Page 3"
              label="Page 3"
              padding={classes.textFieldPadding}
              as={CustomTextField}
            />
          </CustomCard>
        </FormikStep>

        

        {/* <CustomDialog
          open={openDialog}
          notOkButtonText={undefined}
          okButtonText="Okay"
          onOkHandled={() => {
            setOpenDialog(false);
            // resetForm();
           }}
          title="Success"
          content="Patient Added Successfully."
          onClose={() => {}}
        />
        <CustomSnackBar
          open={snackBar.open}
          handleClose={() => snackBar.setOpen(false)}
          message={snackBar.message}
          severity="error"
        /> */}
        {/*   </>
      // )} */}
      </FormikStepper>
    </>
  );
};

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
    label: string;
  }

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray( children ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[ step ] as React.ReactElement<FormikStepProps>;
  // const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          // setCompleted(true);
        } else {
          setStep((s) => s + 1);
          // helpers.setTouched({});
        }
      }}
    >      
    {({ isSubmitting }) => (
          <Form>          
            <Stepper alternativeLabel activeStep={step}>
              {childrenArray.map((child, index) => (
                <Step key={child.props.label} completed={step > index }>
                  <StepLabel>{child.props.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

              {currentChild}

              {step > 0 ? (
                <CustomButton 
                  disabled={isSubmitting}
                  onClick={() => setStep((s) => s - 1)}
                  customStyle={{
                    marginLeft: "40%",
                    marginRight: "40%",
                    marginBottom: "20px",
                  }}>  

                  Back

                </CustomButton>
              ) : null}
              <CustomButton 
                  // startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                  disabled={isSubmitting}
                  onClick={() => setStep((s) => s - 1)}
                  customStyle={{
                    marginLeft: "40%",
                    marginRight: "40%",
                    marginBottom: "20px",
                  }}>  

                  {isSubmitting ? 'Adding Patient' : isLastStep() ? 'Add Patient' : 'Next Section'}

              </CustomButton>
          </Form>       
          )} 
    </Formik>
  );
}

// <CustomButton
//                 // disabled={isSubmitting}
//                 
//                 type="submit"
//               >
//           {loading ? <CircularProgress /> : "submit"}
//               </CustomButton>

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "100%",
  },
  content: {
    marginTop: theme.spacing(3),
  },
  title: {
    margin: "20px 20px",
    fontSize: "1.5 rem",
    fontWeight: "bold",
  },
  textFieldPadding: {
    margin: "20px",
    paddingRight: "20px",
    marginBottom: "0px",
  },
}));

export default BFSection1Create;
