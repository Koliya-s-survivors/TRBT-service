const data = [
    {
        content: 'Тема Усатого Няня ',
        service: 'RBT',
        amount: 4,
        date: 2017 - 6 - 22
    },
    {
        content: 'Тема Усатого Няня ',
        service: 'RBT',
        amount: 4,
        date: 2017 - 6 - 22
    }
];
import React from 'react';

//components

//styles
import './my-profile-charges.css'

interface MyProfileChargesProps {}

const MyProfileCharges:React.FC<MyProfileChargesProps> = () => {
    return (
        <article className="my-profile-charges">
            <table>
                <tr>
                    <td>Сontent</td>
                    <td>Service</td>
                    <td>Amount</td>
                    <td>Date</td>
                </tr>
            </table>
        </article>
    )
};

export default MyProfileCharges;
