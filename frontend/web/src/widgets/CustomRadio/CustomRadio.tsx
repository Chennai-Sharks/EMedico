import React from 'react';
import { Field } from 'formik';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { ToggleButtonGroup } from 'formik-material-ui-lab';
import { makeStyles, Typography } from '@material-ui/core';

type CustomRadioProps = any;

const CustomRadio: React.FC<CustomRadioProps> = (props) => {
  const id = (props.name as string).split('.').pop();
  const classes = useStyles();
  return (
    <>
      <div className={classes.layout1}>
        <Typography variant='h6' className={classes.labelStyle}>
          {props.label}
        </Typography>
        <Field
          type='checkbox'
          exclusive // exclusive makes it radio button
          name={props.name}
          component={ToggleButtonGroup}
        >
          {(props.items as string[]).map((item, index) => (
            <ToggleButton
              classes={{
                selected: classes.selected,
              }}
              id={`${id}-${item}`}
              color='primary'
              className={classes.btWidth}
              style={{
                borderColor: props.error ? 'red' : undefined,
                // borderWidth: props.error ? '2px' : undefined,
              }}
              key={index}
              value={item}
              size='medium'
              defaultValue=''
            >
              {item}
            </ToggleButton>
          ))}
        </Field>
      </div>

      {/* {props.error && (
				<FormHelperText
					error={props.error}
					style={{
						display: 'flex',
						justifyContent: 'center',
						fontWeight: 'bold',
						marginTop: '5px',
					}}
				>
					{props.helperText}
				</FormHelperText>
			)} */}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  layout1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    marginTop: '10px',
  },

  labelStyle: {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
    fontWeight: 'bold',
    margin: '20px',

    // textAlign: 'center',
  },
  btWidth: {
    width: '90px',
    height: '50px',
    // fontSize: '1rem',
    textAlign: 'center',
    borderRadius: '16px',
  },
  selected: {
    backgroundColor: '#5664D2 !important',
    color: 'white !important',
  },
}));

export default CustomRadio;
