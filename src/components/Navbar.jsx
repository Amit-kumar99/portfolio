import { Link }from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-5 font-semibold">
          <h2 className="text-xl ml-10">Amit Kumar</h2>
          <div className="mr-10">
              <Link className="m-5" to="/">Home</Link>
              <Link className="m-5" to="/about">Resume</Link>
              <Link className="m-5" to="/projects">Projects</Link>
              <Link className="m-5" to="/contact">Contact Me</Link>
          </div>
      </nav>
      <hr/>
    </div>
  )
}

export default Navbar