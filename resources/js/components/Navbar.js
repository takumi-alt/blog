import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../../css/app.css'

const Navbar = () => {
    return (
        <>
             <div className="bg-regal-white fixed z-30 w-full pt-32">
                <div className="bg-regal-white flex justify-center h-8 sm:h-12 md:w-4/5 mx-auto">
                    {/* home */}
                    <Link to={`/blog/1`}  className="cursor-pointer h-8 sm:h-12 border-l-2 border-gray-300 flex-1">
                        <button className="nav-button">home</button>
                    </Link>
                    {/* search */}
                    <button className="cursor-pointer h-8 sm:h-12 font-mono text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1 hover:bg-green-400 duration-1000">search</button>
                    {/* contact */}
                    <Link to={`/blog/contact`} className="cursor-pointer h-8 sm:h-12 border-l-2 border-gray-300 flex-1">
                        <button className="nav-button">contact</button>
                    </Link>
                    {/* profile */}
                    <Link to={`/blog/profile`} className="cursor-pointer h-8 sm:h-12 border-l-2 border-r-2 border-gray-300 flex-1">
                        <button className="nav-button">profile</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
