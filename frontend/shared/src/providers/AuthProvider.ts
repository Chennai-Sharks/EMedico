import { useMutation } from 'react-query';
import axios from 'axios';
import { AuthSignInModel, AuthSignUpModel } from '../types/AuthTypes';

//fix this
export const LoginProvider = (data: AuthSignInModel) =>
	useMutation(() => {
		return axios.post('http://localhost:4000/api/users/login', { ...data });
	});

export const LogUpProvider = useMutation((data: AuthSignUpModel) => {
	return axios.post('http://localhost:4000/api/users/register', { ...data });
});
