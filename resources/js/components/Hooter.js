import React from 'react'
import { Link } from 'react-router-dom';

const Hoot = () => {
    return (
        <div className="bg-regal-black text-center py-4">
            <div className="font-black text-regal-white text-2xl">
                engineer blog
            </div>
            <div className="text-xs mb-4 text-regal-white">engineeeer.site</div>

            <section className="flex justify-between mx-auto w-4/5 text-xs sm:text-sm text-regal-white">
                <div>プロフィール</div>
                <div>お問い合わせ</div>
                <div>プライバシーポリシー</div>
            </section>
        </div>
    )
}

export default Hoot
