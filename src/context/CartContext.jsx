// // CartContext.js
// import React, { createContext, useState } from 'react';
//
// const CartContext = createContext();
//
// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
//
//     const addToCart = (item) => {
//         setCartItems((prevItems) => [...prevItems, item]);
//     };
//
//     const clearCart = () => {
//         setCartItems([]);
//     };
//
//     const updateCartItemQuantity = (id, newQuantity) => {
//         setCartItems(prevItems =>
//             prevItems.map(item =>
//                 item.id === id
//                     ? { ...item, quantity: Math.max(newQuantity, 0) } // Ensure quantity is not negative
//                     : item
//             )
//         );
//     };
//
//
//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
//
// export default CartContext;

import  { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [confirmBox,setConfirmBox] = useState(false);

    const openConfirmBox = () =>{
        setConfirmBox(true)
        console.log(confirmBox)
    }

    const toggleCartBox = () => {
        setIsCartOpen(!isCartOpen);
        console.log("check")
    };
    const closeCartBox = () =>{
        setIsCartOpen(false)
    }
    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
                );
            }
            return [...prevItems, item];
        });
    };

    const updateCartItemQuantity = (itemId, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: Math.max(0, quantity) } : item
            )
        );
    };

    const shippingPrice = 50;
    const vatRate = 20; // Assuming a 20% VAT rate
    const calculateVAT = (totalPrice) => {
        return totalPrice * (vatRate / 100);
    };
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);  // Calculate total price of items in the cart
    const vatAmount = calculateVAT(totalPrice)/1000;// Calculate VAT
    const grandTotal = totalPrice + shippingPrice + vatAmount; // Calculate Grand Total

    const clearCart = () => {
        setCartItems([]);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, clearCart,toggleCartBox,openConfirmBox,confirmBox , isCartOpen,closeCartBox ,shippingPrice,totalPrice,vatAmount,grandTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
