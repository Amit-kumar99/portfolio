import { Link }from "react-router-dom";
import { useState } from "react";

const Links = ({darkMode, setDarkMode}) => {
    const [isLinkActive1, setIsLinkActive1] = useState(false);
    const [isLinkActive2, setIsLinkActive2] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <div className="flex justify-between">
            <div>
                <Link
                    className={"text-black-600"} 
                    to="/" >
                    <h2 className="text-2xl ml-10 dark:text-white">Amit Kumar</h2>
                </Link>
            </div>
            <div className="flex">
                <Link 
                    className= {"pt-1 mx-5 " + (isLinkActive1 ? "dark:text-blue-500 text-blue-500" : "dark:text-white text-gray-500")} 
                    to="/" 
                    onMouseOver={() => setIsLinkActive1(true)}
                    onMouseOut={() => setIsLinkActive1(false)}
                    >
                        Home
                </Link>
                <Link 
                    className= {"pt-1 mx-5 " + (isLinkActive2 ? "dark:text-blue-500 text-blue-500" : "dark:text-white text-gray-500")}
                    to="/projects"
                    onMouseOver={() => setIsLinkActive2(true)}
                    onMouseOut={() => setIsLinkActive2(false)}
                    >
                        Projects
                </Link> 
                <button>
                    <div onClick={toggleDarkMode} className="ml-3 w-10 cursor-pointer">
                        <i className={darkMode ? "fa-regular fa-moon text-white" : "fa-regular fa-lightbulb"}/> 
                    </div>   
                </button>
            </div>
        </div>
    )
}

export default Links;