import {Link} from "react-router-dom";

export default function Header (){
    return(
        <>
            <div className="bg-hero-mobile h-[600px] xl:bg-hero-desktop md:bg-hero-tablet bg-cover bg-no-repeat bg-center xl:h-[850px] md:h-[729px] w-full  flex justify-center items-center xl:justify-start">
                <div className="xl:px-[165px]">
                        <div className='w-[379px] flex flex-col xl:items-start items-center justify-center text-center xl:text-start  gap-[16px] xl:gap-[24px] '>
                            <h3 className="text-white opacity-[49.64%] text-[14px] tracking-[10px] font-manropeRegular uppercase">New Product</h3>
                            <p className="text-trueWhite text-[36px] md:text-[56px] tracking-[2px] leading-[58px] font-manropeBold uppercase w-[396px]">XX99 MarkII Headphones</p>
                            <p className="text-[15px] w-[328px] md:w-[349px] font-manropeMedium  text-white opacity-[75%] leading-[25px]">Experience natural, lifelike audio and exceptional
                                build quality made for the passionate music enthusiast</p>
                            <Link to="/product/xx99-mark-ii" className="mt-2 btn1">See Product</Link>
                        </div>
                </div>
            </div>

        </>
    )
}