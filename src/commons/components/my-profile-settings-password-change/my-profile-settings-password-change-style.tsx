import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-evenly',
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
    width: '100px',    
    color: '#000',
    background: '#fff',
  },
  okay: {
    width: '100px',    
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
}))

export default useStyles;