import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../../css/app.css'

const Navbar = () => {
    return (
        <>
             <div className="bg-regal-white z-30 w-full">
                <div className="bg-regal-white flex justify-center h-8 sm:h-12 md:w-4/5 mx-auto">
                    {/* home */}
                    <Link to={`/blog/1`}  className="cursor-pointer h-8 sm:h-12 flex-1">
                        <button className="nav-button">home</button>
                    </Link>
                    {/* search */}
                    <button className="cursor-pointer h-8 sm:h-12 font-mono text-sm sm:text-xl text-center flex-1 hover:border hover:border-regal-red hover:bg-regal-beige duration-1000">search</button>
                    {/* contact */}
                    <Link to={`/blog/contact`} className="cursor-pointer h-8 sm:h-12 flex-1">
                        <button className="nav-button">contact</button>
                    </Link>
                    {/* profile */}
                    <Link to={`/blog/profile`} className="cursor-pointer h-8 sm:h-12 flex-1">
                        <button className="nav-button">profile</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
