import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../store/thunkFunctions';

const routes = [
    { to: '/login', name: '로그인', auth: false },
    { to: '/register', name: '회원가입', auth: false },
    { to: '', name: '로그아웃', auth: true },
];

const NavItem = ({ mobile }) => {
    const isAuth = useSelector(state => !!state.user?.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser()).then(() => navigate('/login'));
    };

    return (
        <ul className={`flex gap-2 ${mobile && 'flex-col items-center'}`}>
            {routes.map(({ name, to, auth }) => {
                return isAuth === auth && (
                    <li
                        key={name}
                        className='py-2 text-center cursor-pointer border-b-2'
                    >
                        <Link
                            to={to}
                            onClick={name === '로그아웃' && handleLogout}
                        >
                            {name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItem; 