import { Divider, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import React from "react";

import {
  section1FormInitialValues,
  AddBFSection1FormProvider,
  AddPatientProvider,
  BFSection1BeforeFormSubmit,
  snackBarStore,
} from "@emedico/shared";

import CustomCard from "widgets/CustomCard/CustomCard";
import CustomButton from "widgets/CustomButton/CustomButton";
import { CircularProgress } from "@material-ui/core";
// import BFSection1Form from './components/BFSection1Form';
import CustomSnackBar from "widgets/CustomSnackBar/CustomSnackBar";
import CustomDialog from "widgets/CustomDialog/CustomDialog";

import CustomDropDown from "widgets/CustomDropdown/CustomDropDown";
import CustomRadio from "widgets/CustomRadio/CustomRadio";
import CustomTextField from "widgets/CustomTextField/CustomTextField";

interface BFSection1CreateProps {}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
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
    <Formik
      initialValues={section1FormInitialValues}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        try {
          setLoading(true);
          const data = BFSection1BeforeFormSubmit({ ...values });
          const response = await addPatientProvider.mutateAsync({
            name: values.name,
            dpid: values.dpid,
          });
          const mongoId: string = response.data._id;
          console.log(mongoId);
          const response1 = await bfSection1FormProvider.mutateAsync({
            mongoId,
            data,
          });
          setLoading(false);
          setOpenDialog(!openDialog);

          console.log(response1.data);
        } catch (error) {
          setLoading(false);

          console.log(error.response.data.message);
          snackBar.setOpen(true);
          snackBar.setmessage(error.response.data.message);
        }
      }}
    >
      {({ values, isSubmitting, resetForm }) => (
        <>
          <Form className={classes.content}>
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

              <Divider />
              <CustomButton
                disabled={isSubmitting}
                customStyle={{
                  marginLeft: "40%",
                  marginRight: "40%",
                  marginBottom: "20px",
                }}
                type="submit"
              >
                {loading ? <CircularProgress /> : "submit"}
              </CustomButton>
            </CustomCard>
          </Form>
          <CustomDialog
            open={openDialog}
            notOkButtonText={undefined}
            okButtonText="Okay"
            onOkHandled={() => {
              setOpenDialog(false);
              resetForm();
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
          />
        </>
      )}
    </Formik>
  );
};

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
