import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { credentialStore } from '../../stores/CredentialStore';
import { APIURL } from '../../utils/Utils';

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
          'auth-token': jwt,
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
          'auth-token': jwt,
        },
      }
    )
  );
};

export const AddSection4PatientData = () => {
  const jwt = credentialStore((state) => state.token);

  return useMutation((data: Record<string, any>) =>
    axios.post(
      `${APIURL}/api/fungus/post/section4/${data.mongoId}`,
      {
        surgicalPlan: data.surgicalPlan,
      },
      {
        headers: {
          'auth-token': jwt,
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
          'auth-token': jwt,
        },
      }),
    {
      staleTime: 120000,
      refetchOnWindowFocus: false,
      retry: 1,
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
          'auth-token': jwt,
        },
      }),
    {
      enabled: !!patientId,
      refetchOnWindowFocus: false,
      staleTime: 1200000,
      retry: 1,
    }
  );
};

export const GetBFSection4Data = (patientId: string) => {
  const jwt = credentialStore((state) => state.token);

  return useQuery<AxiosResponse<any>, AxiosError>(
    [`get All section 4 BF data`, patientId],
    () =>
      axios.get(`${APIURL}/api/fungus/get/section4/${patientId}`, {
        headers: {
          'auth-token': jwt,
        },
      }),
    {
      enabled: !!patientId,
      refetchOnWindowFocus: false,
      staleTime: 1200000,
      retry: 1,
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
          'auth-token': jwt,
        },
      }),
    {
      enabled: !!patientId,
      refetchOnWindowFocus: false,
      staleTime: 1200000,
      retry: 1,
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
          'auth-token': jwt,
        },
      }),
    {
      enabled: !!patientId,
      refetchOnWindowFocus: false,
      staleTime: 1200000,
      retry: 1,
    }
  );
};

export const DeleteBFSection1Data = () => {
  const docId = credentialStore((state) => state.docId);
  const jwt = credentialStore((state) => state.token);
  return useMutation((data: Record<string, any>) => {
    return axios.delete(
      `${APIURL}/api/fungus/delete/patient/${docId}/${data.mongoid}`,
      {
        headers: {
          'auth-token': jwt,
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
