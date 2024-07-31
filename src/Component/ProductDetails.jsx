// src/Component/ProductDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Products from "./Products/Products.jsx";

const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className="product-detail">
                <div  className="h-[88px] bg-black "></div>
                <div className="mx-[24px] md:mx-[39px] xl:mx-[165px]">
                    <button className="my-[24px] font-manropeMedium font-[15px] opacity-[50%]" onClick={() => window.history.back()}>Go Back</button>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-[69px]">
                        <div>
                            <img src={product.imageProductMobile} alt="" className="w-full h-[352px] object-cover mb-4 md:hidden" />
                            <img src={product.imageProductTablet} alt="" className="w-full h-[480px] object-cover mb-4 hidden md:block xl:hidden" />
                            <img src={product.imageProductDesktop} alt="" className="h-[560px] w-[540px] object-cover mb-4 hidden xl:block" />
                        </div>
                        <div>
                            {product.new !== "" &&
                                <p className="font-manropeRegular text-[14px] text-darkOrange tracking-[10px] uppercase pt-[32px] pb-[24px]">
                                    {product.new}
                                </p>
                            }
                            <p className="font-manropeBold text-[29px] tracking-[1px] w-[327px] uppercase">{product.name}</p>
                            <p className="text-black text-[15px] leading-[25px] font-manropeMedium opacity-[50%] pt-[24px]">{product.description}</p>
                            <p className="font-manropeBold text-[18px]  tracking-[1.29px] w-[327px] pt-[24px]">$ {product.price}</p>
                            <button className="btn1 mt-[24px]">Add to Cart</button>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:justify-between">
                        <div className="product-feature pt-[88px] xl:w-[635px]">
                            <h1 className="font-manropeBold text-[24px] uppercase tracking-[0.86px]">Features</h1>
                            {product.features.map((feature, index) => (
                                <p  className="text-black text-[15px] leading-[25px] font-manropeMedium opacity-[50%] pt-[24px] " key={index}>{feature}</p>
                            ))}
                        </div>
                        <div className="product-in-the-box pt-[88px] flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-col">
                            <h2 className="pb-[24px] font-manropeBold text-[24px] leading-[36px] tracking-[0.8px] uppercase">In The Box</h2>
                            <ul className="flex flex-col gap-[8px]">
                                {product.inTheBox.map((item, index) => (
                                    <li key={index} className="flex text-[15px]">
                                        <span className="text-darkOrange mr-5">{item.quantity}</span>
                                        <span className="opacity-50">{item.item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Products/>
        </>


    );
};

export default ProductDetails;
