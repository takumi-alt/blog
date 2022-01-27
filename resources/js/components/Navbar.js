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
             <div className="bg-regal-white z-30 w-full mt-3">
                <div className="bg-regal-white flex justify-center h-12 sm:h-16 leading-20 md:w-4/5 mx-auto">
                    {/* home */}
                    <Link to={`/blog/1`}  className="nav-link ml-2">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <AiOutlineHome className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">home</button>
                    </Link>
                    {/* programming */}
                    <Link to={`/blog/category/プログラミング`}  className="nav-link">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <FaLaptopCode className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">programming</button>
                    </Link>
                    {/* contact */}
                    <Link to={`/blog/contact`}  className="nav-link">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <AiOutlineMail className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">contact</button>
                    </Link>
                    {/* profile */}
                    <Link to={`/blog/profile`}  className="nav-link">
                        <button className="nav-icon transform group-hover:translate-y-12">
                            <CgProfile className="mx-auto w-6 h-6 md:w-8 md:h-8 text-regal-black" />
                        </button>
                        <button className="nav-button transform group-hover:translate-y-12 group-hover:text-white">profile</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
