import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import { GetBFAllPatients, GetBFSection1Data } from '@emedico/shared';
import CustomAutoComplete from 'widgets/CustomAutoComplete/CustomAutoComplete';
import { LinearProgress, makeStyles } from '@material-ui/core';
import { useState } from 'react';

interface BFSection1GetProps {}
	
const BFSection1Get: React.FC<BFSection1GetProps> = () => {
	console.log('hello');
	const classes = useStyles();
	const [patientMongoId, setPatientMongoId] = useState('');

	const allPatients = GetBFAllPatients();

	const { data, isLoading, isError, error, refetch } =
		GetBFSection1Data(patientMongoId);

	// if (!allPatients.isLoading) {
	// 	console.log(allPatients.data?.data);
	// 	console.log(allPatients.error?.message);
	// }
	if (!isLoading) {
		console.log(data?.data);
		console.log(error?.name);
	}
	// Performance improvements to be made for GetBFAllPatients. Change react
	// Query config afterwards.

	return (
		<CustomNavBar pageName='Black Fungus - View Details of Patient'>
			{allPatients.isLoading && <LinearProgress />}

			{!allPatients.isLoading && !allPatients.isError && (
				<div className={classes.content}>
					<CustomAutoComplete
						label='Enter Patient name'
						data={allPatients.data?.data}
						onChange={(_: any, value: any) => {
							console.log(value);
							setPatientMongoId(value._id);
							refetch();
						}}
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
}));

export default BFSection1Get;
