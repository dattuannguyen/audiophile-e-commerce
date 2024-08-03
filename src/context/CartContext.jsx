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

import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

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

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
