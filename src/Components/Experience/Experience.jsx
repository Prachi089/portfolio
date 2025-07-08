import company1Logo from "../../assets/nmdlogo.jpg";
import company2Logo from "../../assets/pailogo.jpg";
import company3Logo from "../../assets/radiant-logo.jpg";

const Experience = () => {
  const experiences = [
    {
      logo: company1Logo,
      company: "NMD Software & Network PVT LTD",
      role: "Software Engineer - Intern",
      duration: "Dec 2020 – Jan 2021",
      desc: "Worked on a web-based project for managing events under the domain 'Palack Muchaal Event Organisation' using PHP and related technologies.",
      bullets: [
        "Developed dynamic web pages using PHP, HTML, and CSS.",
        "Created and connected MySQL databases to store event and user data.",
        "Implemented event registration forms and admin dashboards.",
        "Collaborated with the team to test and deploy the website.",
      ],
    },
    {
      logo: company2Logo,
      company: "Pantech AI",
      role: "Front-End Developer - Intern",
      duration: "Dec 2022 – Feb 2023",
      desc: "Built and improved websites using React.js, JavaScript, and CSS. Collaborated with the team to create responsive UIs.",
      bullets: [
        "Created frontend web pages using React.js, JavaScript, and CSS.",
        "Built and reused components to make development faster.",
        "Connected frontend to backend APIs to display dynamic data.",
        "Fixed UI bugs and improved design.",
        "Used Git and GitHub for code management and collaboration.",
      ],
    },
    {
      logo: company3Logo,
      company: "Radiant Infotech",
      role: "Software Developer Engineer",
      duration: "April 2025 – July 2025",
      desc: "Backend Developer with experience in building scalable applications using Node.js and Express.js. Skilled in creating RESTful APIs.",
      bullets: [
        "Developed scalable backend applications and RESTful APIs using Node.js and Express.js.",
        "Integrated and managed NoSQL databases, including MongoDB, for efficient data modeling and querying.",
        "Utilized Git for version control and Postman for API testing and debugging in agile environments.",
      ],
    },
  ];

  return (
    <div
      id="Experience"
      className="w-full py-16 px-4 md:px-20 bg-[#4B26CF] text-white overflow-x-hidden"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">Education</h1>
      </div>

      <div className="relative border-l-4 border-[#B7F34C] ml-4 space-y-14">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10 group">
            {/* Timeline Icon */}
            <div className="absolute -left-9 top-1 w-16 h-16 rounded-full bg-white flex items-center justify-center ring-4 ring-[#B7F34C] shadow-md">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>

            {/* Card Content */}
            <div className="bg-[#1c1c1c] p-6 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-[1.02]">
              <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
              <p className="text-sm text-[#B7F34C]">{exp.role}</p>
              <p className="text-sm text-gray-400 italic">{exp.duration}</p>
              <p className="mt-3 text-gray-300">{exp.desc}</p>

              <ul className="mt-4 list-disc list-inside text-sm text-gray-200 space-y-1">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;


// import company1Logo from "../../assets/nmdlogo.jpg";
// import company2Logo from "../../assets/pailogo.jpg";
// import company3Logo from "../../assets/radiant-logo.jpg";

// const Experience = () => {
//     const experiences = [
//         {
//             logo: company1Logo,
//             company: "NMD Software & Network PVT LTD",
//             role: "Software Engineer - Intern",
//             duration: "Dec 2020 – Jan 2021",
//             desc: "Worked on a web-based project for managing events under the domain 'Palack Muchaal Event Organisation' using PHP and related technologies.",
//             bullets: [
//                 "Developed dynamic web pages using PHP, HTML, and CSS.",
//                 "Created and connected MySQL databases to store event and user data.",
//                 "Implemented event registration forms and admin dashboards.",
//                 "Collaborated with the team to test and deploy the website.",
//             ],
//         },
//         {
//             logo: company2Logo,
//             company: "Pantech AI",
//             role: "Front-End Developer - Intern",
//             duration: "Dec 2022 – Feb 2023",
//             desc: "Built and improved websites using React.js, JavaScript, and CSS. Collaborated with the team to create responsive UIs.",
//             bullets: [
//                 "Created frontend web pages using React.js, JavaScript, and CSS.",
//                 "Built and reused components to make development faster.",
//                 "Connected frontend to backend APIs to display dynamic data.",
//                 "Fixed UI bugs and improved design.",
//                 "Used Git and GitHub for code management and collaboration.",
//             ],
//         },
//         {
//             logo: company3Logo,
//             company: "Radiant Infotech",
//             role: "Software Developer Engineer",
//             duration: "April 2025 – July 2025",
//             desc: "Backend Developer with experience in building scalable applications using Node.js and Express.js. Skilled in creating RESTful APIs.",
//             bullets: [
//                 "Developed scalable backend applications and RESTful APIs using Node.js and Express.js.",
//                 "Integrated and managed NoSQL databases, including MongoDB, for efficient data modeling and querying.",
//                 "Utilized Git for version control and Postman for API testing and debugging in agile environments.",
//             ],
//         },
//     ];

//     return (
//         <div
//             id="Experience"
//             className="text-white bg-gradient-to-br from-gray-900 to-black p-10 md:px-20 rounded-xl shadow-lg"
//         >
//             <h2 className="text-3xl font-bold text-center mb-12 underline decoration-green-500 underline-offset-8">
//                 Experience
//             </h2>

//             <div className="relative border-l-4 border-green-600 ml-4">
//                 {experiences.map((exp, idx) => (
//                     <div key={idx} className="mb-12 ml-6 relative">
//                         {/* Circle Icon */}
//                         <div className="absolute -left-8 top-1 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
//                             <img
//                                 src={exp.logo}
//                                 alt={`${exp.company} logo`}
//                                 className="w-12 h-12 object-contain rounded-full"
//                             />
//                         </div>

//                         {/* Content */}
//                         <div className="bg-gray-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01]">
//                             <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
//                             <p className="text-sm text-gray-400">{exp.role}</p>
//                             <p className="text-sm text-gray-500 italic">{exp.duration}</p>
//                             <p className="mt-3 text-gray-300">{exp.desc}</p>

//                             <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-200">
//                                 {exp.bullets.map((point, i) => (
//                                     <li key={i}>{point}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Experience;
