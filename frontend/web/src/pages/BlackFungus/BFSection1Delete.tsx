import {
	GetBFAllPatients,
	GetBFSection1Data,
	BFSection1DataTransformation,
	DeleteBFSection1Data,
	snackBarStore,
} from '@emedico/shared';
import CustomAutoComplete from 'widgets/CustomAutoComplete/CustomAutoComplete';
import {
	CircularProgress,
	Divider,
	GridList,
	LinearProgress,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import CustomCard from 'widgets/CustomCard/CustomCard';
import CustomButton from 'widgets/CustomButton/CustomButton';
import CustomSnackBar from 'widgets/CustomSnackBar/CustomSnackBar';
import CustomDialog from 'widgets/CustomDialog/CustomDialog';
import { toHeaderCase } from 'js-convert-case';

interface BFSection1GetProps {}

const BFSection1Delete: React.FC<BFSection1GetProps> = () => {
	console.log('hello');
	const classes = useStyles();
	const [patientMongoId, setPatientMongoId] = useState('');
	const deletePatient = DeleteBFSection1Data();

	const allPatients = GetBFAllPatients();
	const { data, isLoading, isError, refetch } =
		GetBFSection1Data(patientMongoId);

	const snackBar = snackBarStore((state) => state);

	const [loading, setLoading] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);

	// Performance improvements to be made in Object.keys() thing.

	return (
		<>
			{allPatients.isLoading && <LinearProgress />}
			{allPatients.isError && (
				<Typography style={{ marginTop: '40%', marginLeft: '40%' }}>
					No Patients there
				</Typography>
			)}

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
								marginBottom: '30px',

								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
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
														{toHeaderCase(item)}:
													</Typography>
													{
														/// Post covid symptoms is array, so this the hack to bring
														/// - if array is empty.
														toHeaderCase(item) === 'Post Covid Symptoms' ? (
															(newData[item] as string[]).length > 0 ? (
																(newData[item] as string[]).map(
																	(item, index) => (
																		<Typography key={index}>
																			{item ? `${item},` : '-'}
																		</Typography>
																	)
																)
															) : (
																<Typography> - </Typography>
															)
														) : (
															<Typography>
																{newData[item] ? newData[item] : '-'}
															</Typography>
														)
													}
												</div>
											);
										}
									)}
							</GridList>
							<Divider />
							<CustomButton
								customStyle={{
									marginLeft: '30%',
									marginRight: '30%',
									marginBottom: '20px',
								}}
								disabled={loading}
								onClick={async () => {
									// setLoading(true);
									try {
										await deletePatient.mutateAsync({
											mongoid: patientMongoId,
										});
										setPatientMongoId('');

										setLoading(false);
										setOpenDialog(true);
									} catch (error: any) {
										setLoading(false);
										console.log(error.response.data);
										snackBar.setmessage('Some error with delete');
										snackBar.setOpen(true);
									}
								}}
							>
								{loading ? <CircularProgress /> : 'Delete patient'}
							</CustomButton>
						</CustomCard>
					)}
				</div>
			)}
			<CustomDialog
				open={openDialog}
				notOkButtonText={undefined}
				okButtonText='Okay'
				onOkHandled={() => {
					setOpenDialog(false);
					setPatientMongoId('');
					window.location.reload();
				}}
				title='Success'
				content='Patient Details are delete successfully.'
				onClose={() => {}}
			/>
			<CustomSnackBar
				open={snackBar.open}
				handleClose={() => snackBar.setOpen(false)}
				message={snackBar.message}
				severity='error'
			/>
		</>
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
