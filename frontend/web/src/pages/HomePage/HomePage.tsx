import React from 'react';
import CustomDrawer from 'widgets/CustomNavBar/CustomNavBar';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<>
			<CustomDrawer pageName='Dashboard' />
		</>
	);
};
export default HomePage;
