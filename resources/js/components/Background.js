import React from 'react'
import '../../css/app.css'

const Background = () => {
    return (
            <div className="">
                <span className="w-24 h-24 bg-purple-400 rounded-lg animate-rotate2 absolute -bottom-110 left-0"></span>
                <span className="w-6 h-6 bg-purple-400 rounded-sm animate-rotate4 absolute -bottom-110 left-8 delay-500"></span>
                <span className="w-16 h-16 md:w-48 md:h-48 bg-purple-400 rounded-xl animate-rotate6 absolute -bottom-110 left-20 delay-1000"></span>
                <span className="w-24 h-24 bg-purple-400 rounded-xl animate-rotate2 absolute -bottom-110 left-64"></span>
                <span className="w-8 h-8 bg-purple-400 rounded-sm animate-rotate4 absolute -bottom-110 left-110"></span>
                <span className="w-32 h-32 bg-purple-400 rounded-xl animate-rotate3 absolute -bottom-110 right-110 delay-4000"></span>
                <span className="w-16 h-16 bg-purple-400 rounded-lg animate-rotate5 absolute -bottom-110 right-2"></span>
                <span className="w-12 h-12 md:w-84 md:h-84 bg-purple-400 rounded-2xl animate-rotate4 absolute -bottom-110 right-16"></span>
                <span className="w-36 h-36 bg-purple-400 rounded-xl animate-rotate7 absolute -bottom-110 right-40 delay-1000"></span>
            </div>
    )
}

export default Background
