import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";

const Hum = () => {
    const [toggle, setToggle] = useState(true);
    const [menu, setMenu] = useState(false);
    const [categories, setCategories] = useState([]);

    const opacity = () => {
        setToggle(!toggle);
        setMenu(!menu)
    }

    useEffect(() => {
        axios.get('/api/categories')
        .then(res => {
            setCategories(res.data.categories);
        })
    }, [])
    console.log(categories);

    useEffect(() => {
        const up = document.getElementById('up');
        const center = document.getElementById('center');
        const down = document.getElementById('down');

        if(menu == true) {
            up.classList.add('transform', 'rotate-45', 'translate-y-2');
            down.classList.add('transform', '-rotate-45', '-translate-y-2');
            center.classList.add('opacity-0');
        }else{
            up.classList.remove('transform');
            down.classList.remove('transform');
            center.classList.remove('opacity-0');
        }
    }, [menu])

    useEffect(() => {
        if(toggle == false) {
            document.getElementById('slide').classList.add('-translate-x-full')
        }else {
            document.getElementById('slide').classList.remove('-translate-x-full')
        }
    }, [toggle])

  return (
    <div className="relative">
        <div className="text-center absolute top-5 right-5 z-50 bg-regal-red h-10 w-10 md:h-14 md:w-14 rounded-full hover:bg-red-700 transition duration-1000">
            <button onClick={opacity} className="pt-sml md:pt-md">
                    <div id="up" className="w-6 md:w-8 h-sm md:h-1 mb-1 md:mb-2 bg-regal-beige transition duration-1000"></div>
                    <div id="center" className="w-6 md:w-8 h-sm md:h-1 mb-1 md:mb-2 bg-regal-beige transition duration-1000"></div>
                    <div id="down" className="w-6 md:w-8 h-sm md:h-1 bg-regal-beige transition duration-1000"></div>
            </button>
        </div>
        <div id="slide" className="w-full h-40 sm:h-52 absolute top-0 -right-full bg-regal-green z-30 transform transition duration-1000">
            {/* category */}
            <div className="w-2/4 mx-auto mb-6 mt-8 border-b-2 border-regal-beige">
                    {/* <MdOutlineCategory className="inline w-6 h-6 sm:w-8 sm:h-8 text-regal-beige" /> */}
                    <span className="text-regal-beige ml-4 text-base sm:text-xl">・All category...</span>
                    <ul className="list-none">
                        {
                            categories.map(category => <li key={category.id} className="ml-12 mb-1">
                            <AiFillFolderOpen className="inline w-3 h-3 mr-2 sm:w-4 sm:h-4 text-regal-beige" />
                            <Link to={`/blog/category/${category['category']}`}  className="text-regal-beige text-xs sm:text-base w-24 rounded-xl hover:shadow-2xlrr hover:no-underline p-1">
                                {category['category']}
                            </Link>
                        </li>)
                        }
                    </ul>
            </div>
        </div>
    </div>
  )
};

export default Hum;
