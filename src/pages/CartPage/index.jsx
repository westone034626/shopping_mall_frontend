import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartDetail, removeCartItem } from '../../store/thunkFunctions';
import CartTable from './Sections/CartTable';

const CartPage = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user.userData);
    const cartDetail = useSelector(state => state.user.cartDetail);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (userState?.cart && userState.cart.length > 1) {
            const body = {
                productIds: userState.cart.map(({ id }) => id).filter(Boolean),
                cartData: userState.cart,
            };

            dispatch(getCartDetail(body));
        }
    }, [dispatch, userState]);

    useEffect(() => {
        calculateTotal(cartDetail);
    }, [cartDetail]);

    const calculateTotal = (cartItems) => {
        const newTotal = cartItems.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);

        setTotal(newTotal);
    };

    const handleRemoveCartItem = (id) => {
        dispatch(removeCartItem(id));
    };

    return (
        <section>
            <div className='text-center m-7'>
                <h2 className='text-2xl'>
                    나의 장바구니
                </h2>
            </div>

            <CartTable
                products={cartDetail}
                onRemoveItem={handleRemoveCartItem}
            />

            {cartDetail?.length > 0 ? (
                <>
                    <div className='mt-10'>
                        <p><span className='font-bold'>합계: </span>{total}원</p>

                        <button className='text-white bg-black hover:bg-gray-500 px-4 py-2 rounded-md mt-5'>
                            결제하기
                        </button>
                    </div>
                </>
            ) : <p>장바구니가 비었습니다.</p>}
        </section>
    );
};

export default CartPage;