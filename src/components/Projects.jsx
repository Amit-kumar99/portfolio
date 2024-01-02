import { useEffect, useState } from "react";
import project1_img from "../images/project1_ss.png"
import project2_img from "../images/project2_ss.png"

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects=[
    {
      id: 1,
      heading: "Swiggy Clone",
      description: "A food delivery application",
      tech_stack: "Html, Tailwind CSS, React",
      img: project1_img,
      code: ""
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
    <div className="mt-16 w-8/12 mx-auto">
      <h2 className="font-bold text-5xl text-center">Projects</h2>
      {/* carousel */}
      <div className="flex mt-10 mx-auto">
        <div className="flex">
          <button className="border border-black mr-16 p-3" onClick={handlePreviousClick}>
            <i className="fa-solid fa-less-than"></i>
          </button>
          <div className="mr-20">
            <img className="w-56 h-40" src={projects[activeIndex].img} alt="project-image"/>
          </div>
          <div>
            <div>
              <h3 className="font-semibold text-2xl mb-2">{projects[activeIndex].heading}</h3>
              <p>{projects[activeIndex].description}</p>
              <p>TECH STACK: <span className="font-semibold">{projects[activeIndex].tech_stack}</span></p>
              <div className="flex mt-2">
                <button className="border rounded-md p-3 my-2 mr-2 bg-violet-500 text-white">Live Link</button>
                <button className="border rounded-md p-3 my-2 mr-2 bg-violet-500 text-white">Github: Source Code</button>
              </div>
            </div>
          </div>
          <button className="border border-black ml-16 p-3" onClick={handleNextClick}>
            <i className="fa-solid fa-greater-than"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects