import React from "react";

import { section3FormModel, BFFormInitialValues } from "@emedico/shared";
import { getIn, useFormikContext } from "formik";
import CustomCard from "../../../widgets/CustomCard/CustomCard";
import { formStyles } from "./BFSection1FormStyles";
import { Typography, Divider, Grid } from "@material-ui/core";
import CustomRadio from "../../../widgets/CustomRadio/CustomRadio";
import CustomTextField from "../../../widgets/CustomTextField/CustomTextField";

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
									name = {`section3.${item.name}`}
									label = {item.name}
									items = {item.props}
									error = {!!getIn(errors.section3, item.name)}
								/>								
							</Grid>
						)
					} else if(item.type === 'textfield') {
						return (
							<Grid item xs = {12} sm = {6} key = {index}>
								<CustomTextField
									name = {`section3.${item.name}`}
									padding={classes.textFieldPadding}
									label = "Name"
									error = {!!getIn(errors.section3, item.name)}
									helperText = {getIn(errors.section3, item.name)}
								/>
							</Grid>
						)
					}
				})}
			</Grid>
		</CustomCard>
	);
};
export default BFSection3Form;
