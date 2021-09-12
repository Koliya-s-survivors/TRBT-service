import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  activeBtn: {
    background: "#64DD17",
  },

  btnDefault: {
    margin: "5px",
    width: "150px",
    "&:hover": {
      background: "#64DD17",
    },
  },

  navBtnContainerPositioningGroupOne: {
    ["@media (min-width: 579px)"]: { // eslint-disable-line no-useless-computed-key
      justifyContent: "flex-start",
    }
  },
  navBtnContainerPositioningGroupTwo: {
    ["@media (min-width: 579px)"]: { // eslint-disable-line no-useless-computed-key
      justifyContent: "flex-end",
    }
  },
}))

export default useStyles;