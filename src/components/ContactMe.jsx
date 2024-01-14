const ContactMe = () => {
    return (    
        <a className="ml-5" href="mailto: amit.kumar.16208932@gmail.com">
            <div className="flex bg-violet-500 p-3 rounded-sm">
                <button className="text-white pr-2">Contact Me</button>
                <i className="fa-regular fa-paper-plane pt-1" style={{color: "#f7f7f7"}}></i>
            </div>
        </a>
    )
}

export default ContactMe;