import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../utils/projectsData";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextImageClick = () => {
    setActiveIndex(activeIndex===projects[0].img.length-1 ? 0 : activeIndex+1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextImageClick();
    },2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="dark:bg-black h-[643px]">
      <div className="pt-16 w-11/12 mx-auto">
        <h2 
          className={"font-bold text-4xl ml-3 dark:text-white"}>
            Projects
        </h2>
        <div className="flex mt-10">
          {projects.map((project) => (
            <div key={project.id} className="flex w-[440px] mx-auto bg-white pb-2">
              <div>
                <div className="flex">
                  <div>
                    <img className="w-[440px] h-[300px]" src={project.img[activeIndex]} alt="project-image"/>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">{project.heading}</h3>
                    {/* <p className="font-semibold">{project.tech_stack}</p> */}
                    <div className="flex mt-2">
                      <Link 
                        className="rounded-sm px-3 py-2 my-1 mr-2 bg-violet-500 text-white"
                        to="">Live Demo
                      </Link>
                      <Link 
                        className="rounded-sm px-3 py-2 my-1 bg-violet-500 text-white"
                        to={project.code}>Source Code 
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;