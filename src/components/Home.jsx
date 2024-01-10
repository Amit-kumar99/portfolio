import Sidebar from "./Sidebar";
import Skills from "./Skills";
import Description from "./Description";
import DownloadResumeBtn from "./DownloadResumeBtn";
import ProfileImage from "./ProfileImage";

const Home = () => {
  return (
    <div className="w-8/12 flex mx-auto mt-24">
      <Sidebar/>
      <div className="ml-32 mt-10">
        <Description/>
        <Skills/>
        <DownloadResumeBtn/>
      </div>
      <ProfileImage/>
    </div>
  )
}

export default Home;