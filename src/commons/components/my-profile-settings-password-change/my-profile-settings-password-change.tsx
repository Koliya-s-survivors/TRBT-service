import React from 'react';

// @material
import { Box, Button, Container, CssBaseline, InputBase, Typography } from '@material-ui/core';

// styles
import useStyles from './my-profile-settings-password-change-style';

interface Props { }

const MyProfileSettingsPasswordChange: React.FC<Props> = () => {
    const myProfileSettingsPasswordChangeClasses = useStyles();
    return (
        <Box p={1.25}>
            <Container maxWidth="xs" className={myProfileSettingsPasswordChangeClasses.container}>
                <CssBaseline />
                <div className={myProfileSettingsPasswordChangeClasses.paper}>
                    <Typography variant="h5">
                        Subscriber password settings
                    </Typography>
                    <form className={myProfileSettingsPasswordChangeClasses.form} noValidate>
                        <InputBase placeholder="New password" className={myProfileSettingsPasswordChangeClasses.textField}
                        />
                        <InputBase placeholder="Confirm password" className={myProfileSettingsPasswordChangeClasses.textField}
                        />
                        <Box p={1.25} className={myProfileSettingsPasswordChangeClasses.boxBtn} >
                            <Button
                                size='large'
                                variant="contained"
                                color="default"
                                className={myProfileSettingsPasswordChangeClasses.cancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                size='large'
                                variant="contained"
                                color="default"
                                className={myProfileSettingsPasswordChangeClasses.okay}
                            >
                                OK
                            </Button>
                        </Box>
                    </form>
                </div>
            </Container >
        </Box>
    )   
};

export default MyProfileSettingsPasswordChange;