import React, { useState } from 'react'
import { FaArrowUp, FaShoppingCart } from "react-icons/fa";

const Cart_Top_Buttton = (props) => {

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const cart = () => {
        props.setShowCart(true)
    }

    const [cartItems, setCartItems] = useState(2)

    return (
        <div className="fixed md:bottom-7 bottom-4 md:right-7 right-4 flex flex-col md:gap-4 gap-2">
            <button
                className="bg-gray-900 text-white rounded-full md:p-4 p-3 md:text-2xl text-lg shadow-lg hover:bg-gray-700 transition"
                onClick={cart}>
                <div className={`absolute md:-top-3 -top-2 md:-left-3 -left-2 bg-red-600 justify-center items-center md:w-7 w-5 md:h-7 h-5 rounded-full md:text-sm text-xs ${cartItems ? "flex" : "hidden"} `}>{cartItems}</div>
                <FaShoppingCart />
            </button>
            <button
                className="bg-red-600 text-white rounded-full md:p-4 p-3 md:text-2xl text-lg shadow-lg hover:bg-red-700 transition"
                onClick={toTop}
            >
                <FaArrowUp />
            </button>
        </div>

    )
}

export default Cart_Top_Buttton