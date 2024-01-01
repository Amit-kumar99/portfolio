const Projects = () => {
  const projects=[
    {
      id: 1,
      heading: "Swiggy Clone",
      description: "",
      link: "",
      code: ""
    },
    {
      id: 2,
      heading: "Netflix Clone",
      description: "...",
      link: "",
      code: ""
    }
  ];

  return (
    <div className="mt-10">
      <h2 className="font-bold text-4xl text-center">Projects</h2>
      {/* carousel */}
      <div className="flex mx-auto mt-10 w-8/12">
        {projects.map((proj) => (
          <div key={proj.id} className="flex">
            <div>
              <img src="" alt="project-image"/>
            </div>
            <div>
              <div>
                <h3 className="font-semibold text-lg">{proj.heading}</h3>
                <p>Project description</p>
                <div className="flex">
                  <button className="border rounded-md p-3 my-2 mr-2">Live Link</button>
                  <button className="border rounded-md p-3 my-2 mr-2">Github: Source Code</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects