import college1Logo from "../../assets/masai1.png";
import college2Logo from "../../assets/vtulogo.jpg";
import college3Logo from "../../assets/SVRlogo.jpg";

const Education = () => {
  return (
    <div
      id="Education"
      className="text-white bg-black bg-opacity-30 rounded-lg shadow-xl mx-0 md:mx-20 p-12 mt-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Education</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* College 1 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <img
              src={college1Logo}
              alt="College 1"
              className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <h3 className="text-xl font-semibold text-center">Masai School Bangaluru</h3>
            <p className="text-center text-gray-300">FullStack Web Development (fulltime)</p>
          {/* <p className="text-center text-gray-300">B.Tech in Computer Science</p> */}
          <p className="text-center text-gray-200">2024 - 2025 | Grade : 'A'</p>
        </div>

        {/* College 2 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <img
              src={college2Logo}
              alt="College 2"
              className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <h3 className="text-xl font-semibold text-center">Visvesvaraya Technological University</h3>
          <p className="text-center text-gray-300">B.Tech in Computer Science</p>
          {/* <p className="text-center text-gray-300">Higher Secondary (PCM)</p> */}
          <p className="text-center text-gray-200">2017 - 2021 | 75%</p>
        </div>

        {/* School */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <img
              src={college3Logo}
              alt="School"
              className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <h3 className="text-xl font-semibold text-center">SVR PU & Degree College</h3>
          <p className="text-center text-gray-300">Higher Secondary Schhol - PCMC</p>
          <p className="text-center text-gray-200">2016 - 2017 | 69%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
