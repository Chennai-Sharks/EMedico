import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { doctorIdStore } from '../../stores/DoctorIdStore';
import { covidScreeningTest, mucormycosisSymptoms } from '../../utils/Utils';

export const BFSection1BeforeFormSubmit = (data: Record<string, any>) => {
	let covid: Record<string, string> = {};
	let mucormycosis: Record<string, string> = {};
 
	covidScreeningTest.forEach((item) => {
		covid[item] = data[item];
		delete data[item];
	});
	data['covidScreeningTest'] = covid;

	mucormycosisSymptoms.forEach((item) => {
		mucormycosis[item] = data[item];
		delete data[item];
	});

	data['mucormycosisSymptoms'] = mucormycosis;
	return data;
};

export const AddPatientProvider = () => {
	const docId = doctorIdStore((state) => state.docId);
	return useMutation((data: Record<string, any>) =>
		axios.post(`http://localhost:4000/api/fungus/post/addPatient/${docId}`, {
			...data,
		})
	);
};

export const AddBFSection1FormProvider = () => {
	return useMutation((data: Record<string, any>) =>
		axios.post(
			`http://localhost:4000/api/fungus/post/section1/${data.mongoId}`,
			{
				...data.data,
			}
		) 
	);
};

export const GetBFSection1FormProvider = () => {
	const docId = doctorIdStore((state) => state.docId);
	return useQuery('getData', () => 
		axios.get(
			`http://localhost:4000/api/fungus/get/getPatients/${docId}`
		)
	);	
};