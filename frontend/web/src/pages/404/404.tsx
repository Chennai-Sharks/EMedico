import {
  Button,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckAuthState } from 'utils/CheckAuthState';
import Error404 from '../../assets/404.svg';

interface PageNotFoundProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  imageContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    marginLeft: theme.spacing(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 400,
    height: 'auto',
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const PageNotFound: React.FC<PageNotFoundProps> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isAuth = CheckAuthState();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <div className={classes.root}>
        <Typography align='center' variant={mobileDevice ? 'h6' : 'h4'}>
          404: The page you are looking for isn’t here
        </Typography>
        <Typography
          align='center'
          style={{ paddingTop: '20px' }}
          variant='subtitle1'
        >
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
        <div className={classes.imageContainer}>
          <img src={Error404} alt='404' className={classes.image} />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            color='primary'
            component={Link}
            to={isAuth ? '/home' : '/auth'}
            variant='outlined'
          >
            Back to home
          </Button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
