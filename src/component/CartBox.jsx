
import { useContext } from 'react';
import CartContext from "../context/CartContext.jsx";

const CartBox = () => {
    const { cartItems, clearCart, updateCartItemQuantity } = useContext(CartContext);

    const formatPrice = (price) => {
        return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/\.00$/, '');
    };

    const increaseQuantity = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        updateCartItemQuantity(itemId, item.quantity + 1);
    };

    const decreaseQuantity = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        updateCartItemQuantity(itemId, item.quantity - 1);
    };

    return (
        <div className="absolute top-[80px] xl:left-0 w-[377px] h-fit bg-matteWhite z-50 px-[28px] py-[32px] m-[24px] rounded-lg">
            <div className="flex justify-between items-center">
                <h2 className="font-manropeBold text-[18px] uppercase tracking-[1.28px]">Cart ({cartItems.length})</h2>
                <button className="font-manropeMedium text-[15px] leading-[25px] opacity-50" onClick={clearCart}>Remove all</button>
            </div>

            <ul className="pt-[31px]">
                {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between items-center pb-[24px]">
                        <div>
                            <img src={item.imageCart} alt="" className="w-16 h-16"/>
                        </div>
                        <div className="flex flex-1 flex-col pl-4">
                            <p className="font-manropeBold uppercase font-[15px] ">{item.cartName}</p>
                            <p className="font-manropeBold font-[14px] opacity-50">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex justify-center items-center gap-[15px] btn3">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center">
                <p className="font-manropeMedium uppercase opacity-50 text-[15px]">Total</p>
                <p className="font-manropeBold text-[18px]">
                    {formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))}
                </p>
            </div>
            <button className="btn1 w-full mt-[24px]">Checkout</button>
        </div>
    );
};

export default CartBox;
