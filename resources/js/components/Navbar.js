import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/app.css'

const Navbar = () => {
    return (
        <>
             <div className="bg-regal-white">
                <div className="bg-regal-white flex justify-center h-12 md:w-4/5 mx-auto">
                    <Link to={`/react/`}  className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-base sm:text-xl text-center border-l-2 border-gray-300 flex-1">home</Link>
                    <a className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-base sm:text-xl text-center border-l-2 border-gray-300 flex-1">search</a>
                    <Link to={'/react/contact'} className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-base sm:text-xl text-center border-l-2 border-gray-300 flex-1">contact</Link>
                    <a className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-12 font-mono font-black text-base sm:text-xl text-center border-l-2 border-r-2 border-gray-300 flex-1">info</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
