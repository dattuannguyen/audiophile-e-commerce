import cart from "/src/assets/shared/desktop/icon-cart.svg";
import logo from "/src/assets/shared/desktop/logo.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeNavbar = () => {
        setIsOpen(false);
    };
    return (
        <>
            <nav className="px-[24px] py-[32px] xl:px-[165px] md:px-[39px] xl:py-[32px] md:py-[32px] text-white absolute w-full">
                <div className="flex justify-between pb-[32px] border-b-mateGray border-b-[0.5px] items-center">
                    <div className="xl:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                    <div className="md:flex-1">
                        <Link to="/">
                            <img src={logo} alt="Logo"  className="md:pl-[40px] xl:pl-0"/>
                        </Link>
                    </div>
                    <div className="md:shrink-0 hidden xl:block">
                        <ul className="flex flex-grow justify-center items-center gap-8 text-trueWhite font-manropeBold uppercase text-[13px]">
                            <Link to="/" className="hover:cursor-pointer hover:text-darkOrange">Home</Link>
                            <Link to="/headphones" className="hover:cursor-pointer hover:text-darkOrange">Headphones</Link>
                            <Link to="/speakers" className="hover:cursor-pointer hover:text-darkOrange">Speakers</Link>
                            <Link to="/earphones" className="hover:cursor-pointer hover:text-darkOrange">Earphones</Link>
                        </ul>
                    </div>
                    <div className="md:flex-1 flex justify-end">
                        <img src={cart} alt="cart" />
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="xl:hidden fixed w-full  z-10">
                        <ul className="flex flex-col space-y-4 text-trueWhite font-manropeBold uppercase  bg-matteBlack text-[16px] bg-opacity-50 backdrop-blur-sm p-4">
                            <Link to="/" className="hover:cursor-pointer hover:text-darkOrange" onClick={closeNavbar}>Home</Link>
                            <Link to="/headphones" className="hover:cursor-pointer hover:text-darkOrange" onClick={closeNavbar}>Headphones</Link>
                            <Link to="/speakers" className="hover:cursor-pointer hover:text-darkOrange" onClick={closeNavbar}>Speakers</Link>
                            <Link to="/earphones" className="hover:cursor-pointer hover:text-darkOrange" onClick={closeNavbar}>Earphones</Link>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
