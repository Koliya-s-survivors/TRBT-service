import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    containerPositioning: {
        ["@media (min-width: 579px)"]: { // eslint-disable-line no-useless-computed-key
            flexDirection: "row",
            justifyContent: "start",
            alignContent: "center",
        }
    },
}))

export default useStyles;
