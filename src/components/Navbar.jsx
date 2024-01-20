import Links from "./Links";

const Navbar = ({darkMode, setDarkMode}) => {

  return (
      <nav className="p-10 bg-green-100 font-semibold shadow-md">
        <Links darkMode={darkMode} setDarkMode={setDarkMode}/>
      </nav>
  )
}

export default Navbar;