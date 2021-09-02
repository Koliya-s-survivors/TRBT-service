import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  firstGridContainer: {
    border: '3px solid #64DD17',
    borderRadius: '4px',
    padding: '10px',
    '@media(max-width: 600px) ': {
      justifyContent: 'center',
      
    }
  },
  card: {
    boxShadow: 'none',
    width: 200,
    backgroundColor: '#e3e3e3',
    '@media(min-width: 320px) ': {
      width: 250,
    }
  },
  cardMedia: {
    height: 150,
    borderRadius: '10px',
    margin: '10px 10px 0 10px',
    '@media(min-width: 320px) ': {
      height: 200,
    }
  },
  artist: {
    color: '#1774A4'
  },
  iconBtn: {
    padding: '0'
  },
  icon: {
    color: 'black'
  },
  secondGridContainer: {
    padding: '15px 10px'
  },
  description: {
    marginBottom: '5px'
  },
  checkbox: {
    color: '#64DD17',
    padding: '0'
  },
  button: {
    backgroundColor: '#fff',
    color: '#64DD17',
    border: '1px solid #64DD17',
    boxShadow: 'none'
  },
})
)
export default useStyles;