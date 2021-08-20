import React from 'react';
import {
  Text,
  KeyboardTypeOptions,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { object } from 'yup';

import { Formik, getIn } from 'formik';
import { useFocusEffect } from '@react-navigation/native';

import {
  Section1ValidationSchema,
  Section2ValidationSchema,
  Section3ValidationSchema,
  BFFormInitialValues,
  AddBFPatientSectionData,
  AddPatientProvider,
  snackBarStore,
  section1FormModel,
  section2FormModel,
  section3FormModel,
} from '@emedico/shared';

import { Button } from 'react-native-paper';

import CustomTextField from '../../widgets/CustomTextField/CustomTextField';
import CustomDropDown from '../../widgets/CustomDropDown/CustomDropDown';
import CustomRadio from '../../widgets/CustomRadio/CustomRadio';
import CustomCheckBox from '../../widgets/CustomCheckBox/CustomCheckBox';
import CustomSnackbar from '../../widgets/CustomSnackbar/CustomSnackbar';
import CustomDialog from '../../widgets/CustomDialog/CustomDialog';
import BFCreateFAB from './components/BFCreateFAB';
import { useFabStore } from '../../store/FabStore';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  bigtitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    margin: 16,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
});

interface BFSectionCreateProps {}

const returnKeyboardType = (name: string): KeyboardTypeOptions | undefined => {
  switch (name) {
    case 'age':
      return 'numeric';
    case 'phoneNumber':
      return 'phone-pad';
    case 'email':
      return 'email-address';
    default:
      return undefined;
  }
};

const validationSchema = object().shape({
  section1: object()
    .shape(Section1ValidationSchema)
    .default(undefined)
    .nullable(),
  section2: object().shape(Section2ValidationSchema),
  section3: object().shape(Section3ValidationSchema),
});

const BFSectionCreate: React.FC<BFSectionCreateProps> = () => {
  const addPatientProvider = AddPatientProvider();
  const addPatientFormData = AddBFPatientSectionData();

  const ref = React.useRef<ScrollView>(null);

  const snackBar = snackBarStore((state) => state);

  const [openDialog, setOpenDialog] = React.useState(false);
  const setVisible = useFabStore((state) => state.setVisible);

  useFocusEffect(
    React.useCallback(() => {
      ref.current?.scrollTo({
        y: 0,
        animated: true,
      });
      setVisible(true);
      return () => {
        setVisible(false);
      };
    }, [])
  );

  return (
    <Formik
      initialValues={
        BFFormInitialValues as Record<'section1' | 'section2' | 'section3', any>
      }
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      validationSchema={validationSchema}
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

          setOpenDialog(true);
        } catch (error: any) {
          snackBar.setOpen(true);
          snackBar.setmessage(error.response.data.message);
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        resetForm,
        isSubmitting,
        isValidating,
      }) => {
        return (
          <>
            <ScrollView
              ref={ref}
              style={{
                backgroundColor: '#ECF0FD',
              }}
            >
              <Text style={styles.title}>Section 1</Text>

              {section1FormModel.map((item, index) => {
                if (item.type === 'title') {
                  return (
                    <Text style={styles.subtitle} key={`${index}-${item}`}>
                      {item.label}
                    </Text>
                  );
                } else if (item.type === 'bigtitle') {
                  return (
                    <Text style={styles.bigtitle} key={`${index}-${item}`}>
                      {item.label}
                    </Text>
                  );
                } else if (item.type === 'textfield') {
                  return (
                    <CustomTextField
                      key={`${index}-${item}`}
                      label={item.label}
                      keyboardType={returnKeyboardType(item.name)}
                      onBlur={handleBlur(`section1.${item.name}`)}
                      onChangeText={handleChange(`section1.${item.name}`)}
                      value={values.section1[item.name]}
                      error={!!getIn(errors.section1, item.name)}
                      helperText={getIn(errors.section1, item.name)}
                    />
                  );
                } else if (item.type === 'radio') {
                  return (
                    <CustomRadio
                      key={`${index}-${item}`}
                      items={item.props}
                      label={item.label}
                      value={values.section1[item.name]}
                      onValueChange={handleChange(`section1.${item.name}`)}
                      error={!!getIn(errors.section1, item.name)}
                      helperText={getIn(errors.section1, item.name)}
                    />
                  );
                } else if (item.type === 'dropdown') {
                  return (
                    <CustomDropDown
                      key={`${index}-${item}`}
                      items={item.props}
                      label={item.label}
                      value={values.section1[item.name]}
                      onValueChange={handleChange(`section1.${item.name}`)}
                      error={!!getIn(errors.section1, item.name)}
                      helperText={getIn(errors.section1, item.name)}
                    />
                  );
                } else return null;
              })}
              <Text style={styles.title}>Section 2</Text>
              {section2FormModel.map((item, index) => {
                if (item.type === 'title') {
                  return (
                    <Text style={styles.subtitle} key={`${index}-${item}`}>
                      {item.label}
                    </Text>
                  );
                } else if (item.type === 'radio') {
                  return (
                    <CustomRadio
                      key={`${index}-${item}`}
                      items={item.props}
                      label={item.label}
                      value={values.section2[item.name]}
                      onValueChange={handleChange(`section2.${item.name}`)}
                      error={!!getIn(errors.section2, item.name)}
                      helperText={getIn(errors.section2, item.name)}
                    />
                  );
                } else return null;
              })}
              <Text style={styles.title}>Section 3</Text>
              {section3FormModel.map((item, index) => {
                if (item.type === 'title') {
                  return (
                    <Text style={styles.subtitle} key={`${index}-${item}`}>
                      {item.label}
                    </Text>
                  );
                } else if (item.type === 'bigtitle') {
                  return (
                    <Text style={styles.bigtitle} key={`${index}-${item}`}>
                      {item.label}
                    </Text>
                  );
                } else if (item.type === 'textfield') {
                  return (
                    <CustomTextField
                      key={`${index}-${item}`}
                      label={item.label}
                      onBlur={handleBlur(`section3.${item.name}`)}
                      onChangeText={handleChange(`section3.${item.name}`)}
                      value={values.section3[item.name]}
                      error={!!getIn(errors.section3, item.name)}
                      helperText={getIn(errors.section3, item.name)}
                    />
                  );
                } else if (item.type === 'radio') {
                  return (
                    <CustomRadio
                      key={`${index}-${item}`}
                      items={item.props}
                      label={item.label}
                      value={values.section3[item.name]}
                      onValueChange={handleChange(`section3.${item.name}`)}
                      error={!!getIn(errors.section3, item.name)}
                      helperText={getIn(errors.section3, item.name)}
                    />
                  );
                } else if (item.type === 'checkbox') {
                  return (
                    <CustomCheckBox
                      name={`section3.${item.name}`}
                      value={values.section3[item.name]}
                      onValueChange={setFieldValue}
                      key={`${index}-${item}`}
                      label={item.label}
                      items={item.props}
                      // error={!!getIn(errors.section3, item.name)}
                      // FormHelperText={getIn(errors.section3, item.name)}
                    />
                  );
                } else return null;
              })}
              <Button
                style={styles.button}
                theme={{ roundness: 16 }}
                mode='contained'
                loading={isValidating || isSubmitting}
                disabled={isValidating || isSubmitting}
                onPress={handleSubmit}
              >
                Submit form
              </Button>
            </ScrollView>
            <BFCreateFAB reference={ref} />
            <CustomSnackbar
              open={snackBar.open}
              handleClose={() => snackBar.setOpen(false)}
              message={snackBar.message}
            />
            <CustomDialog
              open={openDialog}
              okButtonText='Okay'
              onOkHandled={() => {
                resetForm();
                setOpenDialog(false);
                ref.current?.scrollTo({
                  y: 0,
                  animated: true,
                });
              }}
              title='Success'
              content='Patient Added Successfully.'
              onClose={() => {
                setOpenDialog(false);
              }}
            />
          </>
        );
      }}
    </Formik>
  );
};
export default BFSectionCreate;
