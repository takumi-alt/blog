import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/app.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
    return (
        <>
             <div className="bg-regal-white z-30 w-full pt-4">
                <div className="bg-regal-white flex justify-center h-12 sm:h-14 leading-20 md:w-4/5 mx-auto">
                    {/* home */}
                    <Link to={`/blog/1`}  className="nav-link bg-regal-beige ml-2">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <AiOutlineHome className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">home</button>
                    </Link>
                    {/* programming */}
                    <Link to={`/blog/category/プログラミング`}  className="nav-link bg-regal-beige">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <FaLaptopCode className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">programming</button>
                    </Link>
                    {/* contact */}
                    <Link to={`/blog/contact`}  className="nav-link bg-regal-beige">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <AiOutlineMail className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">contact</button>
                    </Link>
                    {/* profile */}
                    <Link to={`/blog/profile`}  className="nav-link bg-regal-beige">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <CgProfile className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">profile</button>
                    </Link>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                    <path fill="#f8f5f2" fill-opacity="1" d="M 1440 21.21 V 120 H 0 V 21.21 C 120 35.07 240 42 360 42 s 240 -6.93 360 -20.79 c 88.328 -8.794 154.574 -14.333 198.738 -16.618 A 3120.56 3120.56 0 0 1 1080 0.42 c 120 0 240 6.93 360 20.79 Z"></path>
                </svg>
            </div>
        </>
    )
}

export default Navbar
