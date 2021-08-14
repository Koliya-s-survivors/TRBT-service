import React from 'react';

//components
import MyProfileChargesItem from '../my-profile-charges-item';

//styles
import './my-profile-charges.css'

interface MyProfileChargesProps { }

const data = [
    {
        content: 'Тема Усатого Няня ',
        service: 'RBT',
        amount: 4,
        date: '2017 - 6 - 22'
    },
    {
        content: 'Тема Усатого Няня ',
        service: 'RBT',
        amount: 4,
        date: '2017 - 6 - 22'
    }
];

const MyProfileCharges:React.FC<MyProfileChargesProps> = () => {
    return (
        <article className="my-profile-charges">
            <table>
                <tr>
                    <th>Сontent</th>
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                {data.map((item) => {
                    return <MyProfileChargesItem charge = { item}/>
                })}
            </table>
        </article>
    )
};

export default MyProfileCharges;
