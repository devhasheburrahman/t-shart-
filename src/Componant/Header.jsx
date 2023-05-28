import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-red-400 flex justify-between px-8  text-3xl'>
            <Link to="/">Home</Link>
            <Link to="/order">Order Review</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;