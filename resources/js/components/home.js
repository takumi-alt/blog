import React from 'react'
import {Routes, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import "../../css/app.css";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
        .then(res => {
            setPosts(res.data.posts)
        })
    }, []);
    

    return (
        <div>
            <main className="bg-gray-200 text-center">
                <div className="lg:w-4/5 bg-gray-200 mx-auto">
                    <ul className="w-full mb-0 list-none flex flex-wrap lg:justify-between justify-center">
                        {
                            posts.map(post => <li key={post.id} className="bg-regal-white w-84 h-60 m-8 rounded-2xl shadow-red">
                                <div className="h-60 w-full flex items-end justify-center">
                                    <Link to={`/blog/${post.path}`} className="text-regal-black bg-gray-300 rounded-b-2xl w-full font-black text-lg h-24">{post.title}</Link>
                                </div>
                                </li>)
                        }
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Home
