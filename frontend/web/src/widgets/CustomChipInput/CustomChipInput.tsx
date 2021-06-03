import { Field } from 'formik';
import ChipInput from 'material-ui-formik-components/ChipInput';
import React from 'react';

type CustomChipInputProps = any;

const CustomChipInput: React.FC<CustomChipInputProps> = (props) => {
	return (
		<Field
			name={props.name}
			inputProps={{
				style: {
					borderRadius: '16px',
				},
			}}
			style={{
				paddingBottom: '20px',
				marginTop: '30px',
				width: '100%',
			}}
			variant='outlined'
			placeholder='Press Enter after typing to add'
			className={props.padding}
			component={ChipInput}
		/>
	);
};
export default CustomChipInput;
