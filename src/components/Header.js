import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='shadow-lg flex justify-between'>
            <div className='h-20 w-20'>
                <img src="https://masterbundles.com/wp-content/uploads/2023/01/green-company-name-financial-services-logo-20-574.png" alt="logo" />
            </div>
            <nav>
                <ul className='flex grow'>
                    <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                        <Link to="/cart"><i className='fa-solid fa-cart-shopping'></i></Link>
                    </li>
                    <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;