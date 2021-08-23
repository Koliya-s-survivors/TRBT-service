import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  headerLogo: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#64DD17',
    '@media (min-width:600px)': {
      fontSize: '4.5rem',
    },
  }
}));

export default useStyles;