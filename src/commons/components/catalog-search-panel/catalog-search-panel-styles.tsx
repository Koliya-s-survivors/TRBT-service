import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: "#64DD17",
        padding: "10px",
    },
    itemContainer: {
        paddingBottom: "10px"
    },
    text: {
        color: "white",
        paddingLeft: "10px",
        alignSelf: "center"
    },
    button: {
        height: "39px"
    },
    input: {
        marginRight: "3px",
    }
}))

export default useStyles;
