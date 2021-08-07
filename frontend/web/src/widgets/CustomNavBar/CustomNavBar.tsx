import React, { Suspense } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  useMediaQuery,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import { LinearProgress } from '@material-ui/core';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import RemoveIcon from '@material-ui/icons/Remove';
// import EditIcon from '@material-ui/icons/Edit';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { Avatar, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { mapRoutesToTitle } from '../../constant/MapRoutesToTitle';
import { Signout } from '../../utils/Signout';
import { credentialStore, docDetailsStore } from '@emedico/shared';
import { renderRoutes } from 'react-router-config';
const drawerWidth = 240;

interface CustomNavBarProps {
  pageName?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `100%`,
        // marginLeft: drawerWidth,
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#5664D2',
      },
      backgroundColor: '#5664D2',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    flexGrow: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    imgLogo: {
      height: '25px',
      width: 'auto',
      marginLeft: theme.spacing(3),
    },
    logoutIcon: {
      marginRight: theme.spacing(1),
    },
    title: {
      marginTop: '10px',
      paddingLeft: theme.spacing(2),
      marginBottom: '10px',
    },
    profile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content',
      marginTop: '10px',
      [theme.breakpoints.up('md')]: {
        marginTop: '0px',
      },
    },
    avatar: {
      width: 60,
      height: 60,
      marginTop: theme.spacing(2),
    },
    name: {
      marginTop: theme.spacing(1),
    },
    marginTop: {
      marginTop: theme.spacing(2),
    },
    marginBottom: {
      marginBottom: theme.spacing(1),
    },
    navFontStyle: {
      'font-weight': '600',
    },
    addPrimaryColor: {
      color: '#5664D2',
    },
  })
);

const CustomNavBar: React.FC<CustomNavBarProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { route }: any = props;

  const router = useHistory();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const deleteCred = credentialStore((state) => state.deleteEverything);
  const docDetails = docDetailsStore((state) => state);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [openPatient, setOpenPatient] = React.useState(false);

  // const handleClickPatient = () => {
  //   setOpenPatient(!openPatient);
  // };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRouteChange = (path: string) => {
    router.push(path);
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {match && <div className={classes.toolbar} />}
      <div className={classes.profile}>
        <Avatar
          alt='Profile Pic'
          className={classes.avatar}
          src={docDetails.profileUrl}
        />
        <Typography className={classes.name} variant='h6'>
          {docDetails.name}
        </Typography>
        <Typography variant='body2'>{docDetails.email}</Typography>
      </div>
      <div className={classes.marginTop} />
      <Divider />
      <List>
        <ListItem button onClick={() => handleRouteChange('/home')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            // classes={{ primary: classes.navFontStyle }}
            primary='DashBoard'
          />
        </ListItem>
        <div className={classes.marginBottom} />

        <Divider />
        <Typography className={classes.title}>Mucormycosis</Typography>

        <List component='div' disablePadding>
          <ListItem
            button
            onClick={() => handleRouteChange('/mucormycosis/get-patient')}
          >
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary='Patient Detail' />
          </ListItem>
          <Divider />

          <ListItem
            button
            onClick={() => handleRouteChange('/mucormycosis/add-patient')}
          >
            <ListItemIcon>
              <AddCircleIcon className={classes.addPrimaryColor} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.navFontStyle }}
              primary='Add Patient'
            />
          </ListItem>
          <Divider />

          <ListItem
            button
            onClick={() =>
              handleRouteChange('/mucormycosis/surgical-management')
            }
          >
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary='Surgical Management' />
          </ListItem>
          {/* <ListItem
							button
							onClick={() => handleRouteChange('/mucormycosis/delete-patient')}
							className={classes.nested}
						>
							<ListItemIcon>
								<RemoveIcon />
							</ListItemIcon>
							<ListItemText primary='Remove Patient' />
						</ListItem> */}
        </List>
        {/* 
        <Collapse in={openPatient} timeout='auto' unmountOnExit>
         
        </Collapse> */}
      </List>

      <Divider />
      {/* <List>
        <ListItem>
          <Typography className={classes.title}>OFP</Typography>
          <ListItemText primary=', Coming Soon' />
        </ListItem>
      </List>
      <Divider /> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Maxillo
          </Typography>
          <div className={classes.flexGrow} />

          <Typography variant='h6' noWrap>
            {
              mapRoutesToTitle.find(
                (item) => item.route === router.location.pathname
              )?.title
            }
          </Typography>
          <div className={classes.flexGrow} />
          <Button
            color='inherit'
            onClick={() => Signout({ deleteCred, router })}
          >
            <ExitToAppIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden mdDown implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </div>
  );
};

export default CustomNavBar;
