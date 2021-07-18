import { makeStyles, MenuItem, TextField, withStyles } from '@material-ui/core';
import React from 'react';

type CustomDropDownProps = any;

const useStyles = makeStyles(() => ({
  selectStyle: {
    borderRadius: '16px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    width: '97%',
  },
  menuStyle: {
    borderRadius: '16px',
  },
}));

const roundedSelectOnFocusStyle = () => ({
  '@global': {
    '.MuiSelect-select:focus': {
      borderRadius: '16px',
    },
  },
});

const CustomDropDown: React.FC<CustomDropDownProps> = (props) => {
  const classes = useStyles();
  const id = (props.name as string).split('.').pop();
  return (
    <>
      <TextField
        select
        id={id}
        defaultValue=''
        {...props}
        variant='outlined'
        InputProps={{
          style: {
            borderRadius: '16px',
          },
        }}
        MenuProps={{
          classes: {
            paper: classes.menuStyle,
          },
        }}
        className={classes.selectStyle}
      >
        {props.items.map((item: string, index: number) => (
          <MenuItem id={`${id}-${item}`} value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default withStyles(roundedSelectOnFocusStyle)(CustomDropDown);
