import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: ' rgb(246, 239, 239)',
    padding: '10px',
    border: '3px solid rgb(235, 235, 235)',
    borderRadius: '10px',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9     
    borderRadius: '5px',
    objectFit: 'contain',
  },  
  title: {
    fontSize: '18px',
    fontFamily: 'Times New Roman,Time,serif',
    fontWeight: '600',
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
  grid: {
    display: 'flex',
    alignItems: 'center',
  },
  blockIcon: {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
})) 

export default useStyles;