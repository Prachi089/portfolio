// import { TbSourceCode } from "react-icons/tb";
// import { TbWorld } from "react-icons/tb";

// // Define Prop Types
// // eslint-disable-next-line react/prop-types
// const ProjectCard = ({ title, main, demoLink, sourceCodeLink, imageSrc }) => {
//   return (
//     <div className="p-4 md:p-2 flex flex-col w-full sm:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl mx-auto">
//       {/* Image Section */}
//       {imageSrc && (
//         <img
//           className="p-2 w-full h-auto rounded-lg object-cover"
//           src={imageSrc}
//           alt={title}
//         />
//       )}
      
//       {/* Title */}
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-center">
//         {title}
//       </h3>
      
//       {/* Description */}
//       <p className="px-4 text-sm md:text-md leading-tight py-1 text-center">
//         {main}
//       </p>

//       {/* Buttons Section */}
//       <div className="mt-2 p-2 md:p-3 flex gap-4 md:gap-5 justify-center">
//         {demoLink && (
//           <a href={demoLink} target="_blank" rel="noopener noreferrer">
//             <button className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//               <TbWorld />
//               <span>Demo</span>
//             </button>
//           </a>
//         )}
//         {sourceCodeLink && (
//           <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
//             <button className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//               <TbSourceCode />
//               <span>Code</span>
//             </button>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import { TbSourceCode, TbWorld } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, main, demoLink, sourceCodeLink, imageSrc }) => {
  return (
    <div className="w-full sm:w-80 bg-gradient-to-br from-[#1e1e1e] to-[#2e2e2e] rounded-2xl shadow-2xl overflow-hidden hover:shadow-[#B7F34C]/30 transition duration-300 mx-auto transform hover:scale-[1.03]">

      {/* Image Section */}
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imageSrc}
            alt={title}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 text-white">
        <h3 className="text-lg md:text-xl font-bold text-center">{title}</h3>
        <p className="text-sm text-gray-300 text-center">{main}</p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#4B26CF] text-white rounded-full hover:bg-[#5d39d9] transition-all duration-300">
                <TbWorld className="text-lg" />
                Demo
              </button>
            </a>
          )}
          {sourceCodeLink && (
            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#B7F34C] text-black rounded-full hover:bg-[#cdfb66] transition-all duration-300">
                <TbSourceCode className="text-lg" />
                Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
