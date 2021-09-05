import React from 'react';

// @material
import { Box, Button, Container, CssBaseline, InputBase, Typography } from '@material-ui/core';

// styles
import useStyles from './log-in-form-styles';

interface Props { }

interface State { }

const LogInForm: React.FC = () => {
    const logInFormClasses = useStyles();
    return (
        <Box p={1.25}>
            <Container maxWidth="xs" className={logInFormClasses.container}>
                <CssBaseline />
                <div className={logInFormClasses.paper}>
                    <Typography variant="h5">
                        Authorize
                    </Typography>
                    <form className={logInFormClasses.form} noValidate>
                        <InputBase placeholder="E-mail:" className={logInFormClasses.textField}
                        />
                        <InputBase placeholder="Password:" className={logInFormClasses.textField}
                        />
                        <Box p={1.25} className={logInFormClasses.boxBtn} >
                            <Button
                                size='large'
                                variant="contained"
                                color="default"
                                className={logInFormClasses.cancel}
                            >
                                Registration
                            </Button>
                            <Button
                                size='large'
                                variant="contained"
                                color="default"
                                className={logInFormClasses.okay}
                            >
                                Sign in
                            </Button>
                        </Box>
                    </form>
                </div>
            </Container >
        </Box>
        
    )    
}

export default LogInForm;