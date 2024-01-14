import { Link }from "react-router-dom";
import { useState } from "react";

const Links = () => {
    const [isLinkActive1, setIsLinkActive1] = useState(false);
    const [isLinkActive2, setIsLinkActive2] = useState(false);
    const [isLinkActive3, setIsLinkActive3] = useState(false);

    return (
        <div className="flex justify-between">
            <div>
                <Link
                    className={"text-black-600"} 
                    to="/" >
                    <h2 className="text-2xl ml-10">Amit Kumar</h2>
                </Link>
            </div>
            <div>
                <Link 
                    className={"mx-5 text-" + (isLinkActive1 ? "black" : "gray") + "-600"} 
                    to="/" 
                    onMouseOver={() => setIsLinkActive1(true)}
                    onMouseOut={() => setIsLinkActive1(false)}
                    >
                        Home
                </Link>
                <Link 
                    className={"mx-5 text-" + (isLinkActive2 ? "black" : "gray") + "-600"} 
                    to="/projects"
                    onMouseOver={() => setIsLinkActive2(true)}
                    onMouseOut={() => setIsLinkActive2(false)}
                    >
                        Projects
                </Link>
            </div>
        </div>
    )
}

export default Links;