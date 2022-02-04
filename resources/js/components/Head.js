import React, { useState, useEffect } from 'react'
import '../../css/app.css';


const Head = () => {
    const [span, setSpan] = useState([]);
    const [blog, setBlog] = useState([]);
    const engineers = ['e', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];
    const blogs = ['b', 'l', 'o', 'g'];

    // engineer
    useEffect(() => {
        for(let i = 0; i < engineers.length; i++) {
            const engineer = engineers[i]
            const cls = `text-4xl sm:text-5xl text-regal-black transform group-hover:-translate-y-5 transition duration-${(i + 1) * 200}`
            const element = <span className ={cls}>{engineer}</span>
            setSpan((prevArray) => [...prevArray, element])
        }
    },[])
    // blog
    useEffect(() => {
        for(let i = 0; i < blogs.length; i++) {
            const blog = blogs[i]
            const cls = `text-4xl sm:text-5xl text-regal-black transform group-hover:-translate-y-5 transition duration-${(i + 1) * 200}`
            const element = <span className ={cls}>{blog}</span>
            setBlog((prevArray) => [...prevArray, element])
        }
    },[])
    


    return (
        <div className="w-full relative">
                    <div className="absolute top-0 lef-8 w-20 h-20 md:w-40 md:h-40 animate-round1 bg-regal-red mr-2"></div>
                    <div className="absolute right-72 top-32 xl:top-12 w-12 h-12 xl:w-28 xl:h-28 animate-round3 bg-regal-red mr-2"></div>
                    <div className="absolute top-4 right-4 w-14 h-14 md:w-32 md:h-32 animate-round1 bg-regal-green mr-2"></div>
                    <div className="absolute top-24 sm:top-32 left-64 sm:left-48 w-8 h-8 sm:w-20 sm:h-20 animate-round2 bg-regal-green mr-2"></div>
                    <div className="absolute top-28 right-12 sm:right-32 w-28 h-28 animate-round4 bg-regal-beige"></div>
            <div id="id" className="flex justify-center items-center h-24 sm:h-32 bg-regal-white group pt-4">
                    <div className="absolute mx-0 flex">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 animate-round3 bg-regal-green mr-10 visible md:invisible"></div>
                        <div className="w-12 h-12 sm:w-24 sm:h-24 animate-round4 bg-regal-red lg:visible"></div>
                    </div>
                    {span}
                    <span className="mr-4"></span>
                    {blog}
            </div>
        </div>
    )
}

export default Head
