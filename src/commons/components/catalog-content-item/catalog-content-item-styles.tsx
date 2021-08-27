import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    card: {
      width: 250, 
      backgroundColor: '#e3e3e3',
    },
    cardMedia: {
      height: 200,
      margin: '10px 10px 0 10px',
      borderRadius: '10px',
    },
    title: {
      fontSize: '18px',
      fontFamily: 'Times New Roman,Time,serif',
    },
    artist: {
      color: '#1976d2',
      fontSize: '16px',
      fontFamily: 'Times New Roman,Time,serif',
    },
    price: {
      color: '#64DD17',
    },
    link: {
      color: 'black',
    },
  })
);

export default useStyles;