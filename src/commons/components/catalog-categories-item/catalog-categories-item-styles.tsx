import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    button: {
        borderColor: "#64DD17",
        borderWidth: "2px",
        "&:hover": {
            background: "#64DD17",
        },
        borderRadius: "10px"
    },
    buttonAction: {
        borderColor: "#64DD17",
        borderWidth: "2px",
        background: "#64DD17",
        color: "white",
        "&:hover": {
            background: "rgba(100, 221, 23, 0.6)",
        },
        borderRadius: "10px"
    },
    distanceForBtn: {
        marginRight: "10px",
        paddingBottom: "5px"
    }
}))

export default useStyles;
