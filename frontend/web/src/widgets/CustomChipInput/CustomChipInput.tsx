import { Field, FieldArray } from 'formik';
import ChipInput from 'material-ui-chip-input';

import React from 'react';

type CustomChipInputProps = any;

const CustomChipInput: React.FC<CustomChipInputProps> = (props) => {
	return (
		<FieldArray
                  name={props.name}
                  render={arrayHelpers => (
                    
                      <Field
					//   delayBeforeAdd
                        name={props.name}
                        component={() => (
                          <ChipInput
						  blurBehavior="add"
                            label={props.label}
							InputProps={{
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
                          
                            value={props.value}
							onChange={()=>{
								console.log('hello')
							}}
                            
                           
                            onAdd={chip =>arrayHelpers.push(chip)}
                            onDelete={chip => arrayHelpers.remove(chip)}
                            fullWidth
                          />
                        )}
                      />
                  )}
                />
		// <Field
		// 	name={props.name}
		// 	InputProps={{
		// 		style: {
		// 			borderRadius: '16px',
		// 		},
		// 	}}
		// 	style={{
		// 		paddingBottom: '20px',
		// 		marginTop: '30px',
		// 		width: '100%',
		// 	}}
		// 	variant='outlined'
		// 	placeholder='Press Enter after typing to add'
		// 	className={props.padding}
		// 	component={ChipInput}
		// />
	);
};
export default CustomChipInput;
