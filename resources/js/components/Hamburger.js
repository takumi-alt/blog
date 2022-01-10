import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
// ボタンを押すと、ハンバーガーからメニューが飛び出す
// ハンバーガーがバツに変わる

const Hamburger = () => {

    const [menu, setMenu] = useState(false);

    const toggleClick = () => {
        setMenu(!menu)
    }

    return (
            <div>
                <button onClick={toggleClick} className={menu ? "hidden" : ""}>
                    <GiHamburgerMenu className="text-white rounded-full w-12 h-12 m-2 p-2" />
                </button>

                <button onClick={toggleClick} className={menu ? "" : "hidden"}>
                    <ImCross className="text-white rounded-full w-12 h-12 m-2 p-2" />
                </button>
                <ul className={menu ? "w-64 bg-light-purple" : "hidden"}>
                    <li className="list-none">search</li>
                    <li className="list-none">search</li>
                    <li className="list-none">search</li>
                    <li className="list-none">search</li>
                    <li className="list-none">search</li>
                    <li className="list-none">search</li>
                    <li className="list-none">search</li>
                </ul>
            </div>

            
       
    )
}

export default Hamburger
