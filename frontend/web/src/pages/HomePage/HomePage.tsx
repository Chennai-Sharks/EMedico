import React from 'react';

import { Typography } from '@material-ui/core';
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<>
			<Typography
				style={{
					marginTop: '50px',
				}}
			>
				This is the Demo Version of the Website. There will be a lot of changes
				before the release. You can see the different sections from the Nav bar
				in the left. Click on patients to do all operations like create, update,
				delete and see the patient details.
			</Typography>
		</>
	);
};
export default HomePage;
