import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, decreaseItem, increaseItem, removeItem } from '../utils/cartSlice';
const CartItemCard = ({ item }) => {
    const dispatch = useDispatch();
    const handleIncrease = () => dispatch(increaseItem(item));
    const handleDecrease = () => dispatch(decreaseItem(item));
    const handleRemove = () => dispatch(removeItem(item));
    const handleClear = () => dispatch(clearCart(item));

    const {
        price,
        defaultPrice,
        description,
        name,
        imageId,
        id,
    } = item?.card?.info;
    const quantity = item?.quantity;
    const finalPrice = (price || defaultPrice || 199);
    return (<>
        <li
            key={id}
            className='flex gap-4 justify-between max-w-[600px] my-4'
        >
            <div className='basis-3/12'>
                <img
                    className='w-full h-full md:h-auto object-cover block rounded-md aspect-square'
                    src={IMG_CDN_URL + imageId}
                    alt=''
                />
            </div>
            <div className='basis-9/12'>
                <p className='text-lg font-semibold'>
                    {name}
                </p>

                <p className='hidden md:block'>
                    {description?.length > 50
                        ? description.slice(0, 50) + '...'
                        : description}
                </p>

                <p className='my-2 space-x-1'>
                    <span className='font-semibold'>
                        ₹
                        {parseFloat(
                            (
                                quantity * parseFloat(finalPrice / 100)
                            ).toFixed(2)
                        )}
                    </span>
                    <span className='text-gray-800 font-normal'>
                        ({finalPrice / 100} × {quantity})
                    </span>
                </p>

                {/* actions */}
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center'>
                        <button
                            onClick={() => {handleDecrease()}}
                            disabled={item?.quantity === 1}
                            className={
                                'bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md'
                            }
                        >
                            -
                        </button>
                        <p className='font-bold w-8 h-8 flex justify-center items-center'>
                            {item?.quantity}
                        </p>
                        <button
                            onClick={() => {handleIncrease()}}
                            className='bg-orange-500 text-white font-bold w-8 h-8 rounded-md'
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={() => {removeItem()}}
                        className='border border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md'
                    >
                        Remove
                    </button>
                </div>
            </div>
        </li>
    </>
    );
};

export default CartItemCard