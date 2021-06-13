import { List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';

interface CustomViewDataProps {
	label: string;
	data: string;
}

const useStyles = makeStyles(() => ({
	h: {},
}));

const CustomViewData: React.FC<CustomViewDataProps> = (props) => {
	const classes = useStyles();
	return (
		<List className={classes.h}>
			<ListItem> hello</ListItem>
		</List>
	);
};
export default CustomViewData;
