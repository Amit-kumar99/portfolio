import Sidebar from "./Sidebar";
import Skills from "./Skills";
import Description from "./Description";
import DownloadResumeBtn from "./DownloadResumeBtn";
import ProfileImage from "./ProfileImage";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <div className="w-8/12 flex mx-auto mt-24">
      <Sidebar/>
      <div className="ml-32 mt-10">
        <Description/>
        <Skills/>
        <div className="flex mt-7">
          <DownloadResumeBtn/>
          <ContactMe label="Message me" mailto="mailto:amit.kumar.16208932@gmail.com" />
        </div>
      </div>
      <ProfileImage/>
    </div>
  )
}

export default Home;