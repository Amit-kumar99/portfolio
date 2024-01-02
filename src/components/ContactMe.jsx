const ContactMe = () => {
  return (
    <div className="mt-16 mx-auto w-4/12">
        <h2 className="font-bold text-2xl mb-5">Contact Me</h2>
        <form>
            <div>
                <input className="border p-2 mb-3" type="text" placeholder="Your name"/>
            </div>
            <div>
                <input className="border p-2 mb-3" type="email" placeholder="Your email"/>
            </div>
            <div>
                <textarea className="border my-3" rows="5" cols="50" placeholder="Your message"></textarea>
            </div>
            <div>
                <button className="border bg-violet-500 text-white p-3 my-3 rounded-md">Send message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactMe