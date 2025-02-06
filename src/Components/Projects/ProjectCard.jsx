import { TbSourceCode } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";

// Define Prop Types
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, main, demoLink, sourceCodeLink, imageSrc }) => {
  return (
    <div className="p-4 md:p-2 flex flex-col w-full sm:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl mx-auto">
      {/* Image Section */}
      {imageSrc && (
        <img
          className="p-2 w-full h-auto rounded-lg object-cover"
          src={imageSrc}
          alt={title}
        />
      )}
      
      {/* Title */}
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-center">
        {title}
      </h3>
      
      {/* Description */}
      <p className="px-4 text-sm md:text-md leading-tight py-1 text-center">
        {main}
      </p>

      {/* Buttons Section */}
      <div className="mt-2 p-2 md:p-3 flex gap-4 md:gap-5 justify-center">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <TbWorld />
              <span>Demo</span>
            </button>
          </a>
        )}
        {sourceCodeLink && (
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <TbSourceCode />
              <span>Code</span>
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
