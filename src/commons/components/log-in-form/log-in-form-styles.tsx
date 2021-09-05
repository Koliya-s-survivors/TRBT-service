import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: '10px ',
    border: '3px solid #64DD17',
    borderRadius: '4px',
  },
  boxBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cancel: {
    width: '130px',
    color: '#000',
    background: '#fff',
  },
  okay: {
    width: '130px',
    color: '#fff',
    background: "#64DD17",
    "&:hover": {
      background: "#64DD17",
      color: '#fff',
    }
  },
  textError: {
    color: '#f44336',
  }
  // grid:{
  //   display:'flex',
  //   flexDirection:'column',
  //   alignItems:'center',     
  // },
  // form: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',       
  // },
  // inputBase:{
  //   width:'100%',
  //   border:'2px solid #64DD17',
  //   borderRadius:'4px',
  //   marginTop:theme.spacing(2),
  //   marginBottom: theme.spacing(2),
  //   padding:'10px',
  // },  
}))

export default useStyles;