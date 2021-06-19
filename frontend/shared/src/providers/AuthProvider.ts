import { useMutation } from 'react-query';
import axios from 'axios';
import { APIURL } from '../utils/Utils';
import { AuthModel } from '../types/AuthTypes';

export const AuthProvider = () =>
  useMutation((data: AuthModel) => {
    return axios.post(`${APIURL}/api/users/login`, data);
  });
