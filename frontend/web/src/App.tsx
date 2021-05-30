// import { hello } from '@emedico/shared';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AuthPage from 'pages/AuthPage/AuthPage';

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
		<ThemeProvider theme={theme}>
			<div className='App'>
				<AuthPage />
			</div>
		</ThemeProvider>
	);
}

export default App;
