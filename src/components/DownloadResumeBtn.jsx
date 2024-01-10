import resume from "../images/Resume.pdf";

const DownloadResumeBtn = () => {
  return (
    <div className="mt-7 mr-2">
        <a href={resume} download="Amit Kumar's Resume">
          <button 
            className="border rounded-md p-3 bg-green-500 text-white"
            onClick={() => {}}>Download Resume
          </button>
        </a>
    </div>
  )
}

export default DownloadResumeBtn;