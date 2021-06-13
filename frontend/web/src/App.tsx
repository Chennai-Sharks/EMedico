import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AuthPage from 'pages/AuthPage/AuthPage';
import { LinearProgress, withStyles } from '@material-ui/core';

import { scrollBarStyle } from './ScrollBarStyle';

import './App.css';
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

function App() {
	const theme = createMuiTheme({
		typography: {
			fontFamily: [
				'Segoe UI',
				'Oxygen',
				'"Helvetica Neue"',
				'Roboto',
				'sans-serif',
			].join(','),
		},
	});
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<Switch>
						<Redirect path='/' exact to='/auth' />
						<Route path='/auth' exact component={AuthPage} />
						<CustomNavBar>
							<React.Suspense fallback={<LinearProgress />}>
								<Route
									path='/home'
									exact
									component={lazy(() => import('./pages/HomePage/HomePage'))}
								/>
								<Route
									path='/black-fungus/add-patient'
									exact
									component={lazy(
										() => import('./pages/BlackFungus/BFSectionCreate')
									)}
								/>
								<Route
									path='/black-fungus/get-patient'
									exact
									component={lazy(
										() => import('./pages/BlackFungus/BFSection1Get')
									)}
								/>
								<Route
									path='/black-fungus/delete-patient'
									exact
									component={lazy(
										() => import('./pages/BlackFungus/BFSection1Delete')
									)}
								/>
								{/* <Route
									path='/black-fungus/update-patient'
									exact
									component={lazy(
										() => import('./pages/BlackFungus/BFSection1Update')
									)}
								/> */}
							</React.Suspense>
						</CustomNavBar>
					</Switch>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default withStyles(scrollBarStyle)(App);
// export default App;
