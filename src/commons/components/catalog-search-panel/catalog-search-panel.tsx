import React, { useState } from 'react';

// @material
import { Box, Grid, Typography, TextField, Button, withStyles } from '@material-ui/core';

// Style
import useStyles from './catalog-search-panel-styles';

// interface
interface CatalogSearchPanelProps {
    onSearch: (stateValue: string) => void
}

const CSSTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            }
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& input': {
            color: 'white'
        }
    }
})(TextField)

const CatalogSearchPanel: React.FunctionComponent<CatalogSearchPanelProps> = ({ onSearch }) => {
    const [value, setValue] = useState('');
    const classes = useStyles();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onClick = () => {
        onSearch(value)
    }

    return (
        <Box component='section' className={classes.container}>
            <Grid component='article' container direction='row' item xs={12} className={classes.itemContainer}>
                <svg width="4em" viewBox="0 0 640 512" fill="white">
                    <path
                        d="M537.59 226.59a96 96 0 0 0-142.9-114.39A160 160 0 0 0 96 192c0 2.7.09 5.41.19 8.09A144 144 0 0 0 144 480h368a128 128 0 0 0 25.59-253.41zM384 352c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.89 69.89 0 0 1 16 2v-76.36l-96 37.52V384c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.89 69.89 0 0 1 16 2V239.25A16 16 0 0 1 235.19 224l128-47.25A16 16 0 0 1 384 192z"
                    />
                </svg>
                <Typography variant={'h6'} component={'p'} className={classes.text}>Your favorite melodies as
                    a ring back tone!</Typography>
            </Grid>
            <Grid component='article' direction='row' item xs={12}>
                <CSSTextField size="small"
                    variant="outlined"
                    className={classes.input}
                    label="Search"
                    onChange={onChange}
                />
                <Button variant="contained" className={classes.button} onClick={onClick}>
                    <svg width="1.25em" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                    </svg>
                </Button>
            </Grid>
        </Box>
    )
}

export default CatalogSearchPanel;
