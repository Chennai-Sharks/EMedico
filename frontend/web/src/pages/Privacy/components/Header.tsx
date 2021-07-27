import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

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
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography
          variant='h6'
          className={classes.home}
          onClick={() => {
            router.push('/home');
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
