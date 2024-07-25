import React from 'react';
import Products from "./Products/Products.jsx";
import Item from "./Item.jsx";

const Category = ({title,product}) => {
     return(
        <>
            <div className="h-[192px] md:h-[336px] flex justify-center pt-[122px] md:pt-[195px] bg-black ">
                <h1 className="font-manropeBold text-[28px] md:text-[40px] text-white uppercase tracking-[2px]">{title}</h1>
            </div>
            <div>
                <Item items={product}/>
            </div>
            <Products/>

        </>
     );
}

export default Category;