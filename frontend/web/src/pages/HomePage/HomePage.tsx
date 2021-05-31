import React from 'react';
import CustomDrawer from 'widgets/CustomDrawer/CustomDrawer';
import Form from '../Form/Form'

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<>
			<CustomDrawer />
			<Form />
		</>
	);
};
export default HomePage;