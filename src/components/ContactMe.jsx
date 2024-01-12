import { useRef } from "react";

const ContactMe = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    // const messageRef = useRef(null);
    return (
        <div className="mt-10 mx-auto w-4/12">
            <h2 className="font-bold text-5xl text-center">Contact Me</h2>
            <form className="mt-10">
                <div>
                    <input 
                        ref = {nameRef}
                        className="border-2 p-2 mb-3 w-full" 
                        type="text" 
                        placeholder="Your name"/>
                </div>
                <div>
                    <input
                        ref = {emailRef} 
                        className="border-2 p-2 mb-3 w-full" 
                        type="email" 
                        placeholder="Your email"/>
                </div>
                <div>
                    <textarea 
                        // ref = {messageRef}
                        className="border-2 my-3 pl-2 pt-1 w-full" 
                        rows="5" 
                        cols="50" 
                        placeholder="Your message"/>
                </div>
                <a href="mailto: amit.kumar.16208932@gmail.com">
                    <div>
                        <button className="border-2 bg-violet-500 text-white p-3 my-3 rounded-md">Send message</button>
                    </div>
                </a>
            </form>
        </div>
    )
}

export default ContactMe;