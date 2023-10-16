import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import { useSelector } from 'react-redux';
const Header = () => {
    const cartItems = useSelector(store => store.cart.items);
    return (
        <header className='z-50 sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100'>
            <div className='container-max flex justify-between items-center'>
                <div className='h-20 w-20 cursor-pointer'>
                    <Link to="/">
                        <img src="https://masterbundles.com/wp-content/uploads/2023/01/green-company-name-financial-services-logo-20-574.png" alt="logo" />
                    </Link>
                </div>
                <Search />
                <nav>
                    <ul className='text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex'>
                        {/* <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                        <Link to="/about">About</Link>
                    </li> */}
                        <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                            <Link to="/contact">Help</Link>
                        </li>
                        <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                            <Link to="/cart" className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'>
                                <i className='fa-solid fa-cart-shopping'></i>
                                <span className='absolute -top-2 -right-4 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'> {Object.keys(cartItems).length} </span>
                            </Link>
                        </li>
                        <li className='px-6 py-6 text-lg hover:bg-gray-200 cursor-pointer'>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;