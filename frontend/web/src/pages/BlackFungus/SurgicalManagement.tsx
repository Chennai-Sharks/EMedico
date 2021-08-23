import React from 'react';
import {
  Typography,
  Grid,
  Checkbox,
  FormControl,
  Theme,
  createStyles,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  makeStyles,
  LinearProgress,
  CircularProgress,
} from '@material-ui/core';

import { Field, Formik, Form } from 'formik';
import CustomCard from 'widgets/CustomCard/CustomCard';
import ErrorImg from '../../assets/error.svg';

import {
  GetBFAllPatients,
  section4FormModel,
  snackBarStore,
  AddSection4PatientData,
} from '@emedico/shared';

import { formStyles } from './components/BFSection1FormStyles';
import CustomAutoComplete from 'widgets/CustomAutoComplete/CustomAutoComplete';
import CustomButton from 'widgets/CustomButton/CustomButton';
import CustomDialog from 'widgets/CustomDialog/CustomDialog';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';

interface BFSection4FormProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    checkBox: {
      '&:hover': {
        backgroundColor: 'rgb(0,0,255,0.1)',
      },
    },
    errorImg: {
      width: '100%',
      height: '80vh',
      padding: '10vh',
    },
  })
);

const BFSection4Form: React.FC<BFSection4FormProps> = () => {
  const classes = formStyles();
  const styles = useStyles();

  const [mongoId, setMongoId] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);

  const snackBar = snackBarStore((state) => state);
  const addSection4Data = AddSection4PatientData();

  const { data, isLoading, isError, error, remove } = GetBFAllPatients();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <>
        <img src={ErrorImg} alt='Error' className={styles.errorImg} />
        <Typography variant='h4' style={{ fontWeight: 600 }} align='center'>
          {error?.response?.data ? error?.response?.data?.message : 'No Data'}
        </Typography>
      </>
    );
  }

  return (
    <CustomCard
      customStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '50px',
      }}
    >
      <Formik
        initialValues={{
          surgicalPlan: [],
        }}
        onSubmit={async (values, action) => {
          if (!mongoId) {
            snackBar.setmessage('Select a Patient before submitting.');
            snackBar.setOpen(true);
            action.setSubmitting(false);
          } else {
            try {
              await addSection4Data.mutateAsync({
                mongoId,
                surgicalPlan: values.surgicalPlan,
              });
              setOpenDialog(!openDialog);
            } catch (error) {
              snackBar.setmessage(error.response.data.message);
              snackBar.setOpen(true);
            }
          }
        }}
      >
        {({ errors, isSubmitting, resetForm }) => {
          return (
            <Form>
              <Grid container className={classes.layout}>
                <Grid item xs={12} className={classes.formTitle}>
                  <Typography
                    className={classes.title}
                    style={{
                      textAlign: 'center',
                      margin: '0px',
                      marginTop: '10px',
                      marginBottom: '20px',
                    }}
                    variant='h4'
                  >
                    Surgical Management
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomAutoComplete
                    label='Enter Patient name'
                    data={(data?.data as Array<Record<string, any>>).reverse()}
                    onChange={(_: any, value: any) => {
                      setMongoId(value._id);
                    }}
                  />
                </Grid>
                {section4FormModel.map((item, index) => {
                  if (item.type === 'checkbox') {
                    return (
                      <div className={styles.root} key={index}>
                        <FormControl
                          // error={!!errors.surgicalPlan}
                          component='fieldset'
                          className={styles.formControl}
                        >
                          <FormLabel component='legend'>{item.label}</FormLabel>

                          <FormGroup>
                            {(item.props as string[]).map(
                              (eachProp: any, index) => (
                                <FormControlLabel
                                  key={index}
                                  control={
                                    <Field
                                      type='checkbox'
                                      id={`${item.name}-${index}`}
                                      className={styles.checkBox}
                                      style={{
                                        color: '#5664D2',
                                      }}
                                      name={item.name}
                                      value={`${eachProp.part1} \n ${(
                                        eachProp.option as string[]
                                      ).map((item) => ` ${item}\n `)}`}
                                      defaultValue=''
                                      as={Checkbox}
                                    />
                                  }
                                  label={`${eachProp.part1} \n ${(
                                    eachProp.option as string[]
                                  ).map((item) => ` ${item}\n `)}`}
                                />
                              )
                            )}
                          </FormGroup>
                          <FormHelperText>{errors.surgicalPlan}</FormHelperText>
                        </FormControl>
                      </div>
                    );
                  } else return null;
                })}
                <Grid
                  item
                  xs={12}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CustomButton type='submit' disabled={isSubmitting}>
                    {isSubmitting ? <CircularProgress /> : 'Submit'}
                  </CustomButton>
                </Grid>
                <CustomDialog
                  open={openDialog}
                  notOkButtonText={undefined}
                  okButtonText='Okay'
                  onOkHandled={() => {
                    setOpenDialog(false);
                    resetForm();
                    setMongoId('');
                    remove();
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: 'smooth',
                    });
                  }}
                  title='Success'
                  content='Surgical Plan added successfully for the patient.'
                  onClose={() => {}}
                />
                <CustomSnackBar
                  open={snackBar.open}
                  handleClose={() => snackBar.setOpen(false)}
                  message={snackBar.message}
                  severity='error'
                />
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </CustomCard>
  );
};
export default BFSection4Form;
