import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { credentialStore } from '../../stores/CredentialStore';
import {
	APIURL,
	covidScreeningTest,
	mucormycosisSymptoms,
	predisposingFactors,
} from '../../utils/Utils';

// This is used to change the data from form schema that niki did to server schema.
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

// This is used to change the data from server to form schema that niki did.
export const BFSection1DataTransformation = (data: Record<string, any>) => {
	let oldData = { ...data };
	let covidScreeningTest: {} = {
		...oldData['covidScreeningTest'],
	};

	delete oldData['covidScreeningTest'];
	let mucormycosisSymptoms: {} = {
		...oldData['mucormycosisSymptoms'],
	};

	delete oldData['mucormycosisSymptoms'];

	let newData: Record<string, any> = {
		...oldData,
		...covidScreeningTest,
		...mucormycosisSymptoms,
	};
	console.log('newdata');
	delete newData['__v'];
	delete newData['date'];

	delete newData['_id'];
	delete newData['mongoid'];

	return newData;
};

export const AddPatientProvider = () => {
	const docId = credentialStore((state) => state.docId);
	return useMutation((data: Record<string, any>) =>
		axios.post(`${APIURL}/api/fungus/post/addPatient/${docId}`, {
			...data,
		})
	);
};

export const AddBFSection1FormProvider = () => {
	return useMutation((data: Record<string, any>) =>
		axios.post(`${APIURL}/api/fungus/post/section1/${data.mongoId}`, {
			...data.data,
		})
	);
};

export const GetBFAllPatients = () => {
	const docId = credentialStore((state) => state.docId);
	return useQuery<AxiosResponse<any>, AxiosError>(
		`get All Patients for ${docId}`,
		() => axios.get(`${APIURL}/api/fungus/get/getPatients/${docId}`),
		{
			staleTime: 120000,
			refetchOnWindowFocus: false,
		}
	);
};

export const GetBFSection1Data = (patientId: string) => {
	return useQuery<AxiosResponse<any>, AxiosError>(
		[`get All section 1 BF data`, patientId],
		() => axios.get(`${APIURL}/api/fungus/get/section1/${patientId}`),
		{
			enabled: !!patientId,
			refetchOnWindowFocus: false,
			staleTime: 1200000,
		}
	);
};

export const DeleteBFSection1Data = () => {
	const docId = credentialStore((state) => state.docId);
	return useMutation((data: Record<string, any>) => {
		console.log(data);
		return axios.delete(
			`${APIURL}/api/fungus/delete/patient/${docId}/${data.mongoid}`
		);
	});
};

export const UpdateBFSection1Data = () => {
	const docId = credentialStore((state) => state.docId);
	return useMutation((data: Record<string, any>) =>
		axios.patch(
			`${APIURL}/api/fungus/patch/section1/${docId}/${data.mongoId}`,
			{
				...data.data,
			}
		)
	);
};
