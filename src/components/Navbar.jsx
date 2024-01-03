import Links from "./Links";

const Navbar = () => {

  return (
    <div>
      <nav className="flex justify-between p-5 font-semibold">
        <h2 className="text-xl ml-10">Amit Kumar</h2>
        <div className="mr-10">
          <Links/>
        </div>
      </nav>
      <hr/>
    </div>
  )
}

export default Navbar