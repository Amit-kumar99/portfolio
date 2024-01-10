const Skills = () => {
  return (
    <ul className="flex mt-5">
        
        <li className="p-3 bg-gray-100 mr-2 rounded-full shadow-lg" data-tooltip-target="tooltip-1">
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
    )
}

export default Skills;