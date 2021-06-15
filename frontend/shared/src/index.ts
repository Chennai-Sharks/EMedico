export const hello = () => {
	return 'This is coming from shared folder noice right!!';
};
import { QueryClient, QueryClientProvider } from 'react-query';

export * from './types/AuthTypes';

export * from './model/BF/Section1FormModel';
export * from './model/BF/Section2FormModel';
export * from './model/BF/Section3FormModel';

export { QueryClient, QueryClientProvider };

export * from './stores/CredentialStore';
export * from './stores/getPatientStore';
export * from './stores/SnackbarStore';
export * from './stores/DoctorDetailsStore';

export * from './schema/BlackFungus/FormInitialValues';

export * from './providers/AuthProvider';
export * from './providers/BlackFungus/BFSection1Provider';
