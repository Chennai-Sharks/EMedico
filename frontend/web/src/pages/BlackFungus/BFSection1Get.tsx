import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import { GetBFSection1Provider } from '@emedico/shared';

interface BFSection1GetProps {}

const BFSection1Get: React.FC<BFSection1GetProps> = () => {
	const { data, error, isError, isLoading } = GetBFSection1Provider();

	if (!isLoading) {
		console.log(data);
		console.log(error);
	}
	return (
		<div>
			<CustomNavBar pageName='Black Fungus - View Details of Patient' />
		</div>
	);
};

export default BFSection1Get;
