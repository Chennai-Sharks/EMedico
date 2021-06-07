import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AuthPage from 'pages/AuthPage/AuthPage';
import { withStyles } from '@material-ui/core';

import { scrollBarStyle } from './ScrollBarStyle';

import HomePage from 'pages/HomePage/HomePage';
import BFSection1Create from 'pages/BlackFungus/BFSectionCreate';
import BFSection1Get from 'pages/BlackFungus/BFSection1Get';
import BFSection1Delete from 'pages/BlackFungus/BFSection1Delete';
import BFSection1Update from 'pages/BlackFungus/BFSection1Update';

import './App.css';

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
						<Route path='/auth' exact component={AuthPage} />
						<Route path='/home' exact component={HomePage} />
						<Route
							path='/black-fungus/add-patient'
							exact
							component={BFSection1Create}
						/>
						<Route
							path='/black-fungus/get-patient'
							exact
							component={BFSection1Get}
						/>
						<Route
							path='/black-fungus/delete-patient'
							exact
							component={BFSection1Delete}
						/>
						<Route
							path='/black-fungus/update-patient'
							exact
							component={BFSection1Update}
						/>
						<Redirect path='/' to='/auth' />
					</Switch>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default withStyles(scrollBarStyle)(App);
// export default App;
