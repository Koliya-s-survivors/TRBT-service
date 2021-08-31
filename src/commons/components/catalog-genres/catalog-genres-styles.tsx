import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  containerPositioning: {
    "@media (min-width: 579px)": {
      flexDirection: "row",
      justifyContent: "start",
      alignContent: "center",
    }
  }
}))

export default useStyles;
