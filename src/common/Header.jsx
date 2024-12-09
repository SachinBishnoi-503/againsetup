import React, { useEffect, useState } from 'react';
import { NAV_ITEMS_DATA } from '../Utils/Helper';
import CustomButton from '../common/CustomButton'
import headerlogo from '../assets/images/webp/header-logo.webp'

const Header = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                document.body.style.overflow = show ? "" : "hidden";
            } else {
                document.body.style.overflow = "";
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
        };
    }, [show]);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        if (window.innerWidth < 992) {
            setShow(!show)
        }
    };

    return (
        <div className={`${!show ? "min-h-screen " : ""} `}>
            <div className="flex justify-between items-center py-4 container ">
                <a href="/">
                    <img className='pointer-events-none max-md:max-w-[120px] md:max-w-[207px] max-min-h-[40px] md::min-h-[72px]' src={headerlogo } />
                </a>
                <div className={`flex flex-col lg:flex-row items-center max-lg:z-20 gap-[24px] max-lg:gap-6 max-lg:fixed max-lg:justify-center duration-300 ease-linear top-0 max-lg:-right-full bg-blue-500 lg:bg-transparent max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                    }`}>
                    {NAV_ITEMS_DATA.map((items, index) => (
                        <a key={index} href={items.path} className='font-normal text-custom-xl text-white leading-custom-lg'>{items.text}</a>
                    ))}
                </div>
                <CustomButton text={'Get Started'} />

                <button
                    aria-label="Toggle Navigation Menu"
                    className="cursor-pointer relative w-8 h-7 z-[90] lg:hidden"
                    onClick={() => setShow(!show)}>
                    {[...Array(3)].map((_, i) => (
                        <span key={i} className={`w-full h-1 rounded-xl bg-white block duration-300 ease-linear absolute ${i === 0 ? "top-0 left-0" : i === 1 ? "top-1/2 -translate-y-1/2" : "bottom-0 left-0"} ${i === 0 && !show ? "rotate-45 top-1/2 -translate-y-1/2" : ""} ${i === 2 && !show ? "-rotate-45 top-1/2 -translate-y-1/2 bottom-auto" : ""} ${i === 1 && !show ? "hidden" : "flex"}`}></span>
                    ))}
                </button>
            </div>
        </div>

    );
};

export default Header;
