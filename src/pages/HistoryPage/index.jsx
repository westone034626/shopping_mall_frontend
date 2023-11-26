import dayjs from 'dayjs';
import React from 'react';
import { useSelector } from 'react-redux';

const HistoryPage = () => {
    const userData = useSelector(state => state.user.userData);

    return (
        <section>
            <div className='text-center m-7'>
                <h2 className='text-2xl'>
                    History
                </h2>
            </div>

            <table className='w-full text-sm text-left text-gray-500'>
                <thead className='border-[1px]'>
                    <tr>
                        <th>Payment Id</th>

                        <th>Price</th>

                        <th>Quantity</th>

                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>
                    {userData.history?.map(item => (
                        <tr
                            key={item.id}
                            className='border-b'
                        >
                            <td>{item.paymentId}</td>

                            <td>{item.price}</td>

                            <td>{item.quantity}</td>

                            <td>{dayjs(item.dateOfPurchase).format('YYYY-MM-DD HH:mm:ss')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default HistoryPage;