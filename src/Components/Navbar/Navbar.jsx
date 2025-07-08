import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const Navbar = ({ setQuoteApiUrl }) => {
  const [menu, setMenu] = useState(false);

  const handleNavClick = (section, apiUrl = null) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setQuoteApiUrl(apiUrl || "https://zenquotes.io/api/today");
    setMenu(false);
  };
  const downloadAndOpen = () => {
  // Open PDF in new tab
  window.open("/Prachi@CV-SDE.pdf", "_blank", "noopener,noreferrer");

  // Trigger download
  const link = document.createElement("a");
  link.href = "/Prachi@CV-SDE.pdf";
  link.download = "Prachi@CV-SDE.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const navItems = [
    { name: "About", icon: <FaUser size={20} /> },
    { name: "Education", icon: <FaGraduationCap size={20} /> },
    { name: "Skills", icon: <FaCode size={20} /> },
    { name: "Experience", icon: <FaBriefcase size={20} />, api: "https://zenquotes.io/api/random" },
    { name: "Projects", icon: <FaProjectDiagram size={20} /> },
    { name: "Contact", icon: <FaEnvelope size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d] shadow-md px-8 py-4 flex justify-between items-center text-lg">
      {/* Resume Download Link */}
    <button
  onClick={() => {
    // open PDF in new tab
    window.open("/Prachi@CV-SDE.pdf", "_blank", "noopener,noreferrer");
    // trigger download
    const link = document.createElement("a");
    link.href = "/Prachi@CV-SDE.pdf";
    link.download = "Prachi@CV-SDE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="font-bold text-[#B7F34C] bg-black border-2 border-[#B7F34C] py-2 px-6 rounded-full hover:bg-[#B7F34C] hover:text-black transition-colors duration-300"
>
  Download Résumé
</button>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex absolute md:static top-16 left-0 right-0 bg-[#0d0d0d] md:bg-transparent p-6 md:p-0 md:flex-row flex-col items-center gap-8 z-40`}
      >
        {navItems.map(({ name, icon, api }) => (
          <li
            key={name}
            className="flex items-center gap-3 text-white hover:text-[#B7F34C] cursor-pointer transition"
            onClick={() => handleNavClick(name, api)}
          >
            {icon} {name}
          </li>
        ))}
      </ul>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden text-white cursor-pointer">
        {menu ? (
          <RiCloseLine size={30} onClick={() => setMenu(false)} />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenu(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;





// import { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
// import {
//   FaUser,
//   FaCode,
//   FaProjectDiagram,
//   FaEnvelope,
//   FaGraduationCap,
//   FaBriefcase,
// } from "react-icons/fa";

// const Navbar = ({ setQuoteApiUrl }) => {
//   const [menu, setMenu] = useState(false);

//   const handleNavClick = (section, apiUrl = null) => {
//     document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
//     if (apiUrl) setQuoteApiUrl(apiUrl);
//     else setQuoteApiUrl("https://zenquotes.io/api/today");
//     setMenu(false); // close on mobile
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-3 md:px-10 bg-[#465697] shadow-md">
//       <button
//         onClick={() =>
//           window.open("/Prachi@CV-SDE.pdf", "_blank", "noopener,noreferrer")
//         }
//         className="text-lg md:text-2xl font-bold bg-white text-[#465697] py-2 px-4 md:py-3 md:px-6 rounded-3xl hover:opacity-85 hover:scale-105 transition-transform duration-300"
//       >
//         Download Resume
//       </button>

//       {/* Navigation */}
//       <ul
//         className={`${
//           menu ? "block" : "hidden"
//         } md:flex flex-col md:flex-row items-center absolute md:static top-16 left-0 right-0 bg-[#465697] md:bg-transparent p-5 md:p-0 z-50`}
//       >
//         <li
//           className="flex items-center gap-2 text-md md:mx-4 py-2 cursor-pointer text-white hover:scale-105"
//           onClick={() => handleNavClick("About")}
//         >
//           <FaUser /> About
//         </li>
//         <li
//           className="flex items-center gap-2 text-md md:mx-4 py-2 cursor-pointer text-white hover:scale-105"
//           onClick={() => handleNavClick("Education")}
//         >
//           <FaGraduationCap /> Education
//         </li>
//         <li
//           className="flex items-center gap-2 text-md md:mx-4 py-2 cursor-pointer text-white hover:scale-105"
//           onClick={() => handleNavClick("Skills")}
//         >
//           <FaCode /> Skills
//         </li>
//         <li
//           className="flex items-center gap-2 text-md md:mx-4 py-2 cursor-pointer text-white hover:scale-105"
//           onClick={() =>
//             handleNavClick("Experience", "https://zenquotes.io/api/random")
//           }
//         >
//           <FaBriefcase /> Experience
//         </li>
//         <li
//           className="flex items-center gap-2 text-md md:mx-4 py-2 cursor-pointer text-white hover:scale-105"
//           onClick={() => handleNavClick("Projects")}
//         >
//           <FaProjectDiagram /> Projects
//         </li>
//         <li
//           className="flex items-center gap-2 text-md md:mx-4 py-2 cursor-pointer text-white hover:scale-105"
//           onClick={() => handleNavClick("Contact")}
//         >
//           <FaEnvelope /> Contact
//         </li>
//       </ul>

//       {/* Hamburger */}
//       <div className="md:hidden">
//         {menu ? (
//           <RiCloseLine
//             size={30}
//             className="text-white cursor-pointer"
//             onClick={() => setMenu(false)}
//           />
//         ) : (
//           <RiMenu2Line
//             size={30}
//             className="text-white cursor-pointer"
//             onClick={() => setMenu(true)}
//           />
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
