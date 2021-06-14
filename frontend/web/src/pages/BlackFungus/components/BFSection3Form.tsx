import React from "react";

import { section3FormModel, BFFormInitialValues } from "@emedico/shared";
import { getIn, useFormikContext } from "formik";
import CustomCard from "../../../widgets/CustomCard/CustomCard";
import { formStyles } from "./BFSection1FormStyles";
import { Typography, Divider, Grid } from "@material-ui/core";
import CustomRadio from "../../../widgets/CustomRadio/CustomRadio";
import CustomTextField from "../../../widgets/CustomTextField/CustomTextField";
import CustomCheckBox from "../../../widgets/CustomCheckBox/CustomCheckBox"

interface BFSection3FormProps {}

const BFSection3Form: React.FC<BFSection3FormProps> = () => {
	const classes = formStyles();

	const { errors } = useFormikContext<typeof BFFormInitialValues>();

	return (
		<CustomCard
			customStyle={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Typography className={classes.title} variant="h5">
				Section 3
			</Typography>

			<Divider/>

			<Grid container className = {classes.layout}>
				{section3FormModel.map((item,index) => {
					if(item.type === 'title') {
						return (
							<Grid item xs = {12} className = {classes.formTitle} key = {index}>								
								{index !== 0 && <Divider style={{ marginTop: '20px' }} />}
								<Typography 
									className = {classes.title}
									style={{
										textAlign: 'center',
									}}
									variant='h5'
								>
									{item.label}
								</Typography>
								<Divider/>
							</Grid>
						)
					} else if(item.type === 'radio'){
						return (
							<Grid item xs = {12} sm = {6} key = {index}>
								<CustomRadio
									name = {item.name}
									label = {item.label}
									items = {item.props}
									error = {!!getIn(errors.section3, item.name)}									
								/>								
							</Grid>
						)
					 } else if(item.type === 'textfield') {
						return (
							<Grid item xs = {12} sm = {6} key = {index}>
								<CustomTextField
									name = {item.name}
									padding={classes.textFieldPadding}
									label = {item.label}
									error = {!!getIn(errors.section3, item.name)}
									helperText = {getIn(errors.section3, item.name)}
								/>
							</Grid>
						)
					}
					//  else if(item.type === 'checkbox') {
					// 	return (
					// 		<Grid item xs = {12} sm = {6}  key = {index}>
					// 			<CustomCheckBox 
					// 				name = {item.name}
					// 				label = {item.label}
					// 				items = {item.props}
					// 			/>
					// 		</Grid>
					// 	)
					// }
				})}
			</Grid>
		</CustomCard>
	);
};
export default BFSection3Form;
