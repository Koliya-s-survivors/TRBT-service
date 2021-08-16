import React from 'react';

//styles
import './my-profile-charges-item.css'

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
        <tr className="my-profile-charges-item">
            <td>{content}</td>
            <td>{service}</td>
            <td>{amount}</td>
            <td>{date}</td>
        </tr>
    )
};

export default MyProfileChargesItem;