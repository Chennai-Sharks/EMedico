export const hello = () => {
	return 'This is coming from shared folder noice right!!';
};

export * from './types/AuthTypes';

export * from './stores/CredentialStore';
export * from './stores/getPatientStore';
export * from './stores/SnackbarStore';
export * from './stores/DoctorDetailsStore';

export * from './schema/BlackFungus/Section1';

export * from './providers/AuthProvider';
export * from './providers/BlackFungus/BFSection1Provider';
