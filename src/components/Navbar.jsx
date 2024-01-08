import Links from "./Links";

const Navbar = () => {

  return (
    <div>
      <nav className="flex justify-between p-10 bg-green-100 font-semibold">
        <h2 className="text-2xl ml-10">Amit Kumar</h2>
        <div className="mr-10">
          <Links/>
        </div>
      </nav>
      <hr/>
    </div>
  )
}

export default Navbar;