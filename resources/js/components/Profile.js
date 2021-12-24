import React from 'react'
import '../../css/app.css'

const Profile = () => {
    return (
        <div>
            <div className="w-2/3 mx-auto mt-12">
                {/* name,img */}
                <div className="mb-8">
                    <img src="/storage/profile.jpg" className="w-32 h-32 mx-auto rounded-full"></img>
                    <p className="text-center font-bold text-xl">TAKUMI MIMA</p>
                </div>
                <div className="lg:w-3/4 mx-auto mb-12">
                    <p className="text-xl font-medium w-32 bg-purple-500 text-center rounded-lg shadow-purple2">About</p>
                    <p className="border-t-2 border-b-2 border-green-500 py-4 md:text-lg text-regal-black">
                        ご訪問ありがとうございます。サイト運営者の美馬 巧と申します。<br/>
                        大阪府の私立大学に通う大学三年生です。将来はエンジニアとして活躍したいと思い、独学でプログラミングを勉強中です。<br/>
                        お問い合わせは、Contactまたはinstagram、twitterからお願いします。

                    </p>
                </div>
                {/* language */}
                <div className="lg:w-3/4 mx-auto mb-12">
                    <p className="text-xl font-medium w-32 bg-purple-500 text-center rounded-lg shadow-purple2">Language</p>
                    <p className="md:text-lg">
                        HTML<br/>
                        CSS<br/>
                        PHP<br/>
                        Python<br/>
                    </p>
                </div>
                {/* Work */}
                <div className="lg:w-3/4 mx-auto">
                    <p className="text-xl font-medium w-32 bg-purple-500 text-center rounded-lg shadow-purple2">My Work</p>
                    <p></p>
                </div>



            </div>
            
        </div>
    )
}

export default Profile
