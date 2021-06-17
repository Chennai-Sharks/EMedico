import React from 'react';
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
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
// import EditIcon from '@material-ui/icons/Edit';
import { Collapse } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { mapRoutesToTitle } from '../../constant/MapRoutesToTitle';

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
        width: `calc(100% - ${0}px)`,
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
    title: {
      marginTop: '10px',
      paddingLeft: theme.spacing(2),
      marginBottom: '10px',
    },
  })
);

const CustomNavBar: React.FC<CustomNavBarProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useHistory();
  console.log(router.location.pathname);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [openPatient, setOpenPatient] = React.useState(false);

  const handleClickPatient = () => {
    setOpenPatient(!openPatient);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRouteChange = (path: string) => {
    router.push(path);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={() => handleRouteChange('/home')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='DashBoard' />
        </ListItem>
        <Divider />
        <Typography className={classes.title}>Black Fungus</Typography>
        <ListItem button onClick={handleClickPatient}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary='Patients' />
          {openPatient ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openPatient} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem
              button
              onClick={() => handleRouteChange('/black-fungus/get-patient')}
              className={classes.nested}
            >
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary='Patient Detail' />
            </ListItem>
            <ListItem
              button
              onClick={() => handleRouteChange('/black-fungus/add-patient')}
              className={classes.nested}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary='Add Patient' />
            </ListItem>
            {/* <ListItem
							button
							onClick={() => handleRouteChange('/black-fungus/update-patient')}
							className={classes.nested}
						>
							<ListItemIcon>
								<EditIcon />
							</ListItemIcon>
							<ListItemText primary='Update Patient' />
						</ListItem> */}
            {/* <ListItem
							button
							onClick={() => handleRouteChange('/black-fungus/delete-patient')}
							className={classes.nested}
						>
							<ListItemIcon>
								<RemoveIcon />
							</ListItemIcon>
							<ListItemText primary='Remove Patient' />
						</ListItem> */}
          </List>
        </Collapse>
      </List>

      <Divider />
      <List></List>
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
            {
              mapRoutesToTitle.find(
                (item) => item.route === router.location.pathname
              )?.title
            }
          </Typography>
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
        {props.children}
      </main>
    </div>
  );
};

export default CustomNavBar;
