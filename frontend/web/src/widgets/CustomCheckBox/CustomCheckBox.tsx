import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  })
);

type CustomCheckBoxProps = any;

const CustomCheckBox: React.FC<CustomCheckBoxProps> = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  

  return (
    <div className={classes.root}>
      <FormControl
        required
        // error={error}
        component="fieldset"
        className={classes.formControl}
		name = {props.name}
      >
        <FormLabel component="legend">{props.label} </FormLabel>

        <FormGroup>
		{(props.items as string[]).map((item, index) => (
          <FormControlLabel
            control={
              <Checkbox 
			  	// checked = {item}
			   	onChange={handleChange} 
				key = {index}
			  />
            }
            label= {item}
          />          
		  ))}
        </FormGroup>		
        {/* <FormHelperText>You can display an error</FormHelperText> */}
      </FormControl>
    </div>
  );
}

export default CustomCheckBox;