import React, { useState, useEffect } from 'react';
import "../../css/app.css";
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

const Page = (props) => {
    const [number, setNumber] = useState(1);
    
    // それぞれのボタンを有効化するかのstate
    const [active_back, setActive_back] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);
    const [active_next, setActive_next] = useState(true);

    // props.countはpathの:idで渡される。1ページ目ならbackの矢印を消す
    useEffect(() => {
        setNumber(props.count);
        if(props.count == 1) {
            setActive_back(false)
        }
    }, [])
    
    // props.pagesはページ数を渡す。
    // 1ページなら2，3ページ目とnextボタンを消す。
    // 3ページ未満なら3ページ目のボタンとnextページを消す
    useEffect(() => {
        if(props.pages == 1) {
            setActive2(false)
            setActive3(false)
            setActive_next(false)
        }
        else if(props.pages < 3) {
            setActive_back(false)
            setActive3(false)
            setActive_next(false)
            setNumber(1)
        }
    }, props.pages)

    // ボタンをクリックするたびに以下の関数で条件をチェック
    const check = () => {
        if(number == props.pages - 2) {
            setActive_next(false)
            setNumber(props.psges - 2)
        }
    }

    return (
        <div className="flex justify-center">
            <a href={number - 1} className={active_back ? "w-8 h-8 rounded-full hover:bg-green-400 transition duration-1000" : "hidden"}>
                <button className="w-full h-full text-regal-black">
                <FaAngleLeft className="mx-auto" />
                </button>
            </a>
            <a href={number} className="w-8 h-8 rounded-full bg-purple-400 text-center ml-2 mr-2 hover:bg-green-400 transition duration-1000">
                <button className="w-full h-full text-regal-black">
                {number}
                </button>
            </a>
            <a href={number + 1} className={active2 ? "w-8 h-8 rounded-full bg-purple-400 text-center mr-2 hover:bg-green-400 transition duration-1000" : "hidden"}>
                <button className="w-full h-full text-regal-black">
                {number + 1}
                </button>
            </a>
            <a href={number + 2} className={active3 ? "w-8 h-8 rounded-full bg-purple-400 text-center mr-2 hover:bg-green-400 transition duration-1000" : "hidden"}>
                <button className="w-full h-full text-regal-black">
                {number + 2}
                </button>
            </a>
            <a href={number + 1} className={active_next ? "w-8 h-8 rounded-full hover:bg-green-400 transition duration-1000" : "hidden"}>
                <button className="w-full h-full text-regal-black">
                <FaAngleRight className="mx-auto" />
                </button>
            </a>
        </div>
    )
}

export default Page
