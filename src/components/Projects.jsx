import { useEffect, useState } from "react";
import project1_img from "../images/project1_ss.png";
import project2_img from "../images/project2_ss.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects=[
    {
      id: 1,
      heading: "Swiggy Clone",
      description: "A food delivery application",
      tech_stack: "Html, Tailwind CSS, React",
      img: project1_img,
      code: "https://github.com/Amit-kumar99/swiggy-clone"
    },
    {
      id: 2,
      heading: "Netflix Clone",
      description: "An OTT platform",
      tech_stack: "Html, Tailwind CSS, React",
      img: project2_img,
      code: ""
    }
  ];

  const handlePreviousClick = () => {
    setActiveIndex(activeIndex===0 ? projects.length-1 : activeIndex-1)
  }
  const handleNextClick = () => {
    setActiveIndex(activeIndex===projects.length-1 ? 0 : activeIndex+1)
  }

  useEffect(() => {
    setTimeout(() => {
      handleNextClick();
    },3000);
  });

  return (
    <div className="mt-5 w-9/12 mx-auto">
      <h2 className="font-bold text-5xl text-center">Projects</h2>
        <div className="flex mt-10 mx-auto">
          <button className=" mr-16 p-3" onClick={handlePreviousClick}>
            <i className="fa-solid fa-less-than fa-2xl" style={{"color": "#311f51"}}></i>
          </button>
          <div className="mr-20">
            <img className="w-[700px] h-[400px]" src={projects[activeIndex].img} alt="project-image"/>
          </div>
          <div>
            <div>
              <h3 className="font-semibold text-2xl mb-2">{projects[activeIndex].heading}</h3>
              <p>{projects[activeIndex].description}</p>
              <p>TECH STACK: <span className="font-semibold">{projects[activeIndex].tech_stack}</span></p>
              <div className="flex mt-2">
                <Link 
                  className="border rounded-md p-3 my-2 mr-2 bg-violet-500 text-white"
                  to="">Live Demo
                </Link>
                <Link 
                  className="border rounded-md p-3 my-2 mr-2 bg-violet-500 text-white text-sm"
                  to={projects[activeIndex].code}>Source Code 
                </Link>
              </div>
            </div>
          </div>
          <button className="ml-16 p-3" onClick={handleNextClick}>
            <i className="fa-solid fa-greater-than fa-2xl"></i>
          </button>
        </div>
    </div>
  )
}

export default Projects;