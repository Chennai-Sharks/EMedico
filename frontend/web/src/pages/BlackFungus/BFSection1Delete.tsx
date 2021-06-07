import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import {
	GetBFAllPatients,
	GetBFSection1Data,
	BFSection1DataTransformation,
	DeleteBFSection1Data,
} from '@emedico/shared';
import CustomAutoComplete from 'widgets/CustomAutoComplete/CustomAutoComplete';
import {
	Divider,
	GridList,
	// GridListTile,
	LinearProgress,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomButton from 'widgets/CustomButton/CustomButton';

interface BFSection1GetProps {}

const BFSection1Delete: React.FC<BFSection1GetProps> = () => {
	console.log('hello');
	const classes = useStyles();
	const [patientMongoId, setPatientMongoId] = useState('');
	const deletePatient = DeleteBFSection1Data();

	const allPatients = GetBFAllPatients();
	const { data, isLoading, isError, refetch } =
		GetBFSection1Data(patientMongoId);

	// if (!allPatients.isLoading) {
	// 	console.log(allPatients.data?.data);
	// 	console.log(allPatients.error?.message);
	// }
	// if (!isLoading) {
	// 	console.log(isError);
	// 	console.log(BFSection1DataTransformation(data?.data));
	// }

	// Performance improvements to be made in Object.keys() thing.

	return (
		<CustomNavBar pageName='Black Fungus - View Details of Patient'>
			{allPatients.isLoading && <LinearProgress />}

			{!allPatients.isLoading && !allPatients.isError && (
				<div className={classes.content}>
					<CustomAutoComplete
						label='Enter Patient name'
						data={allPatients.data?.data}
						onChange={(_: any, value: any) => {
							console.log('value' + value);
							if (value) {
								setPatientMongoId(value._id);
								refetch();
							} else {
								setPatientMongoId('');
							}
						}}
					/>
					{patientMongoId && (
						<CustomCard
							customStyle={{
								marginTop: '15px',
							}}
						>
							<Typography className={classes.title} variant='h5'>
								Patient Data
							</Typography>
							<Divider />
							<GridList cellHeight='auto' spacing={2} style={{ width: '100%' }}>
								{!isLoading &&
									!isError &&
									Object.keys(BFSection1DataTransformation(data?.data)).map(
										(item, index) => {
											console.log(item);
											const newData = BFSection1DataTransformation(data?.data);
											return (
												<div
													style={{
														width: '50%',
														display: 'flex',
														flexDirection: 'row',
														alignItems: 'center',
													}}
													key={index}
												>
													<Typography className={classes.title} style={{}}>
														{item}:
													</Typography>
													<Typography>{newData[item]}</Typography>
												</div>
											);
										}
									)}
							</GridList>
						</CustomCard>
					)}
					<CustomButton
						onClick={async () => {
							try {
								const response = await deletePatient.mutateAsync({
									mongoid: patientMongoId,
								});
								
								console.log(response);
							} catch (error) {
								console.log(error);
							}
						}}
						children={'Delete Patient'}
					/>
				</div>
			)}
		</CustomNavBar>
	);
};

const useStyles = makeStyles((theme) => ({
	content: {
		paddingTop: theme.spacing(3),
	},
	title: {
		margin: '20px 20px',
		fontSize: '1.5 rem',
		fontWeight: 'bold',
	},
}));

export default BFSection1Delete;
