import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import '../../css/app.css'


const Hamburger = () => {
    const [menu, setMenu] = useState(false);
    const [toggler, setToggler] = useState(false);

    const toggleClick = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        const up = document.getElementById('up');
        const center = document.getElementById('center');
        const down = document.getElementById('down');
        const button_1 = document.getElementById('button_1');
        const button_2 = document.getElementById('button_2');

        if(menu == true) {
            button_1.classList.add('transform');
            button_2.classList.add('transform');
            document.getElementById('search').classList.add('transform');
            up.classList.add('transform', 'rotate-45', 'translate-y-2');
            down.classList.add('transform', '-rotate-45', '-translate-y-2');
            center.classList.add('opacity-0');
        }else{
            button_1.classList.remove('transform', '-translate-x-32', 'md:-translate-x-64');
            button_1.classList.add('-translate-x-12', 'md:-translate-x-24');
            button_2.classList.remove('transform');
            document.getElementById('search').classList.remove('transform', 'animate-border_go_s', 'md:animate-border_go_l');
            up.classList.remove('transform');
            down.classList.remove('transform');
            center.classList.remove('opacity-0');
        }
    }, [menu])

    const onClick = () => {
        setToggler(!toggler)
    }

    useEffect(() => {
        if(toggler == true) {
            document.getElementById('button_1').classList.remove('-translate-x-12', 'md:-translate-x-24')
            document.getElementById('button_1').classList.add('-translate-x-32', 'md:-translate-x-64')
            document.getElementById('search').classList.remove('animate-border_back_s', 'md:animate-border_back_l')
            document.getElementById('search').classList.add('animate-border_go_s', 'md:animate-border_go_l')
        }else{
            document.getElementById('button_1').classList.remove('-translate-x-32', 'md:-translate-x-64')
            document.getElementById('button_1').classList.add('-translate-x-12', 'md:-translate-x-24')
            // document.getElementById('search').classList.add('animate-border_back_s', 'md:animate-border_back_l')
            document.getElementById('search').classList.remove('animate-border_go_s', 'md:animate-border_go_l')
        }
    }, [toggler])

    return (
        <div className="relative">
            <div className="text-center absolute top-5 right-5 z-50 bg-regal-red h-10 w-10 md:h-14 md:w-14 rounded-full hover:bg-red-700 transition duration-1000">
                <button onClick={toggleClick} className="pt-sml md:pt-md">
                        <div id="up" className="w-6 md:w-8 h-sm md:h-1 mb-1 md:mb-2 bg-regal-beige transition duration-1000"></div>
                        <div id="center" className="w-6 md:w-8 h-sm md:h-1 mb-1 md:mb-2 bg-regal-beige transition duration-1000"></div>
                        <div id="down" className="w-6 md:w-8 h-sm md:h-1 bg-regal-beige transition duration-1000"></div>
                </button>
            </div>
            <div>
                <div className="h-8 md:h-11">
                    <div id="search" className="border-b-2 z-30 border-regal-red w-0 h-6 md:w-0 md:h-12 absolute top-6 right-11 md:right-12 transition duration-600 -translate-x-12 -translate-y-2 md:-translate-x-24 md:-translate-y-4">
                        <input type="text" placeholder="search.." className="outline-none md:pl-8 w-full h-full border-none text-xs md:text-base focus:shadow-2xl"></input>
                    </div>
                    <button id="button_1" onClick={onClick} className="bg-regal-red hover:bg-regal-green z-30 w-6 h-6 md:w-12 md:h-12 rounded-full absolute top-6 right-6 transition duration-600 -translate-y-2 md:-translate-x-24 md:-translate-y-4">
                        <GoSearch className="mx-auto text-white md:h-6 md:w-6" />
                    </button>
                    <button id="button_2" className="bg-regal-green hover:bg-regal-red z-30 w-6 h-6 md:w-12 md:h-12 rounded-full absolute top-6 right-6 transiton duration-1000 -translate-x-9 translate-y-8 md:-translate-x-16 md:translate-y-12">
                        <Link to={`/blog/contact`} className="w-full h-full">
                            <AiOutlineMail className="mx-auto text-white md:h-6 md:w-6" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>

            
       
    )
}

export default Hamburger
