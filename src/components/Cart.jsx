import React from 'react'
import { ImCancelCircle } from "react-icons/im";

const Cart = (props) => {

    const closeCart = () => {
        props.setShowCart(false)
    }

    return (
        <div className={`${props.showCart ? 'block' : 'hidden'} z-[60] bg-white w-[300px] h-screen fixed bottom-0 right-0`}>
            <button onClick={closeCart} className='absolute top-5 left-5 rounded-full p-2 text-xl text-red-600'> <ImCancelCircle /></button>
        </div>
    )
}

export default Cart