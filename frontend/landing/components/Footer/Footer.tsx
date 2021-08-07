import React from 'react';

import { Divider, makeStyles } from '@material-ui/core';

import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

interface FooterProps {}

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    fontSize: '0.875rem',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  copyrightWrapper: {
    color: 'grey',
    fontSize: '1rem',
    textAlign: 'center',
  },
  copyrightLink: {
    fontWeight: 600,
    marginLeft: '.25rem',
    color: theme.palette.primary.main,
    backgroundColor: 'initial',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles();
  return (
    <>
      <Divider style={{ width: '100%' }} />
      <Box
        component='footer'
        width='100%'
        padding='1rem'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box maxWidth='xl' display='flex!important' alignItems='center'>
          <Grid item xs={12} xl={6}>
            <div className={classes.copyrightWrapper}>
              © {new Date().getFullYear()}{' '}
              <a
                className={classes.copyrightLink}
                href='https://www.maxillo.in'
                rel='noopener noreferrer'
                target='_blank'
              >
                Team Maxillo
              </a>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            xl={6}
            component={Box}
            display='flex'
            justifyContent='flex-end'
          >
            <Box
              component={List}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <ListItem
                component='a'
                href='https://www.creative-tim.com?ref=adr-admin-footer'
                rel='noopener noreferrer'
                target='_blank'
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                Privacy
              </ListItem>

              <ListItem
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                Terms
              </ListItem>

              <ListItem
                component='a'
                href='http://www.maxillo.in'
                rel='noopener noreferrer'
                target='_blank'
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                Maxillo
              </ListItem>

              <ListItem
                component='a'
                href='https://github.com/Chennai-Sharks'
                rel='noopener noreferrer'
                target='_blank'
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                All rights reserved
              </ListItem>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
