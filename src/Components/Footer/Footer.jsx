import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row items-center bg-[#465697] text-white p-6 md:p-12"
    >
      {/* Section 1: Slogan */}
      <div className="text-center md:text-left flex-1">
        <h1 className="text-2xl md:text-xl font-bold">
          Eat 🍽️  Sleep 😴  Code 💻  Repeat 🔄
        </h1>
      </div>

      {/* Section 2: Credit (Centered) */}
      <div className="text-center flex-1">
        <h3 className="text-sm md:text-xl font-normal">
          {/* Made With 🖤 Prachi Sharma */}
          Made With ❤️ Prachi Sharma
        </h3>
      </div>

      {/* Section 3: Social Icons */}
      <div className="flex gap-6 flex-1 justify-center md:justify-end">
        <a href="mailto:prachimicrosoft99@gmail.com">
          <MdOutlineEmail size={30} className="hover:text-gray-300 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/prachi-sharma9925/" target="_blank" rel="noopener noreferrer">
          <CiLinkedin size={30} className="hover:text-gray-300 cursor-pointer" />
        </a>
        <a href="https://github.com/Prachi089" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="hover:text-gray-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
