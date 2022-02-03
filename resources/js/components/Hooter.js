import React from 'react'
import { Link } from 'react-router-dom';

const Hoot = () => {
    return (
        <>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90">
                    <path fill="#718096" d="M 1440 21.21 V 120 H 0 V 21.21 C 120 35.07 240 42 360 42 s 240 -6.93 360 -20.79 c 88.328 -8.794 154.574 -14.333 198.738 -16.618 A 3120.56 3120.56 0 0 1 1080 0.42 c 120 0 240 6.93 360 20.79 Z"></path>
                </svg>
            </div>
            <div className="bg-regal-gray text-center pb-4">
                <div className="font-black text-regal-white text-3xl">
                    engineer blog
                </div>
                <div className="text-xs mb-4 text-regal-white">engineeeer.site</div>

                <section className="flex justify-between mx-auto w-4/5 text-xs sm:text-sm pb-4">
                    <Link to={`/blog/profile`} className="text-regal-white">プロフィール</Link>
                    <Link to={`/blog/contact`} className="text-regal-white">お問い合わせ</Link>
                    <div className="text-regal-white">プライバシーポリシー</div>
                </section>
                <div className="text-regal-black text-xs">© 2021  engineer blog</div>
            </div>
        </>
    )
}

export default Hoot
