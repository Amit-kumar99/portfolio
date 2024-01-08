const ContactMe = () => {
  return (
    <div className="mt-10 mx-auto w-4/12">
        <h2 className="font-bold text-5xl text-center">Contact Me</h2>
        <form className="mt-10">
            <div>
                <input className="border-2 p-2 mb-3 w-full" type="text" placeholder="Your name"/>
            </div>
            <div>
                <input className="border-2 p-2 mb-3 w-full" type="email" placeholder="Your email"/>
            </div>
            <div>
                <textarea className="border-2 my-3  w-full" rows="5" cols="50" placeholder="Your message"></textarea>
            </div>
            <div>
                <button className="border-2 bg-violet-500 text-white p-3 my-3 rounded-md">Send message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactMe;