import { useContext, useState } from 'react';
import confirmImg from "../assets/checkout/icon-order-confirmation.svg";
import CartContext from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

const ConfirmBox = () => {
    const { cartItems, grandTotal } = useContext(CartContext);
    const [showItems, setShowItems] = useState(false);

    const toggleShowItems = () => {
        setShowItems(!showItems);
    };

    const formatPrice = (price) => {
        return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/\.00$/, '');
    };

    return (
        <>
            {/* Dark overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

            {/* Centered confirmation box */}
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="p-[48px] bg-white rounded-lg max-w-lg mx-4">
                    <img src={confirmImg} alt="" className="pb-[33px]" />
                    <p className="font-manropeBold uppercase text-[24px] xl:text-[32px] w-[284px] leading-[36px] tracking-[1.14px] pb-[24px]">Thank you for your order</p>
                    <p className="font-manropeMedium text-[15px] leading-[25px] opacity-50 pb-7">You will receive an email confirmation shortly.</p>
                    <div className="pb-10 grid grid-cols-1 md:grid-cols-5">
                        <div className="items bg-matteGray col-span-3 rounded-l-xl">
                            <ul className="pt-[31px] px-[24px]">
                                <li key={cartItems[0].index} className="flex justify-between items-center pb-[24px]">
                                    <div>
                                        <img src={cartItems[0].imageCart} alt="" className="w-16 h-16" />
                                    </div>
                                    <div className="flex flex-1 flex-col pl-4">
                                        <p className="font-manropeBold uppercase font-[15px] ">{cartItems[0].cartName}</p>
                                        <p className="font-manropeBold font-[14px] opacity-50">{formatPrice(cartItems[0].price)}</p>
                                    </div>
                                    <p className="font-manropeMedium opacity-50">x{cartItems[0].quantity}</p>
                                </li>
                            </ul>
                            {showItems === true &&
                                <ul className="px-[24px]">
                                    {cartItems.slice(1).map((item, index) => (
                                        <li key={index} className="flex justify-between items-center pb-[24px]">
                                            <div>
                                                <img src={item.imageCart} alt="" className="w-16 h-16" />
                                            </div>
                                            <div className="flex flex-1 flex-col pl-4">
                                                <p className="font-manropeBold uppercase font-[15px] ">{item.cartName}</p>
                                                <p className="font-manropeBold font-[14px] opacity-50">{formatPrice(item.price)}</p>
                                            </div>
                                            <p className="font-manropeMedium opacity-50">x{item.quantity}</p>
                                        </li>
                                    ))}
                                </ul>
                            }
                            <p onClick={toggleShowItems} className="px-[24px] py-[16px] border-t-2 flex justify-center cursor-pointer">
                                {showItems ? "View less" : "Show more item(s)"}
                            </p>
                        </div>
                        <div className="totalprice bg-black px-[32px] py-[15px] col-span-2 flex justify-center flex-col rounded-r-xl">
                            <p className="font-manropeBold text-white opacity-50 uppercase">Grand Total</p>
                            <p className="font-manropeBold text-white">{formatPrice(grandTotal)}</p>
                        </div>
                    </div>
                    <Link to="/" className="btn1 w-full">Back to Home</Link>
                </div>
            </div>
        </>
    );
};

export default ConfirmBox;
