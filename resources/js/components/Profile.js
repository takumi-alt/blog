import React from 'react'
import '../../css/app.css'
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import Background from './Background';

const Profile = () => {
    return (
        <div className="bg-regal-beige relative overflow-hidden">
            <div className="w-3/4 lg:w-5/6 mx-auto pt-12">
                <div className="mx-auto hover">

                    <div className="w-full">
                        {/* name,img,icon*/}
                        <section className="mb-8">
                            <img src="/storage/profile.jpg" className="mb-4 w-32 h-32 mx-auto animate-round2"></img>
                            <p className="text-center font-bold text-xl text-regal-red mb-2">TAKUMI MIMA</p>
                            <div className="w-32 mx-auto flex justify-center">
                                <a className="w-16 text-green-600 hover:text-regal-red transition duration-500 text-3xl mx-auto"><FaTwitter className="mx-auto"/></a>
                                <a className="w-16 text-green-600 hover:text-regal-red transition duration-500 text-3xl mx-auto"><FaInstagram className="mx-auto"/></a>
                                <a href="https://github.com/takumi-alt/" className="w-16 text-green-600 hover:text-regal-red transition duration-500 text-3xl mx-auto"><FaGithub className="mx-auto"/></a>
                            </div>
                        </section>
                        
                    </div>

                    <div className="mx-auto md:w-4/5 md:flex justify-between">
                        {/* About */}
                        <section className="mx-auto mb-12 md:w-2/3">
                            <p className="text-xl font-medium w-32 bg-regal-green text-center rounded-lg shadow-green3">About</p>
                            <p className="border-t-2 border-regal-red py-4 lg:text-lg text-regal-black">
                                ご訪問ありがとうございます。サイト運営者の美馬 巧と申します。<br/>
                                大阪府の私立大学に通う大学三年生です。将来はエンジニアとして活躍したいと思い、独学でプログラミングを勉強中です。<br/>
                                お問い合わせは、Contactまたはinstagram、twitterからお願いします。
                            </p>
                        </section>

                        {/* language */}
                        <section className="mx-auto mb-12 md:w-1/3 md:pl-20">
                            <p className="text-xl font-medium w-32 bg-regal-green text-center rounded-lg shadow-green3">Language</p>
                            <p className="md:text-lg border-t-2 border-regal-red">
                                ◆ HTML<br/>
                                ◆ CSS<br/>
                                ◆ Javascript<br/>
                                ◆ PHP<br/>
                                ◆ Python<br/>
                            </p>
                        </section>
                    </div>
                    {/* Work */}
                    <section className="md:w-4/5 mx-auto">
                        <p className="text-xl font-medium w-32 bg-regal-green text-center rounded-lg shadow-green3">My Work</p>
                        <div className="border-t-2 border-b-2 border-regal-red py-4 md:flex justify-between">
                            <div className="md:w-2/5">
                                <a href="https://engineeeer.site/blog">
                                    <img src="/storage/engineer_blog.png" className="shadow-xl mb-4 hover:shadow-3xl duration-1000"></img>
                                </a>
                                <p className="text-lg md:text-xl text-black bg-regal-red text-center w-48 shadow-red2">No.1 engineer blog</p>
                                <p>
                                    こちらのブログは私が初めて本格的に作製したサイトになります。<br/>
                                    CRUD機能を搭載しており、SPA化もしています。<br/>
                                    使用技術としては主に、Laravel, React, Tailwindcssを用いています。
                                </p>
                            </div>
                            <div className="md:w-2/5">

                            </div>
                        </div>
                    </section>

                </div>



            </div>
            
        </div>
    )
}

export default Profile
