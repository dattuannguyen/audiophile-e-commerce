import logo from "../assets/shared/desktop/logo.svg"
import facebook from "../assets/shared/desktop/icon-facebook.svg"
import twitter from "../assets/shared/desktop/icon-twitter.svg"
import insta from "../assets/shared/desktop/icon-instagram.svg"

export default function Footer(){
    return(
        <>
            <div className="relative xl:mt-[200px] md:mt-[96px] mt-[120px] xl:h-[365px] md:h-[400px] h-[654px] bg-matteBlack text-white">
                <div className="pt-[52px] md:pt-[60px] md:px-[39px] xl:pt-[75px] xl:px-[165px] flex flex-col xl:flex-row justify-center items-center md:justify-items-start md:items-start xl:justify-between md:gap-[32px] gap-[48px] ">
                    <img src={logo} alt="" className="w-[143px] h-[25px]"/>
                    <ul className="flex flex-col md:flex-row font-manropeBold text-[13px] tracking-[2px] uppercase gap-[16px] md:gap-[34px]">
                        <li className="cursor-pointer hover:text-darkOrange">Home</li>
                        <li className="cursor-pointer hover:text-darkOrange">Headphones</li>
                        <li className="cursor-pointer hover:text-darkOrange">Speakers</li>
                        <li className="cursor-pointer hover:text-darkOrange">Earphones</li>
                    </ul>
                </div>
                <div className="pt-[48px] px-[24px] md:pt-[32px] md:px-[39px] xl:pt-[36px] xl:px-[165px]">
                    <p className="xl:w-[540px] md:w-[689px] font-manropeMedium leading-[25px] opacity-50 text-[15px] items-center md:items-start text-center md:text-start">
                        Audiophile is an all in one stop to fulfill your audio needs.
                        We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
                        Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                </div>
                <div className="flex flex-col items-center md:flex-row  md:justify-between md:items-center pt-[48px] md:pt-[80px] md:px-[39px] xl:pt-[56px] xl:px-[165px] gap-[48px]">
                    <p className=" font-manropeBold leading-[25px] opacity-50 text-[15px]">
                        Copyright 2021. All Rights Reserved
                    </p>
                    <div className="flex gap-[16px] flex-row-reverse">
                        <img src={insta} alt="" className="cursor-pointer hover:fill-darkOrange"/>
                        <img src={twitter} alt="" className="cursor-pointer hover:fill-darkOrange"/>
                        <img src={facebook} alt="" className="cursor-pointer hover:fill-darkOrange"/>
                    </div>
                </div>
            </div>
        </>
    )
}
//