import React from 'react'
import '../../css/app.css'
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { Helmet } from 'react-helmet';

const Profile = () => {
    return (
        <>
            <Helmet title="My profile - engineer blog" />
            <div className="bg-regal-beige relative overflow-hidden pb-2">
                <div className="w-4/5 pt-4 border-b-2 mx-auto">
                    <CgProfile className="w-6 h-6 md:w-8 md:h-8 inline pr-2 text-regal-green" />
                    <span className="text-nomal md:text-lg font-black opacity-75">
                        profile
                    </span>
                </div>
                <div className="w-4/5 sm:w-5/6 mx-auto pt-12">
                    
                    <div className="mx-auto">

                        <div className="w-full">
                            {/* name,img,icon*/}
                            <section className="mb-8">
                                <img src="/storage/profile3.png" className="mb-4 w-32 h-32 mx-auto rounded-full"></img>
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
                            <section className="mx-auto mb-12 md:w-3/5">
                                <p className="text-xl font-medium w-32 bg-regal-green text-center rounded-lg shadow-green3">About</p>
                                <p className="border-t-2 border-regal-red py-4 lg:text-lg text-regal-black">
                                    ご訪問ありがとうございます。サイト運営者の美馬 巧と申します。<br/>
                                    私立大学に通う大学三年生です。将来はエンジニアとして活躍したいと思い、独学でプログラミングを勉強中です。<br/>
                                    お問い合わせは、Contactまたはinstagram、twitterからお願いします。
                                </p>
                            </section>

                            {/* language */}
                            <section className="mx-auto mb-12 md:w-2/5 md:pl-20">
                                <p className="text-xl font-medium w-32 bg-regal-green text-center rounded-lg shadow-green3">Language</p>
                                <p className="md:text-lg border-t-2 border-regal-red">
                                    ◆ HTML・CSS<br/>
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
        </>
    )
}

export default Profile
