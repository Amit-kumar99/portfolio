import { useEffect, useState } from "react";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects=[
    {
      id: 1,
      heading: "Swiggy Clone",
      description: "description1",
      link: "",
      code: ""
    },
    {
      id: 2,
      heading: "Netflix Clone",
      description: "description2",
      link: "",
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
    },2000);
  });

  return (
    <div className="mt-10 w-4/12 mx-auto ">
      <h2 className="font-bold text-4xl text-center">Projects</h2>
      {/* carousel */}
      <div className="flex mt-10">
        <div className="flex">
          <button className="border border-black mr-5" onClick={handlePreviousClick}>L</button>
          <div className="mr-20">
            <img src="" alt="project-image"/>
          </div>
          <div>
            <div>
              <h3 className="font-semibold text-lg">{projects[activeIndex].heading}</h3>
              <p>{projects[activeIndex].description}</p>
              <div className="flex">
                <button className="border rounded-md p-3 my-2 mr-2">Live Link</button>
                <button className="border rounded-md p-3 my-2 mr-2">Github: Source Code</button>
              </div>
            </div>
          </div>
          <button className="border border-black ml-5" onClick={handleNextClick}>R</button>
        </div>
      </div>
    </div>
  )
}

export default Projects