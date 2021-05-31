import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AuthPage from 'pages/AuthPage/AuthPage';

import './App.css';
import HomePage from 'pages/HomePage/HomePage';
import Form from 'pages/Form/Form';

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
						<Route path='/form' exact component={Form} />
						<Redirect to='/auth' path='/' />
					</Switch>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
