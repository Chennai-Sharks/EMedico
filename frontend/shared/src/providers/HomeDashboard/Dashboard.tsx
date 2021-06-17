import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { credentialStore } from '../../stores/CredentialStore';
import { APIURL } from '../../utils/Utils';


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






