// src/components/Checkout.js

import  {useContext, useState} from 'react';
import CartContext from "../context/CartContext.jsx";
import * as Form from '@radix-ui/react-form';
import * as RadioGroup from '@radix-ui/react-radio-group';
import cashOnImg from "../assets/checkout/icon-cash-on-delivery.svg"
import ConfirmBox from "../component/ConfirmBox.jsx";

const CheckoutPage = () => {
    const {cartItems,shippingPrice,totalPrice,vatAmount,grandTotal} = useContext(CartContext)
    const [eleNumber,setEleNumber] = useState(false)
    const [cashOn,setCashOn]= useState(false)

    const [showConfirm, setShowConfirm] = useState(false); // State to control confirmation component visibility

    const openConfirmBox = () => {
        setShowConfirm(true);
    };

    const handleENumber = () => {
        setEleNumber(true);
        setCashOn(false)
    };

    const handleCash = () => {
        setEleNumber(false);
        setCashOn(true)
    };

    const formatPrice = (price) => {
        return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/\.00$/, '');
    };
    // Function to calculate VAT



    return (
        <>
            <div className="bg-matteGray h-fit ">
                <div className="h-[90px] bg-black"></div>
                    <div className="main mx-[24px] md:mx-[39px] xl:mx-[165px] pb-5 ">
                        <div>
                            <button className="my-[16px] font-manropeMedium font-[15px] opacity-[50%] " onClick={() => window.history.back()}>Go Back</button>
                        </div>
                        <div className="grid grid-cols-1  xl:grid-cols-3 xl:gap-[30px] gap-y-7  ">
                            <div className="col-span-2 bg-white checkout h-fit ">
                                <div className="mx-[24px] py-[54px]">
                                    <h1 className="font-manropeBold text-[18px] md:text-[32px] uppercase tracking-[1.14px]">Checkout</h1>
                                    <div className="billing ">
                                        <p className="pt-[41px] pb-[16px]  font-manropeBold text-lightOrange uppercase tracking-[0.93px]">Billing Details</p>
                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                            <div>
                                                <Form.Root className="w-full">
                                                    <Form.Field className="grid mb-[10px]" name="email">
                                                        <div className="flex items-baseline justify-between">
                                                            <Form.Label className=" text-black text-[15px] font-medium leading-[35px]">Name</Form.Label>
                                                            <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                Please enter your name
                                                            </Form.Message>
                                                        </div>
                                                        <Form.Control asChild>
                                                            <input
                                                                className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                type="text"
                                                                required
                                                                placeholder="Alexei Ward"
                                                            />
                                                        </Form.Control>
                                                    </Form.Field>
                                                </Form.Root>
                                            </div>
                                            <div>
                                                <Form.Root className="w-full">
                                                    <Form.Field className="grid mb-[10px]" name="email">
                                                        <div className="flex items-baseline justify-between">
                                                            <Form.Label className=" text-black text-[15px] font-medium leading-[35px] " >Email</Form.Label>
                                                            <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="typeMismatch">
                                                                Wrong format
                                                            </Form.Message>
                                                            <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                Please enter your password
                                                            </Form.Message>
                                                        </div>
                                                        <Form.Control asChild>
                                                            <input
                                                                className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                type="email"
                                                                required
                                                                placeholder="alexei@gmail.com"

                                                            />
                                                        </Form.Control>
                                                    </Form.Field>
                                                </Form.Root>
                                            </div>
                                            <div>
                                                <Form.Root className="w-full">
                                                    <Form.Field className="grid mb-[10px]" name="email">
                                                        <div className="flex items-baseline justify-between">
                                                            <Form.Label className=" text-black text-[15px] font-medium leading-[35px]">Phone Number</Form.Label>
                                                            <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                Please enter your phone number
                                                            </Form.Message>
                                                        </div>
                                                        <Form.Control asChild>
                                                            <input
                                                                className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                type="tel"
                                                                required
                                                                placeholder="+1 202-555-0136"
                                                            />
                                                        </Form.Control>
                                                    </Form.Field>
                                                </Form.Root>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="shipping">
                                        <p className="pt-[41px] pb-[16px] font-manropeBold text-lightOrange uppercase tracking-[0.93px]">Shipping info</p>
                                        <div>
                                            <Form.Root className="w-full">
                                                <Form.Field className="grid mb-[10px]" name="email">
                                                    <div className="flex items-baseline justify-between">
                                                        <Form.Label className=" text-black text-[15px] font-medium leading-[35px]">Address</Form.Label>
                                                        <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                            Please enter your address
                                                        </Form.Message>
                                                    </div>
                                                    <Form.Control asChild>
                                                        <input
                                                            className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                            type="text"
                                                            required
                                                            placeholder="1137 Williams Avenue"
                                                        />
                                                    </Form.Control>
                                                </Form.Field>
                                            </Form.Root>
                                        </div>
                                        <div className="">
                                            <div>
                                                <Form.Root className="w-full">
                                                    <Form.Field className="grid mb-[10px]" name="email">
                                                        <div className="flex items-baseline justify-between">
                                                            <Form.Label className=" text-black text-[15px] font-medium leading-[35px] " >ZIP Code</Form.Label>
                                                            <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                ZIP code
                                                            </Form.Message>
                                                        </div>
                                                        <Form.Control asChild>
                                                            <input
                                                                className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                type="email"
                                                                required
                                                                placeholder="10001"
                                                                maxLength={6}

                                                            />
                                                        </Form.Control>
                                                    </Form.Field>
                                                </Form.Root>
                                            </div>
                                            <div>
                                                <Form.Root className="w-full">
                                                    <Form.Field className="grid mb-[10px]" name="email">
                                                        <div className="flex items-baseline justify-between">
                                                            <Form.Label className=" text-black text-[15px] font-medium leading-[35px]">City</Form.Label>
                                                            <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                Please enter your city
                                                            </Form.Message>
                                                        </div>
                                                        <Form.Control asChild>
                                                            <input
                                                                className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                type="text"
                                                                required
                                                                placeholder="New York"
                                                            />
                                                        </Form.Control>
                                                    </Form.Field>
                                                </Form.Root>
                                            </div>
                                            <div>
                                                <Form.Root className="w-full">
                                                    <Form.Field className="grid mb-[10px]" name="email">
                                                        <div className="flex items-baseline justify-between">
                                                            <Form.Label className=" text-black text-[15px] font-medium leading-[35px]">Country</Form.Label>
                                                            <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                Please enter your country
                                                            </Form.Message>
                                                        </div>
                                                        <Form.Control asChild>
                                                            <input
                                                                className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                type="text"
                                                                required
                                                                placeholder="United States"
                                                            />
                                                        </Form.Control>
                                                    </Form.Field>
                                                </Form.Root>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="payment">
                                        <p className="pt-[41px] pb-[16px] font-manropeBold text-lightOrange uppercase tracking-[0.93px]">Payment Details</p>
                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                            <p className="mb-[17px] font-manropeBold text-[12px]">Payment Method</p>
                                            <div>
                                                <RadioGroup.Root className="space-y-4" defaultValue="" aria-label="Payment Method"  >
                                                    <RadioGroup.Item
                                                        className="w-full border rounded-lg flex items-center p-4 text-[15px] leading-none focus:border-lightOrange"
                                                        value="e-Money"
                                                        id="r1"
                                                        onClick={handleENumber}
                                                    >
                                                        <div className="flex items-center">
                                                            <div className="flex items-center justify-center w-4 h-4 mr-4 border border-gray-300 rounded-full">
                                                                <RadioGroup.Indicator className="w-2 h-2 bg-orange-500 rounded-full" />
                                                            </div>
                                                            <span className="ml-[16px] font-manropeBold tracking-[-0.25px] text-[14px]">e-Money</span>
                                                        </div>
                                                    </RadioGroup.Item>

                                                    <RadioGroup.Item
                                                        className="w-full border rounded-lg flex items-center p-4 text-[15px] leading-none focus:border-lightOrange"
                                                        value="Cash on Delivery"
                                                        id="r2"
                                                        onClick={handleCash}
                                                    >
                                                        <div className="flex items-center">
                                                            <div className="flex items-center justify-center w-4 h-4 mr-4 border border-gray-300 rounded-full">
                                                                <RadioGroup.Indicator className="w-2 h-2 bg-orange-500 rounded-full" />
                                                            </div>
                                                            <span className="ml-[16px] font-manropeBold tracking-[-0.25px] text-[14px]">Cash on Delivery</span>
                                                        </div>
                                                    </RadioGroup.Item>
                                                </RadioGroup.Root>
                                            </div>
                                        </div>

                                        {eleNumber === true
                                            &&
                                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                                <div>
                                                    <Form.Root className="w-full">
                                                        <Form.Field className="grid mb-[10px]" name="e-number">
                                                            <div className="flex items-baseline justify-between">
                                                                <Form.Label className=" text-black text-[15px] font-medium leading-[35px] " >e-Money Number</Form.Label>
                                                                <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                    Please enter your e-money number
                                                                </Form.Message>
                                                            </div>
                                                            <Form.Control asChild>
                                                                <input
                                                                    className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                    type="text"
                                                                    required
                                                                    placeholder="238521993"
                                                                    maxLength={9}

                                                                />
                                                            </Form.Control>
                                                        </Form.Field>
                                                    </Form.Root>
                                                </div>
                                                <div>
                                                    <Form.Root className="w-full">
                                                        <Form.Field className="grid mb-[10px]" name="e-pin">
                                                            <div className="flex items-baseline justify-between">
                                                                <Form.Label className=" text-black text-[15px] font-medium leading-[35px]">e-Money PIN</Form.Label>
                                                                <Form.Message className="text-[13px] text-darkOrange opacity-[0.8]" match="valueMissing">
                                                                    Please enter your e-money PIN
                                                                </Form.Message>
                                                            </div>
                                                            <Form.Control asChild>
                                                                <input
                                                                    className="border-matteGray border-2 w-full inline-flex h-[56px] appearance-none items-center justify-center rounded-lg px-[24px] text-[14px] text-black outline-none focus:border-lightOrange "
                                                                    type="text"
                                                                    required
                                                                    placeholder="6891"
                                                                    maxLength={4}
                                                                />
                                                            </Form.Control>
                                                        </Form.Field>
                                                    </Form.Root>
                                                </div>
                                            </div>
                                        }
                                        {cashOn === true
                                            &&
                                            <div className="flex items-center gap-5 pt-7">
                                                <img src={cashOnImg} alt="cash-on-img"/>
                                                <p className="font-manropeMedium text-[15px] leading-[25px]">
                                                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                                </p>
                                            </div>

                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="summary bg-white mb-[20px] w-full h-fit ">
                                <div className="m-[24px] py-[54px]">
                                    <h1 className="font-manropeBold text-[18px] md:text-[32px] uppercase tracking-[1.14px]">Summary</h1>
                                    <div>
                                        <ul className="pt-[31px]">
                                            {cartItems.map((item, index) => (
                                                <li key={index} className="flex justify-between items-center pb-[24px]">
                                                    <div>
                                                        <img src={item.imageCart} alt="" className="w-16 h-16"/>
                                                    </div>
                                                    <div className="flex flex-col flex-1 pl-4">
                                                        <p className="font-manropeBold uppercase font-[15px] ">{item.cartName}</p>
                                                        <p className="font-manropeBold font-[14px] opacity-50">{formatPrice(item.price)}</p>
                                                    </div>
                                                    <p className="font-manropeBold font-[14px] opacity-50">x{item.quantity}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-manropeMedium uppercase opacity-50 text-[15px]">Total</p>
                                        <p className="font-manropeBold text-[18px] tracking-[1.29px]">
                                            {formatPrice(totalPrice)}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-manropeMedium uppercase opacity-50 text-[15px]">Shipping</p>
                                        <p className="font-manropeBold text-[18px] tracking-[1.29px]">
                                            {formatPrice(shippingPrice)}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mb-5">
                                        <p className="font-manropeMedium uppercase opacity-50 text-[15px]">VAT (Included)</p>
                                        <p className="font-manropeBold text-[18px] tracking-[1.29px]">
                                            {formatPrice(vatAmount)}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mb-5">
                                        <p className="font-manropeMedium uppercase opacity-50 text-[15px]">Grand Total</p>
                                        <p className="font-manropeBold text-[18px] tracking-[1.29px] text-darkOrange ">
                                            {formatPrice(grandTotal)}
                                        </p>
                                    </div>
                                    <button  onClick={openConfirmBox}  className="w-full btn1">Continue & Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {showConfirm && <ConfirmBox/>}
        </>
    );
};

export default CheckoutPage;
