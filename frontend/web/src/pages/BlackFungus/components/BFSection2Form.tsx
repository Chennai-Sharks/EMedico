import React from 'react';

import { section2FormModel, BFFormInitialValues } from '@emedico/shared';
import { getIn, useFormikContext } from 'formik';
import CustomCard from 'widgets/CustomCard/CustomCard';
import { formStyles } from './BFSection1FormStyles';
import { Typography, Divider, Grid } from '@material-ui/core';
import CustomRadio from 'widgets/CustomRadio/CustomRadio';
interface BFSection2FormProps {}

const BFSection2Form: React.FC<BFSection2FormProps> = () => {
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
        Section 2
      </Typography>

      <Divider />
      <Grid container className={classes.layout}>
        {section2FormModel.map((item, index) => {
          if (item.type === 'title')
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
          else if (item.type === 'radio') {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <CustomRadio
                  name={`section2.${item.name}`}
                  label={item.label}
                  items={item.props}
                  error={!!getIn(errors.section2, item.name)}
                  // getIn is from formik. hover over getIn to see it's info
                  // you will get that.
                  // helperText={getIn(errors.section2, item.name)}
                  // helperText not needed for radio. it's not looing good.
                />
              </Grid>
            );
          } else return null;
        })}
        <Divider />
      </Grid>
    </CustomCard>
  );
};
export default BFSection2Form;
