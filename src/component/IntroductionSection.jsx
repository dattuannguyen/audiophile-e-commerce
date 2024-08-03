import React from 'react';
import bestGearMobile from "../assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import bestGear from "../assets/shared/desktop/image-best-gear.jpg";

const IntroductionSection = (props) => {
    return(
        <>
            <div className="relative xl:pt-[200px] pt-[120px]  flex flex-col xl:flex-row justify-between xl:gap-[125px] mx-[39px] xl:mx-[165px] ">
                <img src={bestGearMobile} alt="" className="block sm:hidden "/>
                <img src={bestGearTablet} alt="" className="hidden sm:block xl:hidden"/>
                <div className=" xl:pt-[147px] md:pt-[63px] pt-[40px] flex flex-col text-center xl:text-start items-center xl:items-start justify-center  ">
                    <h1 className="w-[327px] md:w-[445px] font-manropeBold text-[28px] md:text-[40px] tracking-[1.43px] leading-[44px] uppercase">Bringing you the <span className="text-darkOrange">best</span> audio gear</h1>
                    <p className="pt-[32px] w-[327px] md:w-[445px] text-[15px] font-manropeMedium leading-[25px] opacity-50 ">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                        We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                        Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <img src={bestGear} alt="" className="rounded-lg hidden xl:block"/>
            </div>
        </>
    )
}



export default IntroductionSection;