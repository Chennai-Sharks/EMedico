import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import CustomTextField from 'widgets/CustomTextField/CustomTextField';

type CustomAutoCompleteProps = any;

const CustomAutoComplete: React.FC<CustomAutoCompleteProps> = (props) => {
	return (
		<Autocomplete
			{...props}
			options={props.data}
			onChange={props.onChange}
			getOptionLabel={(options: any) => options.name}
			renderOption={(option: any) => (
				<React.Fragment>
					DPID: {option.dpid}, Name: {option.name}
				</React.Fragment>
			)}
			renderInput={(params) => (
				<CustomTextField
					label={props.label}
					// style={{
					// 	paddingBottom: '20px',
					// 	width: '100%',
					// }}
					{...params}
					// InputProps={{
					// 	style: {
					// 		borderRadius: '16px',
					// 	},
					// }}
					variant='outlined'
					fullWidth
				/>
			)}
		/>
	);
};
export default CustomAutoComplete;
