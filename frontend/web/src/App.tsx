import { Router } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { withStyles } from '@material-ui/core';
import { renderRoutes } from 'react-router-config';
import { scrollBarStyle } from 'utils/ScrollBarStyle';

import routes from 'routes/Routes';
import './App.css';

const history = createBrowserHistory();

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
    <div className='App'>
      <Router history={history}>
        <ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
      </Router>
    </div>
  );
}

export default withStyles(scrollBarStyle)(App);
