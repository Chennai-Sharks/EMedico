import { makeStyles } from '@material-ui/core';

export const formStyles = makeStyles((theme) => ({
  layout: {
    width: '100%',
    padding: '12px',
    paddingTop: '12px',
  },
  content: {
    marginTop: theme.spacing(3),
  },
  title: {
    margin: '20px 20px',
    fontSize: '1.5 rem',
    fontWeight: 'bold',
  },
  formTitle: {
    paddingBottom: '12px',
  },
  textFieldPadding: {
    margin: '20px',
    paddingRight: '20px',
    marginBottom: '0px',
  },
}));
