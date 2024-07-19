import pattern from "../assets/home/desktop/pattern-circles.svg"
import speakerZX9 from "../assets/home/desktop/image-speaker-zx9.png"
import bestGear from "../assets/shared/desktop/image-best-gear.jpg"
import bestGearTablet from "../assets/shared/tablet/image-best-gear.jpg"
import bestGearMobile from "../assets/shared/mobile/image-best-gear.jpg"


export default function Blogs(){
    return(
        <>
            <div className="mt-[120px] mx-[24px] xl:mt-[168px] md:mt-[96px] xl:mx-[165px] md:mx-[39px] h-full flex flex-col ">
                {/*blog1*/}
                <div className=" relative h-[600px] xl:h-[560px] md:h-[720px] bg-darkOrange overflow-hidden rounded-lg">
                    <img src={pattern} alt="" className="absolute -top-40"/>
                    <div className="flex flex-col justify-center items-center xl:pt-[133px] md:pt-[52px] pt-[55px]">
                        <div>
                            <img src={speakerZX9} alt="" className="xl:absolute w-[172.25px] h-[207px] relative xl:w-[373px] md:w-[197px] xl:h-[456px] md:h-[234px] xl:left-[154.49px] xl:-bottom-2 "/>
                        </div>
                        <div className="xl:absolute md:relative xl:right-[95px] w-[349px] h-[303px] flex flex-col items-center xl:items-start text-center xl:text-start md:pt-[64px] xl:pt-[133px] pt-[32px]">
                            <h1 className="text-white font-manropeBold w-[180px] text-[36px] md:text-[56px] md:w-[261px] uppercase leading-[40px] md:leading-[58px] tracking-[1.29px] md:tracking-[2px]">ZX9 Speaker</h1>
                            <p className="pt-[24px] text-white font-manropeMedium text-[15px] leading-[25px] tracking-[0px] opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <button className="mt-[40px] btn1 bg-black uppercase hover:bg-[#4C4C4C]">See Product</button>
                        </div>
                    </div>
                </div>
                {/*blog2*/}
                <div className="relative xl:mt-12 md:mt-[32px] mt-[32px] h-[320px] xl:bg-zx7 md:bg-zx7-tablet bg-zx7-mobile bg-cover bg-center rounded-lg">
                    <div className="relative pt-[101px] pl-[24px] md:pl-[95px]">
                        <h1 className="text-[28px] font-manropeBold tracking-[2px] uppercase">ZX7 Speaker</h1>
                        <button className="mt-[32px] btn2  ">See Product</button>
                    </div>
                </div>
                {/*blog3*/}
                <div className="relative mt-12 grid md:grid-cols-2  h-[424px] md:h-[320px] gap-[30px]">
                    <div className="md:bg-earphoneYx1 bg-earphoneYx1-mobile bg-center bg-cover rounded-lg h-[200px] md:h-[320px]"></div>
                    <div className="bg-matteGray rounded-lg h-[200px] md:h-[320px]">
                        <div className="relative pt-[41px] pl-[24px] md:pt-[101px] xl:pl-[95px] md:pl-[41px] ">
                            <h1 className="text-[28px] font-manropeBold uppercase tracking-[2px]">YX1 earphones</h1>
                            <button className="btn2 mt-[32px]">See product</button>
                        </div>
                    </div>
                </div>
                {/*describe*/}
                <div className="relative xl:pt-[200px] pt-[120px]  flex flex-col xl:flex-row justify-between xl:gap-[125px] ">
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
            </div>
        </>
    )
}