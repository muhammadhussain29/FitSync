import React, { useState } from 'react'
import { FaArrowUp, FaShoppingCart } from "react-icons/fa";

const Cart_Top_Buttton = (props) => {

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const cart = () => {
        props.setShowCart(true)
    }

    return (
        <div className="fixed bottom-7 right-7 flex flex-col gap-4">
            <button 
            className="bg-gray-900 text-white rounded-full p-4 text-2xl shadow-lg hover:bg-gray-700 transition"
            onClick={cart}>
                <FaShoppingCart />
            </button>
            <button
                className="bg-red-600 text-white rounded-full p-4 text-2xl shadow-lg hover:bg-red-700 transition"
                onClick={toTop}
            >
                <FaArrowUp />
            </button>
        </div>

    )
}

export default Cart_Top_Buttton