import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Field } from 'formik';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    hover: {
      '&:hover': {
        backgroundColor: 'rgb(0,0,255,0.1)',
      },
    },
  })
);

type CustomCheckBoxProps = any;

const CustomCheckBox: React.FC<CustomCheckBoxProps> = (props) => {
  const classes = useStyles();
  const id = (props.name ?? ('' as string)).split('.').pop();

  return (
    <div className={classes.root}>
      <FormControl
        error={props.error}
        component='fieldset'
        className={classes.formControl}
      >
        <FormLabel component='legend'>{props.label}</FormLabel>

        <FormGroup>
          {(props.items as string[]).map((item, index) => (
            <FormControlLabel
              key={index}
              control={
                <Field
                  type='checkbox'
                  id={`${id}-${index}`}
                  style={{
                    color: '#5664D2',
                  }}
                  className={classes.hover}
                  name={props.name}
                  value={item}
                  defaultValue=''
                  as={Checkbox}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
        <FormHelperText> {props.FormHelperText} </FormHelperText>
      </FormControl>
    </div>
  );
};

export default CustomCheckBox;
