import avatarImg from "../../assets/prachinew.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-16 pt-664">
      {/* Text Section */}
      <div className="flex flex-col items-start justify-start md:justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0">
        {/* Prachi Sharma with fixed height to prevent shifting */}
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter mb-4" style={{ minHeight: "4rem" }}>
          <TextChange />
        </h1>

        {/* Statement remains unaffected */}
        <p className="text-sm md:text-2xl tracking-tight mb-4">
          MERN Developer crafting beautiful & responsive web experiences
        </p>

        <a href="#Footer">
          <button className="mt-3 md:mt-6 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end">
        <img
          style={{ maxWidth: "13rem", maxHeight:"79rem", borderRadius: "60px" }}
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
