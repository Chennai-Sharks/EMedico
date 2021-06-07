import { useMutation } from 'react-query';
import axios from 'axios';
import { APIURL } from '../utils/Utils';
import { AuthSignInModel, AuthSignUpModel } from '../types/AuthTypes';

export const LoginProvider = () =>
	useMutation((data: AuthSignInModel) => {
		return axios.post(`${APIURL}/api/users/login`, { ...data });
	});

export const LogUpProvider = () =>
	useMutation((data: AuthSignUpModel) => {
		return axios.post(`${APIURL}/api/users/register`, { ...data });
	});
