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
            const cls = `font-black text-4xl sm:text-5xl text-regal-white transform group-hover:-translate-y-5 transition duration-${(i + 1) * 200}`
            const element = <span className ={cls}>{engineer}</span>
            setSpan((prevArray) => [...prevArray, element])
        }
    },[])
    // blog
    useEffect(() => {
        for(let i = 0; i < blogs.length; i++) {
            const blog = blogs[i]
            const cls = `font-black text-4xl sm:text-5xl text-regal-white transform group-hover:-translate-y-5 transition duration-${(i + 1) * 200}`
            const element = <span className ={cls}>{blog}</span>
            setBlog((prevArray) => [...prevArray, element])
        }
    },[])
    


    return (
        <>
            <div id="id" className="flex justify-center items-center h-32 bg-purple-600 text-center group relative">
                    <div className="w-24 h-24 rounded-part1 bg-purple-300 absolute top-0 left-4"></div>
                    <div className="w-24 h-24 rounded-part2 bg-purple-400 absolute bottom-0 left-32"></div>
                    <div className="w-24 h-24 rounded-part3 bg-purple-500 absolute top-2 left-60"></div>
                    {span}
                    <span className="mr-4"></span>
                    {blog}
            </div>
        </>
    )
}

export default Head
