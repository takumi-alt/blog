import React from 'react'
import { Link } from 'react-router-dom';

const Hoot = () => {
    return (
        <div className="bg-regal-black text-center py-4">
            <div className="font-black text-regal-white text-3xl">
                engineer blog
            </div>
            <div className="text-xs mb-4 text-regal-white">engineeeer.site</div>

            <section className="flex justify-between mx-auto w-4/5 text-xs sm:text-sm pb-4">
                <Link to={`/blog/profile`} className="text-regal-white">プロフィール</Link>
                <Link to={`/blog/contact`} className="text-regal-white">お問い合わせ</Link>
                <div className="text-regal-white">プライバシーポリシー</div>
            </section>
            <div className="text-gray-500 text-xs">© 2021  engineer blog</div>
        </div>
    )
}

export default Hoot
