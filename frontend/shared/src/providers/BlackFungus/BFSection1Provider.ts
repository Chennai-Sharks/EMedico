import axios, { AxiosResponse } from 'axios';
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

export const GetBFAllPatients = () => {
	const docId = doctorIdStore((state) => state.docId);
	return useQuery<AxiosResponse<any>, Error>(
		`get All Patients for ${docId}`,
		() => axios.get(`http://localhost:4000/api/fungus/get/getPatients/${docId}`)
	);
};

export const GetBFSection1Data = (patientId: string) => {
	console.log(patientId);
	return useQuery<AxiosResponse<any>, Error>(
		`get All section 1 BF data`,
		() =>
			axios.get(`http://localhost:4000/api/fungus/get/section1/${patientId}`),
		{
			enabled: false,
			refetchOnWindowFocus: false,
			staleTime: 1200000,
			retry: false,
		}
	);
};
