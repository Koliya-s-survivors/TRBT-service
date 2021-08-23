import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    flexDirection:'row',
    alignItem:'center',
    justifyContent: 'center',
    '@media (max-width:320px)': {
      textAlign: 'center',
    },     
  },
  catalogBtn: {
    background: '#64DD17',
    marginRight: ' 5px',
    '&:hover': {
      background: '#64DD17',
    }
  },

  myProfileBtn: {
    '&:hover': {
      background: '#64DD17',
    }
  },
  distanceForBtn: {
    
  },
  loginLink: {     
    color: '#64DD17',     
    textAlign:'center',   
    '&:hover': {
      background: '#64DD17',
      color: '#ffffff',
      borderRadius: '4px',
    }
  },
}))

export default useStyles;