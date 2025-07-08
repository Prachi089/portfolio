/* eslint-disable no-unused-vars */
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { FaBootstrap } from "react-icons/fa";
// import {Github} from '../Github/Github'

const Skills = () => {
  return (
    <div
      id="Skills"
      className="w-full py-16 px-4 md:px-20 bg-gradient-to-r from-[#4B26CF] to-[#B7F34C] text-white overflow-x-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">Skills</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {[
          { icon: <FaHtml5 size={70} color="#E34F26" />, label: "HTML" },
          { icon: <FaCss3 size={70} color="#1572B6" />, label: "CSS" },
          { icon: <FaJs size={70} color="#F7DF1E" />, label: "JavaScript" },
          { icon: <FaReact size={70} color="#61DAFB" />, label: "React" },
          { icon: <SiMongodb size={70} color="#47A248" />, label: "MongoDB" },
          { icon: <ImGithub size={70} color="#ffffff" />, label: "GitHub" },
          { icon: <FaBootstrap size={70} color="#7952B3" />, label: "Bootstrap" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-[#1c1c1c] shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_40px_rgba(0,0,0,1)] transition-transform duration-300 hover:scale-105"
          >
            {/* Icon without border */}
            <div className="">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-center">{skill.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// const Skills = () => {
//   return (
//     <div
//       id="Skills"
//       className="p-10 md:p-24 flex flex-col items-center justify-center"
//     >
//       {/* Centered "Skills" Text */}
//       <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
//         Skills
//       </h1>
//       {/* Icons Section */}
//       <div className="flex flex-wrap items-center justify-center gap-12">
//         <div className="flex flex-col items-center">
//           <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
//             <FaHtml5 color="#E34F26" size={90} />
//           </span>
//           <h3 className="text-white font-medium mt-2">HTML</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
//             <FaCss3 color="#1572B6" size={90} />
//           </span>
//           <h3 className="text-white font-medium mt-2">CSS</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
//             <FaReact color="#61DAFB" size={90} />
//           </span>
//           <h3 className="text-white font-medium mt-2">React</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
//             <FaJs color="#F7DF1E" size={90} />
//           </span>
//           <h3 className="text-white font-medium mt-2">JavaScript</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
//             <SiMongodb color="#47A248" size={90} />
//           </span>
//           <h3 className="text-white font-medium mt-2">MongoDB</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
//             <ImGithub color="#FF4438" size={90} />
//           </span>
//           <h3 className="text-white font-medium mt-2">Github</h3>
//         </div>
//         <div className="flex flex-col items-center">
//           <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
//             <FaBootstrap color="#FF4438" size={90} />
//           </span>
//           <h3 className="text-white font-medium mt-2">Bootstrap</h3>
//         </div>

//       </div>
//       {/* <Github /> */}

//     </div>
//   );
// };

// export default Skills;
