import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import "../../css/app.css";
import { AiFillFolderOpen } from "react-icons/ai";
import {AiOutlineHistory} from 'react-icons/ai';

const Detail = () => {
    const params = useParams();
    // postsにはcategoryで絞られた記事が入る
    const [posts, setPosts] = useState([]);
    // 記事の投稿日を入れる
    const [date, setDate] = useState([]);
    // 記事のカテゴリーを入れる
    const [category, setCategory] = useState([]);

    // categoryで絞られた記事の投稿一覧を取得
    useEffect(() => {
        axios.get(`/api/category/${params.id}`)
        .then(res => {
            setDate(res.data.date);
            setPosts(res.data.posts);
            setCategory(res.data.category);
        })
    }, [params.id]);

  return (
      <>
        <Helmet title={params.id} />
        <div className="relative overflow-hidden">
            <main className="bg-regal-beige">
                <div className="lg:w-4/5 bg-regal-beige mx-auto">
                    <div className="w-4/5 lg:w-full pt-4 border-b-2 mx-auto">
                        <AiFillFolderOpen className="w-6 h-6 md:w-8 md:h-8 inline pr-2 text-regal-green" />
                        <span className="text-nomal md:text-lg font-black opacity-75">
                            {params.id}
                        </span>
                    </div>
                    <ul className="w-4/5 lg:w-full mb-0 list-none mx-auto mt-6">
                    {/* <ul className="w-full mb-0 list-none flex flex-wrap lg:justify-between justify-center"> */}
                        {/* {
                            posts.map((post, index) => <li key={post.id} className="bg-regal-white w-58 h-48 sm:w-84 sm:h-64 m-4 sm:m-8 shadow-2xlr transition duration-500 transform hover:translate-x-4 hover:translate-y-4 hover:shadow-zero rounded-xl">
                                <Link to={`/blog/article/${post.path}`} className="h-34 sm:h-45 w-full items-end justify-center rounded-xl">
                                    <img src={`/storage/${post.filepath}`} className="block rounded-t-xl"></img>
                                    <span className="bg-rgba w-full h-14 sm:h-18 absolute bottom-0 left-0 px-2 rounded-b-xl">
                                        <div className="text-xs text-gray-500">
                                            <span><AiOutlineHistory className="inline text-regal-green" />{date[index]}</span>
                                            <span className="ml-4"><AiFillFolderOpen className="inline text-regal-green" />{category[index]}</span>
                                        </div>
                                        <span className="text-regal-black font-semibold rounded-b-xl text-sm sm:text-base ">
                                        {post.title}
                                        </span>
                                    </span>
                                </Link>
                                </li>)
                        } */}
                        {
                                posts.map((post, index) => <li key={post.id} className="bg-regal-white shadow-2xlr transition duration-500 transform hover:translate-x-4 hover:translate-y-4 hover:shadow-zero rounded-xl mb-6">
                                    <Link to={`/blog/article/${post.path}`} className="flex hover:no-underline pl-2 py-2">
                                        <img src={`/storage/${post.filepath}`} className="h-24 w-32 rounded-lg"></img>
                                        <span className="pl-2">
                                            <div className="text-xs text-gray-500">
                                                <span><AiOutlineHistory className="inline text-regal-green" />{date[index]}</span>
                                                <span className="ml-4"><AiFillFolderOpen className="inline text-regal-green"/>{category[index]}</span>
                                            </div>
                                            <span className="text-base lg:text-xl text-regal-black">
                                            {post.title}
                                            </span>
                                        </span>
                                    </Link>
                                    </li>)
                            }
                    </ul>
                </div>
            </main>
        </div>
      </>
  )
};

export default Detail;

