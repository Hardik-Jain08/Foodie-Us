import React from 'react'
import { shimmer_card_unit } from '../utils/constants'

export const ShimmerCard = () => {
    return (
        <div className='flex flex-wrap justify-center'>
            {Array(shimmer_card_unit).fill("").map((e, index) => {
                return (
                    <div key={index} className='shadow-xl m-5 w-72 p-3 rounded flex flex-col animate-pulse'>
                        <div className='rounded-lg h-44 m-1 bg-[#ccc]'></div>
                        <div className='h-5 m-1 w-52 bg-[#ccc]'></div>
                        <div className='h-5 m-1 bg-[#ccc]'></div>
                        <div className='h-5 m-1 w-48 bg-[#ccc]'></div>
                        <div className='flex justify-around'>
                            <div className='h-5 my-1 w-20 bg-[#ccc]'></div>
                            <div className='h-5 my-1 w-20 bg-[#ccc]'></div>
                            <div className='h-5 my-1 w-20 bg-[#ccc]'></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}