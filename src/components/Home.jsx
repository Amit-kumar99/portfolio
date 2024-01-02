import profile_pic from "../images/profile_pic.jpg";

const Home = () => {
  return (
    <div className="w-8/12 flex mx-auto mt-32">
      <div className="my-auto">
        <div>
          <a href="https://github.com/Amit-kumar99?tab=repositories">
            <i className="fa-brands fa-github fa-2xl"/>
          </a>
        </div>
        <div className="mt-7">
          <a href="https://www.linkedin.com/in/amit-kumar-431a01235/">
            <i className="fa-brands fa-linkedin fa-2xl"/>
          </a>
        </div>
      </div>
      <div className="ml-32 mt-10">
        <h2 className="font-semibold text-4xl mb-2">Hi, I'm <p className="font-bold">Amit Kumar</p></h2>
        <h3 className="font-semibold text-2xl text-gray-600 mb-2">React Developer</h3>
        <p className="text-lg">Built multiple projects similar to real world applications.</p>
      </div>
      <div className="ml-24">
        <img className="w-48 h-52 rounded-full" src={profile_pic} alt="profile_image"/>
      </div>
    </div>
  )
}

export default Home