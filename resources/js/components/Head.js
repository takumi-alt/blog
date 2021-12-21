import React, { useState, useEffect } from 'react'
import '../../css/app.css';




const Head = () => {
    const enginier = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];
    const blog = ['B', 'l', 'o', 'g', '❕'];
    const [next, setNext] = useState('');
    const [Blog, setBlog] = useState('');

    useEffect(() => {
        setTimeout(() => {
            for (let i = 0; i < enginier.length; i++) {
                setTimeout(() => setNext(next => next + enginier[i]), i * 150);
            }
        }, 1000)
    }, []);
    useEffect(() => {
        setTimeout(() => {
            for (let i = 0; i < blog.length; i++) {
                setTimeout(() => setBlog(Blog => Blog + blog[i]), i * 150);
            }
        }, 3000)
    }, []);

    // bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800
    // bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
    return (
        <>
            <div className="flex justify-center items-center h-32 bg-purple-600 text-center">
                <h3 className="font-black text-5xl sm:text-6xl text-green-500 m-2 sm:m-4">{next}</h3>
                <h3 className="font-black text-5xl sm:text-6xl text-green-500 m-2 sm:m-4">{Blog}</h3>
            </div>
        </>
    )
}

export default Head
