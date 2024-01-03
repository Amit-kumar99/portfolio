import { Link }from "react-router-dom";
import { useState } from "react";

const Links = ({isLinkActive, setIsLinkActive}) => {
    const [isLinkActive1, setIsLinkActive1] = useState(false);
    const [isLinkActive2, setIsLinkActive2] = useState(false);
    const [isLinkActive3, setIsLinkActive3] = useState(false);
    const [isLinkActive4, setIsLinkActive4] = useState(false);

    return (
        <div>
            <Link 
                className={"m-5 text-" + (isLinkActive1 ? "blue" : "gray") + "-600"} 
                to="/" 
                onMouseOver={() => setIsLinkActive1(true)}
                onMouseOut={() => setIsLinkActive1(false)}
                >
                    Home
            </Link>
            <Link 
                className={"m-5 text-" + (isLinkActive2 ? "blue" : "gray") + "-600"} 
                to="/about"
                onMouseOver={() => setIsLinkActive2(true)}
                onMouseOut={() => setIsLinkActive2(false)}
                >
                    Resume
            </Link>
            <Link 
                className={"m-5 text-" + (isLinkActive3 ? "blue" : "gray") + "-600"} 
                to="/projects"
                onMouseOver={() => setIsLinkActive3(true)}
                onMouseOut={() => setIsLinkActive3(false)}
                >
                    Projects
            </Link>
            <Link 
                className={"m-5 text-" + (isLinkActive4 ? "blue" : "gray") + "-600"} 
                to="/contact"
                onMouseOver={() => setIsLinkActive4(true)}
                onMouseOut={() => setIsLinkActive4(false)}
                >
                    Contact
            </Link>
        </div>
    )
}

export default Links;