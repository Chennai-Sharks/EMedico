import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { credentialStore } from '../../stores/CredentialStore';
import { APIURL } from '../../utils/Utils';

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
  // const docId = credentialStore((state) => state.docId);
  const jwt = credentialStore((state) => state.token);
  return useMutation((data: Record<string, any>) =>
    axios.post(
      `${APIURL}/api/fungus/post/addPatient`,
      {
        ...data,
      },
      {
        headers: {
          auth_Token: jwt,
        },
      }
    )
  );
};
export const AddBFPatientSectionData = () => {
  const jwt = credentialStore((state) => state.token);

  return useMutation((data: Record<string, any>) =>
    axios.post(
      `${APIURL}/api/fungus/post/section/${data.mongoId}`,
      {
        ...data.data,
      },
      {
        headers: {
          auth_Token: jwt,
        },
      }
    )
  );
};

export const GetBFAllPatients = () => {
  const docId = credentialStore((state) => state.docId);
  const jwt = credentialStore((state) => state.token);

  return useQuery<AxiosResponse<any>, AxiosError>(
    `get All Patients for ${docId}`,
    () =>
      axios.get(`${APIURL}/api/fungus/get/getPatients`, {
        headers: {
          auth_Token: jwt,
        },
      }),
    {
      staleTime: 120000,
      refetchOnWindowFocus: false,
    }
  );
};

export const GetBFSection1Data = (patientId: string) => {
  const jwt = credentialStore((state) => state.token);

  return useQuery<AxiosResponse<any>, AxiosError>(
    [`get All section 1 BF data`, patientId],
    () =>
      axios.get(`${APIURL}/api/fungus/get/section1/${patientId}`, {
        headers: {
          auth_Token: jwt,
        },
      }),
    {
      enabled: !!patientId,
      refetchOnWindowFocus: false,
      staleTime: 1200000,
    }
  );
};

export const GetBFSection2Data = (patientId: string) => {
  const jwt = credentialStore((state) => state.token);

  return useQuery<AxiosResponse<any>, AxiosError>(
    [`get All section 2 BF data`, patientId],
    () =>
      axios.get(`${APIURL}/api/fungus/get/section2/${patientId}`, {
        headers: {
          auth_Token: jwt,
        },
      }),
    {
      enabled: !!patientId,
      refetchOnWindowFocus: false,
      staleTime: 1200000,
    }
  );
};

export const GetBFSection3Data = (patientId: string) => {
  const jwt = credentialStore((state) => state.token);

  return useQuery<AxiosResponse<any>, AxiosError>(
    [`get All section 3 BF data`, patientId],
    () =>
      axios.get(`${APIURL}/api/fungus/get/section3/${patientId}`, {
        headers: {
          auth_Token: jwt,
        },
      }),
    {
      enabled: !!patientId,
      refetchOnWindowFocus: false,
      staleTime: 1200000,
    }
  );
};

export const DeleteBFSection1Data = () => {
  const docId = credentialStore((state) => state.docId);
  const jwt = credentialStore((state) => state.token);
  return useMutation((data: Record<string, any>) => {
    console.log(data);
    return axios.delete(
      `${APIURL}/api/fungus/delete/patient/${docId}/${data.mongoid}`,
      {
        headers: {
          auth_Token: jwt,
        },
      }
    );
  });
};

// export const UpdateBFSection1Data = () => {
// 	const docId = credentialStore((state) => state.docId);
// 	return useMutation((data: Record<string, any>) =>
// 		axios.patch(
// 			`${APIURL}/api/fungus/patch/section1/${docId}/${data.mongoId}`,
// 			{
// 				...data.data,
// 			}
// 		)
// 	);
// };
