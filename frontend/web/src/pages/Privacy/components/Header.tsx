import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { CheckAuthState } from 'utils/CheckAuthState';

interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  home: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  const router = useHistory();
  const isAuth = CheckAuthState();

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography
          variant='h6'
          className={classes.home}
          onClick={() => {
            isAuth ? router.push('/home') : router.push('/auth');
          }}
        >
          Maxillo
        </Typography>
        <div className={classes.flexGrow} />

        <Typography variant='h6' style={{ marginRight: '40px' }}>
          Privacy Policy
        </Typography>
        <div className={classes.flexGrow} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
