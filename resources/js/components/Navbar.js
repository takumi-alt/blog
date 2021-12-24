import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../css/app.css'

const Navbar = () => {
    const[btn, setBtn] = useState(0);

    function handleClick() {
        setBtn(btn + 1);
    }
    console.log(btn)

    useEffect(() =>{
        const element = <div><input type="text"></input></div>
        ReactDOM.render(element, document.getElementById("nav"));
    },[btn])
    
    return (
        <>
             <div className="bg-regal-white">
                <div className="bg-regal-white flex justify-center h-8 sm:h-12 md:w-4/5 mx-auto">
                    {/* home */}
                    <button  className="hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1">
                        <Link to={`/blog/`} className="text-regal-black">home</Link>
                    </button>
                    {/* search */}
                    <button onClick={handleClick} className="hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1">search</button>
                    {/* contact */}
                    <button className="hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1">
                        <Link to={`/blog/contact`} className="text-regal-black">contact</Link>
                    </button>
                    {/* profile */}
                    <button className="hover:bg-gray-300 ... cursor-pointer h-8 sm:h-12 font-mono font-black text-sm sm:text-xl text-center border-l-2 border-r-2 border-gray-300 flex-1">
                        <Link to={`/blog/profile`} className="text-regal-black">profile</Link>
                    </button>
                </div>
            </div>
            <div id="nav" className="hidden"></div>
        </>
    )
}

export default Navbar
