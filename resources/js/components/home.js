import React from 'react'
import {Routes, Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import "../../css/app.css";
import Background from './Background';
import Page from './page';

const Home = () => {
    const params = useParams();
    const count = Number(params.id);

    const [pages, setPages] = useState();
    // postsにはblog/idの(id * 8)個の記事が入る
    const [posts, setPosts] = useState([]);

    // 記事の投稿一覧を取得
    useEffect(() => {
        axios.get('/api/all')
        .then(res => {
            setPages(Math.ceil(res.data.posts.length / 8))
            for(let i = (params.id - 1) * 8; i <= (params.id * 8) - 1; i++) {
                setPosts((prev) => [...prev, res.data.posts[i]])
                if(i == res.data.posts.length - 1) {
                    break;
                }
            }
        })
    }, []);

    return (
        <div className="relative overflow-hidden">
            < Background />
            <main className="bg-gray-200 text-center">
                <div className="lg:w-4/5 bg-gray-200 mx-auto">
                    <ul className="w-full mb-0 list-none flex flex-wrap lg:justify-between justify-center">
                        {
                            posts.map(post => <li key={post.id} className="bg-regal-white w-84 h-64 m-8 shadow-purple3 transition duration-500 rounded-xl transform hover:translate-x-4 hover:translate-y-4 hover:shadow-zero">
                                <Link to={`/blog/${post.path}`} className="h-45 w-full items-end justify-center rounded-xl">
                                    <img src={`/storage/${post.filepath}`} className="block rounded-t-xl"></img>
                                    <span className="text-regal-black bg-rgba w-full font-semibold text-base h-18 absolute bottom-0 left-0 rounded-b-xl">{post.title}</span>
                                </Link>
                                </li>)
                        }
                    </ul>
                </div>
                <Page pages={pages} count={count} />
            </main>
        </div>
    )
}

export default Home
