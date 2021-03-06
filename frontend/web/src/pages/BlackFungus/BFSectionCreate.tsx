import React from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { object } from 'yup';
import { useState } from 'react';

import {
  BFFormInitialValues,
  AddBFPatientSectionData,
  AddPatientProvider,
  snackBarStore,
} from '@emedico/shared';

import { FormikErrorOnFocus } from 'utils/ErrorOnFocus';

import CustomButton from 'widgets/CustomButton/CustomButton';
import { CircularProgress } from '@material-ui/core';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';
import CustomDialog from 'widgets/CustomDialog/CustomDialog';

import BFSection1Form from './components/BFSection1Form';
import BFSection2Form from './components/BFSection2Form';
import BFSection3Form from './components/BFSection3Form';

import {
  Section1ValidationSchema,
  Section2ValidationSchema,
  Section3ValidationSchema,
} from '@emedico/shared';

interface BFSection1CreateProps {}

const validationSchema1 = object().shape({
  section1: object()
    .shape(Section1ValidationSchema)
    .default(undefined)
    .nullable(),
});

const validationSchema2 = object().shape({
  section2: object().shape(Section2ValidationSchema),
});

const validationSchema3 = object().shape({
  section3: object().shape(Section3ValidationSchema),
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
            const data = { ...values };

            const response = await addPatientProvider.mutateAsync({
              name: data.section1.name,
              dpid: data.section1.dpid,
            });
            const mongoId: string = response.data._id;

            delete data.section1.name;
            delete data.section1.dpid;

            await addPatientFormData.mutateAsync({
              mongoId,
              data,
            });

            setOpenDialog(!openDialog);
          } catch (error: any) {
            snackBar.setOpen(true);
            snackBar.setmessage(error.response.data.message);
          }
        }}
      >
        <FormikStep validationSchema={validationSchema1} label='Section 1'>
          <FormikErrorOnFocus />
          <BFSection1Form />
        </FormikStep>

        <FormikStep validationSchema={validationSchema2} label='Section 2'>
          <FormikErrorOnFocus />
          <BFSection2Form />
        </FormikStep>

        <FormikStep validationSchema={validationSchema3} label='Section 3'>
          <FormikErrorOnFocus />
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

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      validateOnChange={false}
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
