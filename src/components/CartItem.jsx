import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = (props) => {
    return (
        <div className='w-full flex flex-col justify-center bg-gray-200 rounded-xl pr-3 py-3 mb-2'>
            <div className='flex'>
                <img src={props.elem.image} alt="" className='w-20 h-full' />
                <div className='flex flex-col w-full justify-between pb-2'>
                    <div className='flex'>
                        <div>
                            <p className='capitalize text-base truncate w-[140px]'>{props.elem.name}</p>
                            <p className='capitalize text-sm'>{props.elem.price} $</p>
                        </div>
                        <div className='ml-auto text-xl text-red-600'><MdDelete /></div>
                    </div>
                    <div className='flex items-center justify-between border rounded px-2 mt-3'><span><FaMinus /></span> {props.elem.quantity} <span><FaPlus /></span></div>
                </div>
            </div>
        </div>
    )
}

export default CartItem