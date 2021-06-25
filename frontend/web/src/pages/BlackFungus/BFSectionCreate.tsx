import React from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import {
  BFFormInitialValues,
  AddBFPatientSectionData,
  AddPatientProvider,
  snackBarStore,
} from '@emedico/shared';

import CustomButton from 'widgets/CustomButton/CustomButton';
import { CircularProgress } from '@material-ui/core';
import BFSection1Form from './components/BFSection1Form';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';
import CustomDialog from 'widgets/CustomDialog/CustomDialog';

import BFSection2Form from './components/BFSection2Form';
import BFSection3Form from './components/BFSection3Form';

import {
  Section1ValidationSchema,
  Section2ValidationSchema,
  Section3ValidationSchema,
} from '@emedico/shared';

interface BFSection1CreateProps {}

const validationSchema1 = Yup.object().shape({
  section1: Yup.object()
    .shape(Section1ValidationSchema)
    .default(undefined)
    .nullable(),
});

const validationSchema2 = Yup.object().shape({
  // Section2ValidationSchema is coming from shared. see there.
  section2: Yup.object().shape(Section2ValidationSchema),
});

const validationSchema3 = Yup.object().shape({
  section3: Yup.object().shape(Section3ValidationSchema),
});

const BFSection1Create: React.FC<BFSection1CreateProps> = () => {
  const addPatientProvider = AddPatientProvider();
  const addPatientFormData = AddBFPatientSectionData();

  const [openDialog, setOpenDialog] = React.useState(false);

  const snackBar = snackBarStore((state) => state);

  return (
    <>
      <FormikStepper
        initialValues={BFFormInitialValues}
        onSubmit={async (values) => {
          try {
            console.log(values);
            const data = { ...values };

            const response = await addPatientProvider.mutateAsync({
              name: data.section1.name,
              dpid: data.section1.dpid,
            });
            const mongoId: string = response.data._id;
            console.log(mongoId);

            delete data.section1.name;
            delete data.section1.dpid;

            const response1 = await addPatientFormData.mutateAsync({
              mongoId,
              data,
            });

            setOpenDialog(!openDialog);

            console.log(response1.data);
          } catch (error: any) {
            console.log(error.response.data.message);
            snackBar.setOpen(true);
            snackBar.setmessage(error.response.data.message);
          }
        }}
      >
        <FormikStep validationSchema={validationSchema1} label='Section 1'>
          <BFSection1Form />
        </FormikStep>

        <FormikStep validationSchema={validationSchema2} label='Section 2'>
          <BFSection2Form />
        </FormikStep>

        <FormikStep validationSchema={validationSchema3} label='Section 3'>
          <BFSection3Form />
        </FormikStep>
      </FormikStepper>
      <CustomDialog
        open={openDialog}
        notOkButtonText={undefined}
        okButtonText='Okay'
        onOkHandled={() => {
          setOpenDialog(false);
          // resetForm();
          window.location.reload();
        }}
        title='Success'
        content='Patient Added Successfully.'
        onClose={() => {}}
      />
      <CustomSnackBar
        open={snackBar.open}
        handleClose={() => snackBar.setOpen(false)}
        message={snackBar.message}
        severity='error'
      />
    </>
  );
};

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[
    step
  ] as React.ReactElement<FormikStepProps>;
  const [completed, setCompleted] = useState(false);

  // const snackBar = snackBarStore((state) => state);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      validate={() => {
        console.log('error');
        // snackBar.setOpen(true);
        // snackBar.setmessage('Some Fields are not filled.');
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
      validateOnChange={false} // don't remove these. it is important.
      validateOnBlur={false}
      validateOnMount={false}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setStep(0);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              overflow: 'hidden',
              marginBottom: '50px',
            }}
          >
            {step > 0 ? (
              <CustomButton
                disabled={isSubmitting}
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </CustomButton>
            ) : null}
            <CustomButton disabled={isSubmitting} type='submit'>
              {isSubmitting ? (
                <CircularProgress />
              ) : isLastStep() ? (
                'Submit'
              ) : (
                'Next Section'
              )}
            </CustomButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BFSection1Create;
