import { Link } from "react-router-dom";

const ContactMe = ({label, mailto}) => {
    console.log(window.location.href);
    return (    
        // <a href="mailto:amit.kumar.16208932@gmail.com">
            <div className="ml-5 flex bg-violet-500 p-3 rounded-sm">
                <button
                    className="text-white pr-2"
                    onClick={() => {
                        window.location.href = mailto;
                        console.log(window.location.href);
                }}>
                    {label}
                </button>
                <i className="fa-regular fa-paper-plane pt-1" style={{color: "#f7f7f7"}}></i>
            </div>
        // </a>
    )
}

export default ContactMe;