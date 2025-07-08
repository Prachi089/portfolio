import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white px-6 py-10 md:px-20 md:py-12 border-t border-[#222]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left - Slogan */}
        <div className="text-center md:text-left text-sm md:text-base font-medium">
          Eat 🍽️ Sleep 😴 Code 💻 Repeat 🔄
        </div>

        {/* Center - Credit */}
        <div className="text-center text-sm md:text-base flex items-center justify-center gap-1">
          Made with <FaHeart className="text-[#B7F34C]" /> by Prachi Sharma
        </div>

        {/* Right - Socials */}
        <div className="flex gap-6">
          <a
            href="mailto:prachimicrosoft99@gmail.com"
            className="hover:text-[#B7F34C] transition"
          >
            <MdOutlineEmail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/prachi-sharma9925/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B7F34C] transition"
          >
            <CiLinkedin size={22} />
          </a>
          <a
            href="https://github.com/Prachi089"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B7F34C] transition"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex flex-col md:flex-row items-center bg-[#465697] text-white p-6 md:p-12"
//     >
//       {/* Section 1: Slogan */}
//       <div className="text-center md:text-left flex-1">
//         <h1 className="text-2xl md:text-xl font-bold">
//           Eat 🍽️  Sleep 😴  Code 💻  Repeat 🔄
//         </h1>
//       </div>

//       {/* Section 2: Credit (Centered) */}
//       <div className="text-center flex-1">
//         <h3 className="text-sm md:text-xl font-normal">
//           {/* Made With 🖤 Prachi Sharma */}
//           Made With ❤️ Prachi Sharma
//         </h3>
//       </div>

//       {/* Section 3: Social Icons */}
//       <div className="flex gap-6 flex-1 justify-center md:justify-end">
//         <a href="mailto:prachimicrosoft99@gmail.com">
//           <MdOutlineEmail size={30} className="hover:text-gray-300 cursor-pointer" />
//         </a>
//         <a href="https://www.linkedin.com/in/prachi-sharma9925/" target="_blank" rel="noopener noreferrer">
//           <CiLinkedin size={30} className="hover:text-gray-300 cursor-pointer" />
//         </a>
//         <a href="https://github.com/Prachi089" target="_blank" rel="noopener noreferrer">
//           <FaGithub size={30} className="hover:text-gray-300 cursor-pointer" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;
