import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AuthPage from 'pages/AuthPage/AuthPage';

import './App.css';
import HomePage from 'pages/HomePage/HomePage';
import BFSection1Form from 'pages/BlackFungus/BFSection1Form';
import BFSection1FormGet from 'pages/BlackFungus/BFSection1FormGet';


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
							component={BFSection1Form}
						/>
						<Route 
							path = '/black-fungus/get-patient'
							exact 
							component = {BFSection1FormGet}
						/>
						<Redirect path='/' to='/auth' />
					</Switch>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
