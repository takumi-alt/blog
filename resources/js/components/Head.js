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
        <div className="w-full">
            <div id="id" className="flex justify-center items-center h-24 sm:h-32 bg-regal-beige group pt-4">
                    <div className="absolute mx-0 flex">
                        <div className="w-20 h-20 animate-round1 bg-regal-red mr-2"></div>
                        <div className="w-20 h-20 animate-round3 bg-regal-green mr-2"></div>
                        <div className="w-20 h-20 animate-round2 bg-regal-white"></div>
                    </div>
                    {span}
                    <span className="mr-4"></span>
                    {blog}
            </div>
        </div>
    )
}

export default Head
