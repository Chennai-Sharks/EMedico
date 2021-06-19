import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { credentialStore } from '../../stores/CredentialStore';
import { APIURL } from '../../utils/Utils';


export const GetDashboardData = () => {
  const docId = credentialStore((state) => state.docId);
  const jwt = credentialStore((state) => state.token);

  return useQuery<AxiosResponse<any>, AxiosError>(
    `get Dashboard details ${docId}`,
    () =>
      axios.get(`${APIURL}/api/fungus/get/dashboard`, {
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