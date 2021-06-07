export const hello = () => {
	return 'This is coming from shared folder noice right!!';
};

export * from './types/AuthTypes';
export * from './types/Section1Types';

export * from './stores/DoctorIdStore';
export * from './stores/getPatientStore';
export * from './stores/SnackbarStore';

export * from './schema/BlackFungus/Section1';

export * from './providers/AuthProvider';
export * from './providers/BlackFungus/BFSection1Provider';
