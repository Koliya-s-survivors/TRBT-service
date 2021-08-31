import React from 'react';

// @material
import {TableRow, TableCell} from '@material-ui/core';

// interface
interface MyProfileChargesItemProps {
    item: Item
}

interface Item {
    id: number
    title: string
    author: string
    service: string
    amount: number
    date: string
}

const MyProfileChargesItem: React.FunctionComponent<MyProfileChargesItemProps> = ({item}) => {
    const {title, author, amount, service, date} = item
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {`${title} ${author}`}
            </TableCell>
            <TableCell>{service}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{date}</TableCell>
        </TableRow>

    )
}

export default MyProfileChargesItem;
