import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";

export default function Header () {
    return(
        <>
            <div className=" bg-hero-mobile h-[600px] xl:bg-hero-desktop md:bg-hero-tablet bg-cover bg-no-repeat bg-center  lg:h-[850px] md:h-[729px] w-full flex flex-col ">
                <div className="flex-1">
                    <Navbar/>
                </div>
                <div className="shrink-0 xl:flex xl:items-center ">
                    <Hero/>
                </div>
                <div className="flex-1"></div>
            </div>
        </>
    )
}