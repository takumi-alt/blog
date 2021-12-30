import React from 'react'
import '../../css/app.css'
import Background from './Background'

const Contact = () => {
    return (
        <div className="bg-gray-200 mx-auto relative overflow-hidden">
            < Background />
            <div className="md:w-4/5 mx-auto px-4 pt-12">

                <form action="/api/contact" method="POST">
                    <div className="mb-8 w-full">
                        <p className="mb-2 text-lg font-black">name</p>
                        <input type="text" name="name" className="block mx-auto rounded-xl mb-8 w-full h-12"></input>
                    </div>
                    <div className="mb-8 w-full">
                        <p className="mb-2 text-lg font-black">mail</p>
                        <input type="text" name="mail" className="block mx-auto rounded-xl mb-8 w-full h-12"></input>
                    </div>
                    <div className="mb-8 w-full">
                        <p className="mb-2 text-lg font-black">title</p>
                        <input type="text" name="title" className="block mx-auto rounded-xl mb-8 w-full h-12"></input>
                    </div>
                    <div className="pb-8 w-full">
                        <p className="mb-2 text-lg font-black">content</p>
                        <textarea name="content" className="block mx-auto rounded-xl w-full h-48"></textarea>
                    </div>
                    <div className="pb-12">
                        <button type="submit" className="bg-white w-24 h-8 rounded-xl text-lg font-black">submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
