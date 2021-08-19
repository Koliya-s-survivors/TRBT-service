import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  catalogBtn: {
    background: "#64DD17",
    "&:hover": {
      background: "#64DD17",
    }
  },

  myProfileBtn: {
    "&:hover": {
      background: "#64DD17",
    }
  },
  distanceForBtn: {
    marginRight: "10px"
  },
  loginLink: {
    color: '#64DD17',
    "&:hover": {
      background: "#64DD17",
      color: "#ffffff",
      borderRadius: "4px",
    }
  },
}))

export default useStyles;