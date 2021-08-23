import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  gridContainer: {
    display: "flex",
    justifyContent: "start",
    paddingLeft: "10px"
  },
  title: {
    paddingRight: "10px",
    minWidth: "150px"
  }
}))

export default useStyles;
