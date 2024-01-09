import profile_pic from "../images/profile_pic.jpg";
import Sidebar from "./Sidebar";
import resume from "../images/Resume.pdf";

const Home = () => {
  return (
    <div className="w-8/12 flex mx-auto mt-32">
      <div className="my-auto">
        <Sidebar/>
      </div>
      <div className="ml-32 mt-10">
        <h2 className="font-semibold text-4xl mb-2">Hi, I'm <p className="font-bold text-6xl">Amit Kumar</p></h2>
        <h3 className="font-semibold text-2xl text-gray-600 mb-2">React Developer</h3>
        <p className="text-lg">Built multiple projects similar to real world applications.</p>
        <a href={resume} download="Amit Kumar's Resume">
          <button 
            className="border rounded-md p-3 mt-5 mr-2 bg-green-500 text-white"
            onClick={() => {}}>Download Resume
          </button>
        </a>
        <ul className="flex mt-5">
          <li className="p-3 bg-gray-100 mr-2 rounded-full shadow-lg">
            <i className="fa-brands fa-html5 fa-2xl" style={{color: "#eb460f"}}/>
          </li>
          <li className="p-3 bg-gray-100 mr-2 rounded-full shadow-lg">
            <i className="fa-brands fa-css3-alt fa-2xl" style={{color: "#0b5be5"}}/>
          </li>
          <li className="p-3 bg-gray-100 mr-2 rounded-full shadow-lg">
            <i className="fa-brands fa-js fa-2xl" style={{color: "#d7d019"}}/>
          </li>
          <li className="pt-3 px-2 bg-gray-100 mr-2 rounded-full shadow-lg">
            <i className="fa-brands fa-react fa-2xl" style={{color: "#0eb7e1"}}/>
          </li>
          <li className="pt-4 bg-gray-100 px-2 mr-2 rounded-full shadow-lg">
            <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="tailwind-logo"/>
          </li>
          <li className="pt-2 bg-gray-100 px-2 mr-2 rounded-full shadow-lg">
            <img className="w-8" src="https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png" alt="firebase-logo"/>
          </li>
          <li className="p-3 bg-gray-100 mr-2 rounded-full shadow-lg">
            <i className="fa-brands fa-square-git fa-2xl" style={{color: "#f72c08"}}/>
          </li>
          <li className="pt-3 px-2 bg-gray-100 rounded-full shadow-lg">
            <i className="fa-brands fa-github fa-2xl" style={{color: "#121212"}}/>
          </li>
        </ul>
      </div>
      <div className="ml-24">
        <img className="w-48 h-52 rounded-full" src={profile_pic} alt="profile_image"/>
      </div>
    </div>
  )
}

export default Home;