import React from 'react'
import { useParams, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import "../../css/app.css";
import { Helmet } from 'react-helmet';
import Page from './Page';
import { AiOutlineHome } from "react-icons/ai";
import {AiOutlineHistory} from 'react-icons/ai';
import { AiFillFolderOpen } from "react-icons/ai";

const Home = () => {
    const params = useParams();
    const count = Number(params.id);

    const [pages, setPages] = useState();
    // postsにはblog/idの(id * 8)個の記事が入る
    const [posts, setPosts] = useState([]);
    // 記事の投稿日を入れる
    const [date, setDate] = useState([]);
    // 記事のカテゴリーを入れる
    const [category, setCategory] = useState([]);

    // 記事の投稿一覧を取得
    useEffect(() => {
        axios.get('/api/all')
        .then(res => {
            setDate(res.data.date)
            setCategory(res.data.category)
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
        <>
            <Helmet title="Home - engineer blog" />
            <div className="relative overflow-hidden">
                <main className="bg-regal-beige">
                    <div className="lg:w-4/5 bg-regal-beige mx-auto">
                        <div className="w-6/7 lg:w-full pt-4 border-b-2 mx-auto">
                            <AiOutlineHome className="w-6 h-6 md:w-8 md:h-8 inline pr-2 text-regal-green" />
                            <span className="text-nomal md:text-lg font-black opacity-75">
                                home
                            </span>
                        </div>
                        <ul className="w-6/7 lg:w-full mb-0 list-none mx-auto mt-6">
                            {
                                posts.map((post, index) => <li key={post.id} className="bg-regal-white shadow-2xlr transition duration-500 transform hover:translate-x-4 hover:translate-y-4 hover:shadow-zero rounded-xl mb-6">
                                    <Link to={`/blog/article/${post.path}`} className="flex hover:no-underline pl-2 py-2">
                                        <img src={`/storage/${post.filepath}`} className="h-20 md:h-24 w-34 md:w-44 rounded-lg"></img>
                                        <span className="pl-2">
                                            <div className="text-xs text-gray-500">
                                                <span><AiOutlineHistory className="inline text-regal-green" />{date[index]}</span>
                                                <span className="ml-4"><AiFillFolderOpen className="inline text-regal-green"/>{category[index]}</span>
                                            </div>
                                            <span className="text-base lg:text-xl text-regal-black font-medium">
                                            {post.title}
                                            </span>
                                        </span>
                                    </Link>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <Page pages={pages} count={count} />
                </main>
            </div>
        </>
    )
}

export default Home
