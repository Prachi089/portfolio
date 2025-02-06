import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-24">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-8 text-center">
        Days I <span className="text-green-500">Code</span>
      </h1>
      <div className="text-white font-bold flex justify-center">
        <GitHubCalendar
          username="Prachi089" // Replace with your GitHub username
          blockSize={13}
          blockMargin={5}
          color="#8E44AD"
          fontSize={14}
          showWeekdayLabels
        />
      </div>
    </div>
  );
};

export default Github;
