import React from 'react';

//components

//styles

interface MyProfileChargesItemProps {
    charge:Data
}

interface Data {
    content: string,
    service: string,
    amount: number,
    date: string,
}

const MyProfileChargesItem: React.FC<MyProfileChargesItemProps> = (props) => {
    const { content, service, amount, date} = props.charge
    return (
        <tr>
            <td>{content}</td>
            <td>{service}</td>
            <td>{amount}</td>
            <td>{date}</td>
        </tr>
    )
};

export default MyProfileChargesItem;