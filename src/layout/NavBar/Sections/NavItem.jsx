import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { logoutUser } from '../../../store/thunkFunctions';

const routes = [
    { to: '/login', name: '로그인', auth: false },
    { to: '/register', name: '회원가입', auth: false },
    { to: '/product/upload', name: '업로드', auth: true },
    {
        to: '/user/cart', name: '카트', auth: true,
        icon: <AiOutlineShoppingCart style={{ fontSize: '1.4rem' }} />
    },
    { to: '', name: '로그아웃', auth: true },
    { to: '/history', name: '주문목록', auth: true },
];

const NavItem = ({ mobile }) => {
    const isAuth = useSelector(state => !!state.user?.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser()).then(() => navigate('/login'));
    };

    const userData = useSelector(state => state.user.userData);
    const cartIsNotEmpty = userData.cart?.length > 0;

    return (
        <ul className={`flex gap-4 ${mobile && 'flex-col items-center'}`}>
            {routes.map(({ name, to, auth, icon }) => {
                return isAuth === auth && (
                    <li
                        key={name}
                        className='relative py-2 text-center cursor-pointer border-b-2'
                    >
                        <Link
                            to={to}
                            onClick={name === '로그아웃' && handleLogout}
                        >
                            {icon ? (
                                <>
                                    {icon}

                                    {cartIsNotEmpty && <span className='absolute top-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -right-3'>
                                        {userData.cart.length}
                                    </span>}
                                </>
                            ) : name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItem; 