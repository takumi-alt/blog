import React from 'react'
import { Link } from 'react-router-dom';

const Hoot = () => {
    return (
        <div className="bg-regal-white text-center py-4">
            <div className="font-black text-regal-black text-2xl">
                engineer blog
            </div>
            <div className="text-xs mb-4">engineeeer.site</div>

            <section className="flex justify-between mx-auto w-4/5 text-xs sm:text-sm">
                <div>プロフィール</div>
                <div>お問い合わせ</div>
                <div>プライバシーポリシー</div>
            </section>
        </div>
    )
}

export default Hoot
