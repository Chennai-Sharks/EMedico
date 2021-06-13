import React from 'react';
import { Divider, Step, StepLabel, Stepper } from '@material-ui/core';
import { Form, Formik, Field, FormikConfig, FormikValues } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import {
	BFFormInitialValues,
	AddBFSection1FormProvider,
	AddPatientProvider,
	snackBarStore,
} from '@emedico/shared';

import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomButton from 'widgets/CustomButton/CustomButton';
// import { CircularProgress } from '@material-ui/core';
import BFSection1Form from './components/BFSection1Form';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';
import CustomDialog from 'widgets/CustomDialog/CustomDialog';

import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import { formStyles } from './components/BFSection1FormStyles';
import BFSection2Form from './components/BFSection2Form';

import { Section2ValidationSchema } from '@emedico/shared';

interface BFSection1CreateProps {}

const validationSchema = Yup.object().shape({
	section1: Yup.object().shape({
		name: Yup.string()
			.min(3, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		age: Yup.number().required('Required').positive().integer(),
		personalHistory: Yup.string().required('Required'),
		gender: Yup.string().required('Required'),
		dpid: Yup.string().required('Patient ID is a required field'),
		occupation: Yup.string().required('Required'),
		diplopia: Yup.string().required('Required'),
	} as any),
});

const validationSchema2 = Yup.object().shape({
	// Section2ValidationSchema is coming from shared. see there.
	section2: Yup.object().shape(Section2ValidationSchema),
});

const BFSection1Create: React.FC<BFSection1CreateProps> = () => {
	const classes = formStyles();
	const addPatientProvider = AddPatientProvider();
	const bfSection1FormProvider = AddBFSection1FormProvider();

	const [openDialog, setOpenDialog] = React.useState(false);
	const [, setLoading] = React.useState(false);

	const snackBar = snackBarStore((state) => state);

	return (
		<>
			<FormikStepper
				initialValues={BFFormInitialValues}
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
				<FormikStep validationSchema={validationSchema} label='Section 1'>
					<BFSection1Form />
				</FormikStep>

				<FormikStep validationSchema={validationSchema2} label='Section 2'>
					<BFSection2Form />
				</FormikStep>

				<FormikStep validationSchema={validationSchema2} label='Section 3'>
					<CustomCard
						customStyle={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<Divider />

						<Field
							name='Page 3'
							label='Page 3'
							padding={classes.textFieldPadding}
							as={CustomTextField}
						/>
					</CustomCard>
				</FormikStep>
			</FormikStepper>
			<CustomDialog
				open={openDialog}
				notOkButtonText={undefined}
				okButtonText='Okay'
				onOkHandled={() => {
					setOpenDialog(false);
					// resetForm();
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
			validationSchema={currentChild.props.validationSchema!}
			validate={() => {
				console.log('error');
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
				console.log('hello');
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
							{isSubmitting
								? 'Adding Patient'
								: isLastStep()
								? 'Add Patient'
								: 'Next Section'}
						</CustomButton>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default BFSection1Create;
