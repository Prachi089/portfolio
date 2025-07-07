import avatarImg from "../../assets/prachinew.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0d0d]">
      <div className="flex flex-col md:flex-row items-center justify-between text-white w-full px-6 md:px-16 py-24 z-10 relative">
        
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-2/5 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            <TextChange />
          </h1>

          <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
            MERN Developer crafting beautiful & responsive web experiences. Experienced in building full-stack applications using MongoDB, Express.js, React.js, and Node.js with an eye for performance and scalability.
          </p>

          <a href="#Footer">
            <button className="bg-[#465697] hover:bg-[#5b6ea4] hover:scale-105 transition duration-300 ease-in-out text-white py-3 px-6 rounded-full text-md md:text-lg shadow-lg">
              🚀 Let's Connect
            </button>
          </a>
        </div>

        {/* Right: Smaller Image Section */}
        <div className="relative w-40 md:w-56">
          <div className="rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 ring-4 ring-[#465697] ring-offset-2 ring-offset-gray-900">
            <img
              src={avatarImg}
              alt="Prachi Sharma Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
