import { Link }from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-5 font-semibold">
          <h2 className="text-xl ml-5">Amit Kumar</h2>
          <div className="mr-5">
              <Link className="m-3" to="/">Home</Link>
              <Link className="m-3" to="/about">Resume</Link>
              <Link className="m-3" to="/projects">Projects</Link>
          </div>
      </nav>
      <hr/>
    </div>
  )
}

export default Navbar