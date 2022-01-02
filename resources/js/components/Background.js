import React from 'react'
import '../../css/app.css'

const Background = () => {
    return (
            <div>
                <span className="w-24 h-24 bg-purple-400 rounded-lg animate-rotate3 absolute -bottom-110 left-0 transition animation-delay-2000"></span>
                <span className="w-6 h-6 bg-purple-400 rounded-sm animate-rotate4 absolute -bottom-110 left-8 animation-delay-500"></span>
                <span className="w-16 h-16 md:w-48 md:h-48 bg-purple-400 rounded-xl animate-rotate6 absolute -bottom-110 left-20 animation-delay-1000"></span>
                <span className="w-24 h-24 md:w-64 md:h-64 bg-purple-400 rounded-xl animate-rotate4 absolute -bottom-110 left-32"></span>
                <span className="w-24 h-24 bg-purple-400 rounded-xl animate-rotate2 absolute -bottom-110 left-64"></span>
                <span className="w-8 h-8 bg-purple-400 rounded-sm animate-rotate8 absolute -bottom-110 left-110"></span>
                <span className="w-24 h-24 bg-purple-400 rounded-lg animate-rotate7 absolute -bottom-110 left-110 animation-delay-7000"></span>
                <span className="w-32 h-32 bg-purple-400 rounded-lg animate-rotate4 absolute -bottom-110 left-110 animation-delay-5000"></span>
                <span className="w-32 h-32 bg-purple-400 rounded-xl animate-rotate3 absolute -bottom-110 right-110 animation-delay-4000"></span>
                <span className="w-16 h-16 bg-purple-400 rounded-lg animate-rotate5 absolute -bottom-110 right-2"></span>
                <span className="w-28 h-28 md:w-84 md:h-84 bg-purple-400 rounded-2xl animate-rotate5 absolute -bottom-110 right-16 animation-delay-8000"></span>
                <span className="w-36 h-36 bg-purple-400 rounded-xl animate-rotate7 absolute -bottom-110 right-40 animation-delay-1000"></span>
            </div>
    )
}

export default Background
