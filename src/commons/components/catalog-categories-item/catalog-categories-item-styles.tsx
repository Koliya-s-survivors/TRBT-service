import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    button: {
        borderColor: "#64DD17",
        borderWidth: "2px",
        "&:hover": {
            background: "#64DD17",
        }
    },
    buttonAction: {
        borderColor: "#64DD17",
        borderWidth: "2px",
        background: "#64DD17",
        color: "white",
        "&:hover": {
            background: "rgba(100, 221, 23, 0.6)",
        }
    },
    distanceForBtn: {
        marginRight: "10px"
    }
}))

export default useStyles;