import React from 'react';

import {
  AppBar,
  Box,
  Button,
  LinearProgress,
  makeStyles,
  Hidden,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-scroll';
interface CustomAppBarProps {}

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props: any) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const CustomAppBar: React.FC<CustomAppBarProps> = () => {
  const [scrollPos, setScrollPos] = React.useState(0);
  const classes = useStyles();

  React.useEffect(() => {
    let computeProgress = () => {
      const scrolled = document.documentElement.scrollTop;
      const scrollLength =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = `${(100 * scrolled) / scrollLength}`;

      setScrollPos(parseInt(progress));
    };

    window.addEventListener('scroll', computeProgress);

    return () => window.removeEventListener('scroll', computeProgress);
  }, []);

  return (
    <ElevationScroll>
      <AppBar position='sticky' style={{ backgroundColor: '#fbfbfb' }}>
        <LinearProgress
          style={{
            width: '100%',
            height: '6px',
            position: 'sticky',
            backgroundColor: 'white',
          }}
          variant='determinate'
          value={scrollPos}
        />
        <Box m={0.3} width={'100%'} />
        <Toolbar
          style={{
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <Image src='/logo.svg' alt='Logo' height={35} width={35} />

          <Typography
            variant='h4'
            style={{ fontWeight: 'bold', marginLeft: '10px', color: 'black' }}
          >
            Maxillo
          </Typography>
          <div className={classes.grow} />
          <Hidden implementation='css' xsDown>
            <Button
              onClick={() => {
                window.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Typography
                variant='subtitle1'
                style={{ fontWeight: 'bold' }}
                color='inherit'
              >
                Home
              </Typography>
            </Button>

            <Link to='section1' smooth={true} offset={250} duration={500}>
              <Button>
                <Typography
                  variant='subtitle1'
                  style={{ fontWeight: 'bold' }}
                  color='inherit'
                >
                  Features
                </Typography>
              </Button>
            </Link>
            <Link to='section2' smooth={true} duration={500}>
              <Button>
                <Typography
                  variant='subtitle1'
                  style={{ fontWeight: 'bold' }}
                  color='inherit'
                >
                  DashBoard
                </Typography>
              </Button>
            </Link>
            <Link
              to='footer'
              spy={true}
              smooth={true}
              offset={250}
              duration={500}
            >
              <Button>
                <Typography
                  variant='subtitle1'
                  style={{ fontWeight: 'bold' }}
                  color='inherit'
                >
                  About
                </Typography>
              </Button>
            </Link>

            <a
              style={{ minWidth: '80px', marginLeft: '10px' }}
              href='https://www.maxillo.in/auth'
              target='_blank'
              rel='noreferrer'
            >
              <Button variant='contained' color='primary'>
                Login
              </Button>
            </a>
          </Hidden>
        </Toolbar>

        <Box m={0.3} width={'100%'} />
      </AppBar>
    </ElevationScroll>
  );
};
export default CustomAppBar;
