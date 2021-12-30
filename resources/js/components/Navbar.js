import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../../css/app.css'

const Navbar = () => {
    const[active, setActive] = useState(true);
    const[btn, setBtn] = useState(0);

    function handleClick() {
        setActive(!active);
        setBtn(btn + 1);
    }

    const [pass, setPass] = useState('');
    const handleNameChange = (event) => {
        setPass(event.target.value)
    }
    // searchボタンが押されたときの処理
    useEffect(() =>{
        const element = <div className="mx-auto bg-gray-200 text-center">
            <input value={pass} onChange={handleNameChange} type="text" className="border-purple-600 border-2 w-64 rounded-lg"></input>
            <button className="ml-4 bg-purple-600 rounded-lg text-regal-white w-20 h-6"><FaSearch className="mx-auto"/></button>
            </div>
        ReactDOM.render(element, document.getElementById("nav"));
    },[btn])
    console.log(pass)
    
    return (
        <>
             <div className="bg-regal-white">
                <div className="bg-regal-white flex justify-center h-8 sm:h-12 md:w-4/5 mx-auto">
                    {/* home */}
                    <Link to={`/blog/`}  className="cursor-pointer h-8 sm:h-12 border-l-2 border-gray-300 flex-1">
                        <button className="nav-button">home</button>
                    </Link>
                    {/* search */}
                    <button onClick={handleClick} className="cursor-pointer h-8 sm:h-12 font-mono text-sm sm:text-xl text-center border-l-2 border-gray-300 flex-1 hover:bg-green-400 duration-1000">search</button>
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
            <div id="nav" className={ active ? "hidden" : "py-2 bg-gray-200" }></div>
        </>
    )
}

export default Navbar
