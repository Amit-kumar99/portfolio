import resume from "../images/Resume.pdf";

const DownloadResumeBtn = () => {
  return (
    <a href={resume} download="Amit Kumar's Resume">
      <div className="flex rounded-sm p-3 bg-green-500">
        <button 
          className="text-white pr-2"
          onClick={() => {}}>Download Resume
        </button>
        <i className="fa-solid fa-download pt-1" style={{color: "#f0f4f3"}}/>
      </div>
    </a>
  )
}

export default DownloadResumeBtn;