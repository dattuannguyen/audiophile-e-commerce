export default function Hero (){
    return(
        <>
            <div className="xl:px-[165px] flex items-center justify-center  ">
                <div className='w-[379px] flex flex-col xl:items-start items-center justify-center text-center xl:text-start  gap-6'>
                    <h3 className="text-white opacity-[49.64%] text-[14px] tracking-[10px] font-manropeRegular uppercase">New Product</h3>
                    <p className="text-trueWhite text-[36px] md:text-[56px] tracking-[2px] leading-[58px] font-manropeBold uppercase w-[396px]">XX99 MarkII Headphones</p>
                    <p className="text-[15px] w-[328px] md:w-[349px] font-manropeMedium  text-white opacity-[75%] leading-[25px]">Experience natural, lifelike audio and exceptional
                        build quality made for the passionate music enthusiast</p>
                    <button className="btn1 mt-10">See Product</button>
                </div>
             </div>
        </>
    )
}