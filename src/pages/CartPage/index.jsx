import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartDetail } from '../../store/thunkFunctions';

const CartPage = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user.userData);

    useEffect(() => {
        if (userState?.cart && userState.cart.length > 1) {
            const body = {
                productIds: userState.cart.map(({ id }) => id).filter(Boolean),
                cartData: userState.cart,
            };

            dispatch(getCartDetail(body));
        }
    }, [dispatch, userState]);

    return (
        <div>CartPage</div>
    );
};

export default CartPage;