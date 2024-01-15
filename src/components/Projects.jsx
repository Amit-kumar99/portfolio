import { useEffect, useState } from "react";
import project1_img1 from "../images/swiggy-1.png";
import project1_img2 from "../images/swiggy-2.png";
import project2_img1 from "../images/yt-1.png";
import project2_img2 from "../images/yt-2.png";
import project3_img1 from "../images/netflix-1.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects=[
    {
      id: 1,
      heading: "Swiggy Clone",
      tech_stack: "Html, Tailwind CSS, React",
      img: [project1_img1, project1_img2],
      code: "https://github.com/Amit-kumar99/swiggy-clone"
    },
    {
      id: 2,
      heading: "Youtube Clone",
      tech_stack: "Html, Tailwind CSS, React",
      img: [project2_img1, project2_img2],
      code: "https://github.com/Amit-kumar99/youtube-clone"
    },
    {
      id: 2,
      heading: "Netflix Clone",
      tech_stack: "Html, Tailwind CSS, React",
      img: [project3_img1, project2_img2],
      code: "https://github.com/Amit-kumar99/netflix-clone"
    },
  ];

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
    <div className="mt-10 w-11/12 mx-auto">
      <h2 className="font-bold text-3xl">Projects</h2>
      <div className="flex">
        {projects.map((project) => (
          <div key={project.id} className="flex mt-10 mx-auto">
            <div className="border">
              <div className="flex">
                <div>
                  <img className="w-[440px] h-[300px]" src={project.img[activeIndex]} alt="project-image"/>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">{project.heading}</h3>
                  <p>TECH STACK: <span className="font-semibold">{project.tech_stack}</span></p>
                  <div className="flex mt-2">
                    <Link 
                      className="border rounded-md p-3 my-2 mr-2 bg-violet-500 text-white"
                      to="">Live Demo
                    </Link>
                    <Link 
                      className="border rounded-md p-3 my-2 bg-violet-500 text-white text-sm"
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
  )
}

export default Projects;