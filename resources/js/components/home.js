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
            <header className="h-12 bg-gray-500">header</header>
            <main className="bg-gray-500 text-center">
                    <ul>
                        {
                            posts.map(post => <li key={post.id} className="bg-blue-200 mb-4">
                                    <div className="btn">
                                        <Link to={`/react/blog/${post.path}`}>{post.title}</Link>
                                    </div>                          
                                </li>)
                        }
                    </ul>
            </main>
        </div>
    )
}

export default Home
