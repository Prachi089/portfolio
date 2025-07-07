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
      className="p-10 md:p-24 flex flex-col items-center justify-center"
    >
      {/* Centered "Skills" Text */}
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        Skills
      </h1>
      {/* Icons Section */}
      <div className="flex flex-wrap items-center justify-center gap-12">
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={90} />
          </span>
          <h3 className="text-white font-medium mt-2">HTML</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaCss3 color="#1572B6" size={90} />
          </span>
          <h3 className="text-white font-medium mt-2">CSS</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaReact color="#61DAFB" size={90} />
          </span>
          <h3 className="text-white font-medium mt-2">React</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaJs color="#F7DF1E" size={90} />
          </span>
          <h3 className="text-white font-medium mt-2">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <SiMongodb color="#47A248" size={90} />
          </span>
          <h3 className="text-white font-medium mt-2">MongoDB</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <ImGithub color="#FF4438" size={90} />
          </span>
          <h3 className="text-white font-medium mt-2">Github</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaBootstrap color="#FF4438" size={90} />
          </span>
          <h3 className="text-white font-medium mt-2">Bootstrap</h3>
        </div>

      </div>
      {/* <Github /> */}

    </div>
  );
};

export default Skills;
