import pattern from "../assets/home/desktop/pattern-circles.svg"
import speakerZX9 from "../assets/home/desktop/image-speaker-zx9.png"
// import bestGear from "../assets/shared/desktop/image-best-gear.jpg"
// import bestGearTablet from "../assets/shared/tablet/image-best-gear.jpg"
// import bestGearMobile from "../assets/shared/mobile/image-best-gear.jpg"
// import IntroductSection from "./IntroductionSection.jsx";

import {Link} from "react-router-dom";

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
                            <Link to="/product/zx9-speaker" className="mt-[40px] btn1 bg-black uppercase hover:bg-[#4C4C4C]">See Product</Link>
                        </div>
                    </div>
                </div>
                {/*blog2*/}
                <div className="relative xl:mt-12 md:mt-[32px] mt-[32px] h-[320px] xl:bg-zx7 md:bg-zx7-tablet bg-zx7-mobile bg-cover bg-center rounded-lg">
                    <div className="relative pt-[101px] pl-[24px] md:pl-[95px]">
                        <h1 className="text-[28px] font-manropeBold tracking-[2px] uppercase mb-[32px]">ZX7 Speaker</h1>
                        <Link to="/product/zx7-speaker" className="btn2 ">See Product</Link>
                    </div>
                </div>
                {/*blog3*/}
                <div className="relative mt-12 grid md:grid-cols-2  h-[424px] md:h-[320px] gap-[30px]">
                    <div className="md:bg-earphoneYx1 bg-earphoneYx1-mobile bg-center bg-cover rounded-lg h-[200px] md:h-[320px]"></div>
                    <div className="bg-matteGray rounded-lg h-[200px] md:h-[320px]">
                        <div className="relative pt-[41px] pl-[24px] md:pt-[101px] xl:pl-[95px] md:pl-[41px] ">
                            <h1 className="text-[28px] font-manropeBold uppercase tracking-[2px] mb-[32px]">YX1 earphones</h1>
                            <Link to="/product/yx1-earphones" className="btn2 ">See product</Link>
                        </div>
                    </div>
                </div>
                {/*describe*/}
            </div>
        </>
    )
}