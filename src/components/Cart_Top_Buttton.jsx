import React from 'react'
import { FaArrowUp, FaShoppingCart } from "react-icons/fa";

const Cart_Top_Buttton = () => {
    return (
        <div className="fixed bottom-5 right-5 flex flex-col gap-4">
            <button className="bg-gray-900 text-white rounded-full p-4 text-2xl shadow-lg hover:bg-gray-700 transition">
                <FaShoppingCart />
            </button>
            <button
                className="bg-red-600 text-white rounded-full p-4 text-2xl shadow-lg hover:bg-red-700 transition"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <FaArrowUp />
            </button>
        </div>

    )
}

export default Cart_Top_Buttton