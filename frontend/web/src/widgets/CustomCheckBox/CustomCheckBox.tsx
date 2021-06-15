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
	})
);

type CustomCheckBoxProps = any;

const CustomCheckBox: React.FC<CustomCheckBoxProps> = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<FormControl
				required
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
									// name={item}
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
