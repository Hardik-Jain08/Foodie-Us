import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard';
import OrderSummary from './OrderSummary';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  return Object.keys(cartItems).length === 0 ? (
    <div className='w-100% md:h-[calc(100vh-80px)] flex items-center flex-col justify-center my-0 mx-auto text-center'>
      <div className="w-96"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" /></div>
      <div className='mt-6 text-base font-semibold'>Your Cart is Empty</div>
      <div className='mt-2'>You can go to home page to view more restaurants</div>
      <div className='mt-7 py-3 px-5 capitalize bg-[#fc8019] text-white font-semibold cursor-pointer text-base text-center border-0 outline-0'><Link to='/'>See Restaurants Near You</Link></div>
    </div>
  ) : (
      <div className='container-max py-8 pb-16'>
      <h1 className='text-2xl my-4 font-semibold'>Cart</h1>

      {/* cart details */}
      <div className='min-h-[60vh] pb-8 md:flex gap-8'>
        {/* cart items */}
        <ul className='basis-7/12'>
        {cartItems &&
          Object.keys(cartItems).map((itemKey, index) => <CartItemCard key={index} item={cartItems[itemKey]} />)}
        </ul>
        {/* order summary */}
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  )
}

export default Cart