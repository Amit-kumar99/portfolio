import resume_img from "../images/resume_img.png";

const About = () => {
  return (
    <div>
      <h2 className="font-bold text-5xl text-center mt-5">Resume</h2>
      <div className="w-8/12 border mx-auto mt-10">
        <img src={resume_img} alt="resume-img"/>
      </div>
    </div>
  )
}

export default About;