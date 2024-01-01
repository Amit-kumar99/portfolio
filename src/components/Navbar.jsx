import { Link }from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <h2>Amit Kumar</h2>
        <div>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar