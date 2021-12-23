import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/app.css'

const Navbar = () => {
    return (
        <>
             <div className="bg-regal-white">
                <div className="bg-regal-white flex justify-center h-8 sm:h-12 md:w-4/5 mx-auto">
                    <Link to={`/blog/`}  className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1">home</Link>
                    <a className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1">search</a>
                    <Link to={'/blog/contact'} className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1">contact</Link>
                    <Link to={'blog/profile'} className="text-regal-black hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-r-2 border-gray-300 flex-1">profile</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
