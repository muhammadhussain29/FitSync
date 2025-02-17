import React, { createContext } from 'react'

export const ProductsList = createContext()

const ProductData = ({ children }) => {

    const product = [
        {
          "image": "/products/product1.png",
          "name": "Whey Protein",
          "price": 54.99
        },
        {
          "image": "/products/product2.png",
          "name": "Pre Workout",
          "price": 49.99
        },
        {
          "image": "/products/product3.png",
          "name": "Lifting Gloves",
          "price": 44.99
        },
        {
          "image": "/products/product4.png",
          "name": "Smart Water Bottle",
          "price": 39.99
        },
        {
          "image": "/products/product5.png",
          "name": "Mass Gainer",
          "price": 59.99
        },
        {
          "image": "/products/product6.png",
          "name": "Wrist Wraps",
          "price": 19.99
        },
        {
          "image": "/products/product7.png",
          "name": "Weight Lifting Belt",
          "price": 34.99
        },
        {
          "image": "/products/product8.png",
          "name": "Shaker",
          "price": 24.99
        },
        {
          "image": "/products/product9.png",
          "name": "Shaker",
          "price": 19.99
        },
        {
          "image": "/products/product10.png",
          "name": "Sweat Proof Towel",
          "price": 24.99
        },
        {
          "image": "/products/product11.png",
          "name": "Wrist Wrap and Straps",
          "price": 49.99
        },
        {
          "image": "/products/product12.png",
          "name": "Blender Bottle",
          "price": 29.99
        },
        {
          "image": "/products/product13.png",
          "name": "Sweat Proof Towel",
          "price": 19.99
        },
        {
          "image": "/products/product14.png",
          "name": "Jumping Rope",
          "price": 9.99
        },
        {
          "image": "/products/product15.png",
          "name": "Massage Gun",
          "price": 49.99
        },
        {
          "image": "/products/product16.png",
          "name": "Massage Gun",
          "price": 59.99
        },
        {
          "image": "/products/product17.png",
          "name": "Yoga Matt",
          "price": 19.99
        },
        {
          "image": "/products/product18.png",
          "name": "Gym Bag",
          "price": 19.99
        },
        {
          "image": "/products/product19.png",
          "name": "Fitness Band",
          "price": 39.99
        },
        {
          "image": "/products/product20.png",
          "name": "Fitness Band",
          "price": 34.99
        },
        {
          "image": "/products/product21.png",
          "name": "Post Workout",
          "price": 44.99
        },
        {
          "image": "/products/product22.png",
          "name": "Post Workout",
          "price": 39.99
        }
      ]

  return (
    <ProductsList.Provider value={product}>
        <div>{children}</div>
    </ProductsList.Provider>
  )
}

export default ProductData