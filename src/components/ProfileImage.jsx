import profile_pic from "../images/profile_pic.jpg";

const ProfileImage = () => {
  return (
    <div className="my-auto ml-24">
        <img className="w-52 h-44 rounded-full shadow-xl" src={profile_pic} alt="profile_image"/>
    </div>
  )
}

export default ProfileImage;