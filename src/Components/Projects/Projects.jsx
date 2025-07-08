import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full py-20 px-4 md:px-20 bg-gradient-to-tr from-[#4B26CF] to-[#B7F34C] text-white overflow-x-hidden"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight drop-shadow-lg">
      <span className="text-white">Featured</span>{" "}
      <span className="text-[#B7F34C]">Projects</span>
    </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          title="Aabhar"
          main="Crowdfunding platforms help raise funds by collecting donations from a wide audience, with an easy-to-use platform boosting campaign success."
          demoLink="https://aabhar.netlify.app/"
          sourceCodeLink="https://github.com/shiv2240/Code-Hackers"
          imageSrc="https://akportfolio29.netlify.app/assets/crowdFunding-mFIhUogJ.png"
        />
        <ProjectCard
          title="Movie Layout"
          main="Simple movie layout implementation using HTML, CSS, and JavaScript. This layout displays posters, titles, and ratings in a flexible format."
          demoLink="https://frolicking-alpaca-57b4d0.netlify.app/"
          sourceCodeLink="https://github.com/Prachi089/movielayout"
          imageSrc="https://img.freepik.com/free-vector/cinema-movie-template_1284-47781.jpg"
        />
        <ProjectCard
          title="Snake Game"
          main="Created an interactive Snake Game using HTML, CSS, and JavaScript with features like real-time movement, collision detection, and scoring."
          demoLink="https://magenta-cobbler-9c45f3.netlify.app/"
          sourceCodeLink="https://github.com/Prachi089/snackeGame"
          imageSrc="https://wallpapers.com/images/hd/snake-game-1200-x-630-background-dwms1mebfsdf9jfp.jpg"
        />
        <ProjectCard
          title="Clinic Web"
          main="Clinic Website Layout built using Bootstrap for a responsive layout with sections for clinic information, services, and contact."
          demoLink="https://dulcet-bonbon-740c5c.netlify.app/#about"
          sourceCodeLink="https://github.com/Prachi089/Frontend_clinic"
          imageSrc="https://www.karexpert.com/wp-content/uploads/2022/01/3.png"
        />
        <ProjectCard
          title="Draw App"
          main="A draw app lets users create, edit, and share digital artwork with tools like brushes and colors."
          demoLink="https://stately-daifuku-383b58.netlify.app/"
          sourceCodeLink="https://github.com/Prachi089/drawingApp"
          imageSrc="https://cdn.mos.cms.futurecdn.net/rTZdjUymr3sxPTjixshUHS-1200-80.jpg.webp"
        />
        <ProjectCard
          title="Pen Paper Seccior"
          main="A Rock-Paper-Scissors game built using HTML, CSS, and JavaScript where the user plays against the computer."
          demoLink="https://sparkling-pixie-4cc1d2.netlify.app/"
          sourceCodeLink="https://github.com/Prachi089/penpaperseccior"
          imageSrc="https://media.geeksforgeeks.org/wp-content/uploads/20230802174130/Rock-Paper-Scissor.webp"
        />
      </div>
    </div>
  );
};

export default Projects;





// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white ">
//       <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Featured Projects</h1>
//       <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
//         <ProjectCard
//           title="Aabhar"
//           main="Crowdfunding platforms help raise funds by collecting donations from a wide audience, with an easy-to-use platform boosting campaign success."
//           demoLink="https://aabhar.netlify.app/"
//           sourceCodeLink="https://github.com/shiv2240/Code-Hackers"
//           imageSrc="https://akportfolio29.netlify.app/assets/crowdFunding-mFIhUogJ.png"
//         />
//         <ProjectCard
//           title="Movie Layout"
//           main="simple movie layout implementation using HTML, CSS, and JavaScript.This layout displays posters, titles, and ratings in flex format. "
//           demoLink="https://frolicking-alpaca-57b4d0.netlify.app/"
//           sourceCodeLink="https://github.com/Prachi089/movielayout"
//           imageSrc="https://img.freepik.com/free-vector/cinema-movie-template_1284-47781.jpg"
//         />
//         <ProjectCard
//           title="Snake Game"
//           main="Created an interactive Snake Game using HTML, CSS, and JavaScript with features like real-time movement, collision detection, and scoring."
//           demoLink="https://magenta-cobbler-9c45f3.netlify.app/"
//           sourceCodeLink="https://github.com/Prachi089/snackeGame"
//           imageSrc="https://wallpapers.com/images/hd/snake-game-1200-x-630-background-dwms1mebfsdf9jfp.jpg"
//         />
//         <ProjectCard
//           title="Clinic Web"
//           main="Clinic Website Layout Buil using Bootstrap for a responsive layout with sections for clinic information, services, contact"
//           demoLink="https://dulcet-bonbon-740c5c.netlify.app/#about"
//           sourceCodeLink="https://github.com/Prachi089/Frontend_clinic"
//           imageSrc="https://www.karexpert.com/wp-content/uploads/2022/01/3.png"

        
//         />
//          <ProjectCard
//           title="Draw App"
//           main="A draw app lets users create, edit, and share digital artwork with tools like brushes and colors.."
//           demoLink="https://stately-daifuku-383b58.netlify.app/"
//           sourceCodeLink="https://github.com/Prachi089/drawingApp"
//           imageSrc="https://cdn.mos.cms.futurecdn.net/rTZdjUymr3sxPTjixshUHS-1200-80.jpg.webp"
//         />
//          <ProjectCard
//           title="Pen Paper Seccior"
//           main="Here’s a Rock-Paper-Scissors game built using HTML, CSS, and JavaScript, where the user plays against the computer. It's simple, interactive, and easy to understand."
//           demoLink="https://sparkling-pixie-4cc1d2.netlify.app/"
//           sourceCodeLink="https://github.com/Prachi089/penpaperseccior"
//           imageSrc="https://media.geeksforgeeks.org/wp-content/uploads/20230802174130/Rock-Paper-Scissor.webp"
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;
