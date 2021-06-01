import React from 'react';
import clsx from 'clsx';
import {
	createStyles,
	makeStyles,
	useTheme,
	Theme,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';

import { Collapse, useMediaQuery } from '@material-ui/core';

const drawerWidth = 240;

interface CustomNavBarProps {}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			backgroundColor: '#5664D2',
		},
		appBarShift: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: 36,
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: 'nowrap',
			overflow: 'hidden',
		},

		drawerOpen: {
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: '0px',
			overflow: 'hidden',
		},
		drawerClose: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: 'hidden',
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9) + 1,
			},
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
			backgroundColor: '#5664D2',
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		nested: {
			paddingLeft: theme.spacing(4),
		},
	})
);

const CustomNavBar: React.FC<CustomNavBarProps> = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(true);
	const matches = useMediaQuery('(max-width:800px)');

	const [openPatient, setOpenPatient] = React.useState(false);

	const handleClickPatient = () => {
		setOpenPatient(!openPatient);
	};

	React.useEffect(() => {
		if (matches) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [matches]);

	const handleDrawerOpen = () => {
		console.log(matches);
		if (!matches) {
			setOpen(true);
		} else {
			return;
		}
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						EMedico
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon style={{ color: 'white' }} />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary='DashBoard' />
					</ListItem>

					<ListItem button onClick={handleClickPatient}>
						<ListItemIcon>
							<FaceIcon />
						</ListItemIcon>
						<ListItemText primary='Patients' />
						{openPatient ? <ExpandLess /> : <ExpandMore />}
					</ListItem>

					<Collapse in={openPatient} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<FaceIcon />
								</ListItemIcon>
								<ListItemText primary='All Patients' />
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<AddIcon />
								</ListItemIcon>
								<ListItemText primary='Add Patient' />
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<EditIcon />
								</ListItemIcon>
								<ListItemText primary='Update Patient' />
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<RemoveIcon />
								</ListItemIcon>
								<ListItemText primary='Remove Patient' />
							</ListItem>
						</List>
					</Collapse>
				</List>

				<Divider />
			</Drawer>
		</>
	);
};

export default CustomNavBar;
