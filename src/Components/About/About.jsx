import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoCodeSlash, IoColorPalette, IoServer } from "react-icons/io5"; // Import relevant icons

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="w-full flex justify-center mb-8">
        {/* Center the "About Me" text */}
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
      </div>

      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="md:h-80 mb-6 md:mb-0 md:mr-10" src={AboutImg} alt="About img" />

        <ul>
          <div className="flex gap-3 py-4">
            <IoCodeSlash size={30} className="mt-1" /> {/* Code Icon */}
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                A passionate fresher skilled in HTML, CSS, JavaScript, and React, with a focus on creating responsive and user-friendly web applications. Eager to learn, adapt, and contribute to building modern, scalable solutions.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
            <IoColorPalette size={30} className="mt-1" /> {/* Palette Icon */}
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                UI/UX Designer
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                A motivated fresher with a keen interest in UI/UX design and a strong understanding of design principles. Excited to contribute to intuitive and seamless user experiences through well-structured design solutions.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
            <IoServer size={30} className="mt-1" /> {/* Server Icon */}
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                A motivated fresher with a good understanding of MongoDb, Express, NodeJs database design, and optimization techniques. Excited to work on building and managing efficient, secure, and scalable database systems.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;

















































// import AboutImg from "../../assets/7358653-removebg-preview.png";
// import { IoArrowForward } from "react-icons/io5";

// const About = () => {
//   return (
//     <div
//       id="About"
//       className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
//     >
//       <div className="w-full flex justify-center mb-8">
//         {/* Center the "About Me" text */}
//         <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
//       </div>

//       <div>
//         <div className="md:flex flex-wrap flex-col md:flex-row items-center">
//           <img className="md:h-80" src={AboutImg} alt="About img" />

//           <ul>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Frontend developer
//                 </h1>
//                 <p className="text-lg md:text-md leading-tight">
//                   A passionate fresher skilled in HTML, CSS, JavaScript, and React, with a focus on creating responsive and user-friendly web applications. Eager to learn, adapt, and contribute to building modern, scalable solutions.
//                 </p>
//               </span>
//             </div>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   UI/UX Designer
//                 </h1>
//                 <p className="text-lg md:text-md leading-tight">
//                   A motivated fresher with a keen interest in UI/UX design and a strong understanding of design principles, optimization techniques. Excited to contribute to intuitive and seamless user experiences through well-structured design solutions.
//                 </p>
//               </span>
//             </div>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Backend developer
//                 </h1>
//                 <p className="text-lg md:text-md leading-tight">
//                   A motivated fresher with a good understanding of NoSQL, database design, and optimization techniques. Excited to work on building and managing efficient, secure, and scalable database systems.
//                 </p>
//               </span>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
