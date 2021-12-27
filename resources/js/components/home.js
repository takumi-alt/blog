import React from 'react'
import {Routes, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import "../../css/app.css";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/all')
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
                            posts.map(post => <li key={post.id} className="bg-regal-white w-84 h-64 m-8 shadow-purple3 transition duration-500 rounded-xl transform hover:translate-x-4 hover:translate-y-4 hover:shadow-zero">
                                <Link to={`/blog/${post.path}`} className="h-45 w-full items-end justify-center rounded-xl">
                                    <img src={`/storage/${post.filepath}`} className="block rounded-t-xl"></img>
                                    {/* <div className="text-regal-black">
                                        {post.created_at}
                                    </div> */}
                                    <span className="text-regal-black bg-rgba w-full font-semibold text-base h-18 absolute bottom-0 left-0 rounded-b-xl">{post.title}</span>
                                </Link>
                                </li>)
                        }
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Home
