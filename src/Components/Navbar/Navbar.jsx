import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Import Icons

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Function to handle the resume download and view
  const handleResumeAction = () => {
    window.open(
      "https://drive.google.com/file/d/17Zj_wB2rGpmnnMDtcNQsMuQDqKA2EyZf/view?usp=sharing",
      "_blank"
    );
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/17Zj_wB2rGpmnnMDtcNQsMuQDqKA2EyZf/view?usp=sharing";
    link.download = "Resume_Prachisharma.pdf";
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center px-5 pt-4 pb-3 md:px-10 bg-[#465697] shadow-md">
      {/* Resume Button */}
      <div className="flex items-center">
        <button
          onClick={handleResumeAction}
          className="text-lg md:text-2xl font-bold tracking-wide bg-white text-[#465697] py-2 px-4 md:py-3 md:px-6 rounded-3xl hover:opacity-85 hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center absolute md:static top-16 left-0 right-0 bg-[#465697] md:bg-transparent p-5 md:p-0 rounded-lg md:rounded-none transition-all duration-300 z-50`}
      >
        <a href="#About" className="w-full md:w-auto">
          <li className="flex items-center gap-2 text-md md:mx-4 py-2 md:py-0 text-white transition-all duration-300 hover:opacity-85 hover:scale-105 text-center md:text-left">
            <FaUser /> About
          </li>
        </a>
        <a href="#Experience" className="w-full md:w-auto">
          <li className="flex items-center gap-2 text-md md:mx-4 py-2 md:py-0 text-white transition-all duration-300 hover:opacity-85 hover:scale-105 text-center md:text-left">
            <FaCode /> Skills
          </li>
        </a>
        <a href="#Projects" className="w-full md:w-auto">
          <li className="flex items-center gap-2 text-md md:mx-4 py-2 md:py-0 text-white transition-all duration-300 hover:opacity-85 hover:scale-105 text-center md:text-left">
            <FaProjectDiagram /> Projects
          </li>
        </a>
        <a href="#Contact" className="w-full md:w-auto">
          <li className="flex items-center gap-2 text-md md:mx-4 py-2 md:py-0 text-white transition-all duration-300 hover:opacity-85 hover:scale-105 text-center md:text-left">
            <FaEnvelope /> Contact
          </li>
        </a>
      </ul>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="absolute right-5 top-5 cursor-pointer text-white"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-5 top-5 cursor-pointer text-white"
            onClick={() => setMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
