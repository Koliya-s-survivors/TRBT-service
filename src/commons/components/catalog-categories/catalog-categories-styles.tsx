import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    gridContainer: {
        display: "flex",
        justifyContent: "start",
        paddingLeft: "10px"
    },
    title: {
        paddingRight: '10px',
        minWidth: '150px'
    },
    text: {
        color: "#64DD17"
    }
}))

export default useStyles;
