import React from 'react';

// components
import CatalogCategoriesItem from '../catalog-button-item';

// @material
import {Grid, Typography, Box, Divider} from '@material-ui/core';

// style
import useStyles from './my-profile-tab-navigation-style';

// interface
import { Tab } from '../pages/my-profile/my-profile';

interface MyProfileTabNavigationProps {
    tabs: Tab[]
    tabClick: (category: string) => void,
    isActiveTab: string
}

const MyProfileTabNavigation: React.FunctionComponent<MyProfileTabNavigationProps> = ({
    tabs,
    tabClick,
    isActiveTab
}) => {


    const { containerPositioning } = useStyles();
    return (
        <Box component='section' p={1}>
            <Grid container direction={'row'} justifyContent={'center'} alignContent={'center'}>
                <Grid container 
                    direction={'column'}
                    justifyContent={'center'}
                    alignContent={'center'}
                    item xs={12} sm={9} 
                    className={containerPositioning}>

                    {tabs.map(tab => {
                        return <CatalogCategoriesItem key={tab.id} category={tab.title} categoryClick={tabClick}
                            isActiveCategory={isActiveTab} />
                    })}
                </Grid>
            </Grid>
            <Divider/>
        </Box>
    );
}

export default MyProfileTabNavigation;
