import avatarImg from "../../assets/prachinew.jpg";
import confetti from "canvas-confetti";
import { useEffect } from 'react';
// import './index.css'
const Home = () => {

  // useEffect(() => {
  //   // Fire confetti when component loads
  //   confetti({
  //     particleCount: 120,
  //     spread: 100,
  //     origin: { y: 0.6 }
  //   });
  // }, []);

  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <div className="flex flex-col-reverse md:flex-row min-h-screen">

        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-[#4B26CF] text-white flex flex-col justify-center items-start px-6 sm:px-10 lg:px-16 py-16 space-y-6">

          {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug text-white drop-shadow-lg animate-fadeZoom">
          Prachi <span className="text-[#B7F34C]">Sharma.</span>
        </h1> */}

          <h1 className="typewriter text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug text-white drop-shadow-lg">
            Prachi <span className="text-[#B7F34C]">Sharma.</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
            Software <span className="text-[#B7F34C]">Developer.</span>
          </h1>

          <p className="text-base sm:text-lg max-w-xl text-gray-200">
            Building tomorrow’s technology with today’s learning and dedication.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base max-w-xl">
            <p className="border-l-4 border-[#B7F34C] pl-4">
              MERN Developer crafting beautiful & responsive web experiences. Fast learner with a growth mindset and a love for solving challenges.
            </p>
            <p className="border-l-4 border-[#B7F34C] pl-4">
              Passionate about building full-stack applications using MongoDB, Express.js, React.js, and Node.js — with a focus on performance & scalability.
            </p>
          </div>
        </div>

        {/* Right Side */}
       <div className="w-full md:w-1/2 bg-[#B7F34C] flex justify-center items-center py-16 px-6 relative overflow-hidden">

  {/* Glowing animated ring behind avatar */}
  <div className="absolute w-80 h-80 border-4 border-dashed border-white rounded-full animate-spin-slow opacity-10 -z-10"></div>

  <div className="relative w-full max-w-[320px] mx-auto group animate-float">

    {/* Avatar */}
    <div className="rounded-xl overflow-hidden shadow-xl transform group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] transition duration-500 ease-in-out">
      <img
        src={avatarImg}
        alt="Prachi Sharma"
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>

    {/* Border appears on hover */}
    <div className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-100 transition duration-500" />

    {/* Optional name */}
    {/* <div className="text-center text-black mt-4 font-semibold text-lg">
      Prachi Sharma
    </div> */}
  </div>
</div>

      </div>
    </div >
  );
};

export default Home;
