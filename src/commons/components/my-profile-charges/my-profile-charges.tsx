import React from 'react';

// components
import MyProfileChargesItem from '../my-profile-charges-item';

// @material
import {Box, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

// interface
interface MyProfileChargesProps {}

const rows = [//for test
    {
        id: 0,
        title: 'Тема Усатого няня',
        author: 'А.Рыбников',
        service: 'RBT',
        amount: 4,
        date: '2017-6-22'
    },
    {
        id: 1,
        title: 'Тема Усатого няня',
        author: 'А.Рыбников',
        service: 'RBT',
        amount: 3,
        date: '2017-6-22'
    },
]

const MyProfileCharges: React.FunctionComponent<MyProfileChargesProps> = () => {
    return (
        <Box p={1}>
            <Grid container direction={'row'} justifyContent={'center'} alignContent={'center'}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Content</TableCell>
                                <TableCell>Service</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => <MyProfileChargesItem key={row.id} item={row}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Box>
    )
}

export default MyProfileCharges;
