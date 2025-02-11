import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import CartItem from './CartItem';

const Cart = (props) => {

    const cartItem = [
        {
            "image": "/products/product4.png",
            "name": "Smart Water Bottle",
            "price": 39.99,
            "quantity": 1,
          },
        {
            "image": "/products/product1.png",
            "name": "Whey Protein",
            "price": 54.99,
            "quantity": 1,
        }]

    const closeCart = () => {
        props.setShowCart(false)
    }

    return (
        <div className={`${props.showCart ? 'block' : 'hidden'} flex flex-col justify-between roboto z-[60] bg-white w-[300px] h-[95vh] fixed top-5 right-5 rounded-3xl px-2 py-3`}>
            {/* Header */}
            <div className='flex justify-between items-center'>
                <button onClick={closeCart} className='p-2 text-xl text-red-600'> <ImCancelCircle /></button>
                <h4 className='text-2xl text-red-600 font-semibold capitalize'>Your Cart</h4>
                <div className='p-2 text-xl text-red-600'><FaCartShopping /></div>
            </div>

            {/* Item Cards */}
            <div className='h-[60%] overflow-y-scroll mx-3 scrollbar-hide'>
                {cartItem.map((elem, index)=>{
                    return <CartItem elem={elem} key={index}/>
                })}
            </div>

            {/* bottom */}
            <div className='flex flex-col gap-2'>
                <p className='leading-3 text-right px-3 text-base capitalize text-gray-600'>total : <span className='w-10 inline-block'>00</span></p>
                <p className='leading-3 text-right px-3 text-base capitalize text-gray-600'>delivery : <span className='w-10 inline-block'>00</span></p>
                <p className='leading-3 text-right px-3 text-base capitalize text-gray-600'>Grand total : <span className='w-10 inline-block'>00</span></p>
                <button className='button px-5 py-3 mt-3'>Continue Shopping</button>
                <button className='gray-bg-button rounded-full text-white px-5 py-3'>Proceed</button>
            </div>
        </div>
    )
}

export default Cart