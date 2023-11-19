import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './Sections';

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className='relative z-10 text-white bg-gray-900'>
            <div className='w-full'>
                <div className='flex items-center justify-between mx-5 sm:mx-10'>
                    {/* Logo */}
                    <div className='flex items-center text-2xl h-14'>
                        <Link to={'/'}>Logo</Link>
                    </div>

                    {/* Menu button */}
                    <div className='text-2xl sm:hidden'>
                        <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
                    </div>

                    {/* big screen nav-items */}
                    <div className='hidden sm:block'>
                        <NavItem />
                    </div>
                </div>

                {/* Mobile nav-items */}
                <div className='block sm:hidden'>
                    {menu && <NavItem mobile />}
                </div>
            </div>
        </nav>

    );
};

export default NavBar;