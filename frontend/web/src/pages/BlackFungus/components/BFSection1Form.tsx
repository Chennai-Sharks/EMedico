import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { Field, getIn, useFormikContext } from 'formik';
import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomDropDown from 'widgets/CustomDropdown/CustomDropDown';
import CustomRadio from 'widgets/CustomRadio/CustomRadio';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';
import { BFFormInitialValues, section1FormModel } from '@emedico/shared';
import { formStyles } from './BFSection1FormStyles';

interface BFSection1FormProps {}

const BFSection1Form: React.FC<BFSection1FormProps> = () => {
  const classes = formStyles();

  const { errors } = useFormikContext<typeof BFFormInitialValues>();

  return (
    <CustomCard
      customStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography className={classes.title} variant='h5'>
        Section 1
      </Typography>

      <Divider />

      <Grid container className={classes.layout}>
        {section1FormModel.map((item, index) => {
          if (item.type === 'title') {
            return (
              <Grid item xs={12} className={classes.formTitle} key={index}>
                {index !== 0 && <Divider style={{ marginTop: '20px' }} />}
                <Typography
                  className={classes.title}
                  style={{
                    textAlign: 'center',
                  }}
                  variant='h5'
                >
                  {item.label}
                </Typography>
                <Divider />
              </Grid>
            );
          } else if (item.type === 'bigtitle') {
            return (
              <Grid item xs={12} className={classes.formTitle} key={index}>
                {index !== 0 && <Divider style={{ marginTop: '20px' }} />}
                <Typography
                  className={classes.title}
                  style={{
                    textAlign: 'center',
                  }}
                  variant='h4'
                >
                  {item.label}
                </Typography>
                <Divider />
              </Grid>
            );
          } else if (item.type === 'textfield') {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Field
                  name={`section1.${item.name}`}
                  label={item.label}
                  padding={classes.textFieldPadding}
                  as={CustomTextField}
                  error={!!getIn(errors.section1, item.name)}
                  helperText={getIn(errors.section1, item.name)}
                />
              </Grid>
            );
          } else if (item.type === 'radio') {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <CustomRadio
                  name={`section1.${item.name}`}
                  label={item.label}
                  items={item.props}
                  error={!!getIn(errors.section1, item.name)}
                />
              </Grid>
            );
          } else if (item.type === 'dropdown') {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Field
                  name={`section1.${item.name}`}
                  label={item.label}
                  items={item.props}
                  as={CustomDropDown}
                  error={!!getIn(errors.section1, item.name)}
                  helperText={getIn(errors.section1, item.name)}
                />
              </Grid>
            );
          } else return null;
        })}
      </Grid>
    </CustomCard>
  );
};

export default BFSection1Form;
