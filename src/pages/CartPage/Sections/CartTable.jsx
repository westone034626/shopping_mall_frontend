import React from 'react';
import { attachServerDomain } from '../../../utils';

const CartTable = ({ products, onRemoveItem }) => {
    const getImageSrc = (images) => {
        if (images.length > 0) {
            return attachServerDomain(images[0]);
        }
    };

    const renderItems = () => {
        if (products.length < 1) {
            return null;
        }

        return products.map(product => (
            <tr key={product._id}>
                <td>
                    <img
                        src={getImageSrc(product.images)}
                        alt='product'
                        className='w-[70px]'
                    />
                </td>
                <td>{product.quantity} 개</td>
                <td>{product.price} 원</td>
                <td
                    className='cursor-pointer'
                    onClick={() => onRemoveItem(product._id)}
                >
                    지우기
                </td>
            </tr>
        ));
    };

    return (
        <table className='w-full text-left text-sm text-gray-500'>
            <thead className='border-[1px]'>
                <tr>
                    <th>사진</th>
                    <th>개수</th>
                    <th>가격</th>
                    <th>삭제</th>
                </tr>
            </thead>

            <tbody>
                {renderItems()}
            </tbody>
        </table>
    );
};

export default CartTable;