import Links from "./Links";

const Navbar = ({darkMode, setDarkMode}) => {

  return (
      <nav className="px-10 pt-5 dark:bg-black font-semibold">
        <Links darkMode={darkMode} setDarkMode={setDarkMode}/>
      </nav>
  )
}

export default Navbar;