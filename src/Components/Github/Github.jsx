import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Github = ({ apiUrl }) => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const entry = Array.isArray(data) ? data[0] : data;
        setQuote({
          content: entry.q || entry.quote,
          author: entry.a || entry.author,
        });
      })
      .catch((err) => {
        console.error("Error fetching quote:", err);
        setQuote(null);
      });
  }, [apiUrl]);

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-20 py-12 md:py-24 bg-[#4B26CF] text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
        Days I <span className="text-[#B7F34C]">Code</span>
      </h1>

      <div className="flex justify-center w-full overflow-x-auto max-w-full mb-10">
        <div className="min-w-fit">
          <GitHubCalendar
            username="Prachi089"
            blockSize={13}
            blockMargin={5}
            color="#B7F34C"
            fontSize={14}
            showWeekdayLabels
          />
        </div>
      </div>

      {/* Optional Quote Block */}
      {/* 
      <div className="mt-4 max-w-xl text-center">
        <h2 className="text-xl font-semibold mb-4">✍️ Quote of the Day</h2>
        {quote ? (
          <blockquote className="bg-[#3a239b] p-6 rounded-xl shadow-lg italic transition-opacity duration-500">
            “{quote.content}”
            <footer className="mt-4 text-sm text-gray-300">— {quote.author}</footer>
          </blockquote>
        ) : (
          <p className="text-sm text-gray-300 italic">Loading quote...</p>
        )}
      </div>
      */}
    </div>
  );
};

export default Github;




// import { useEffect, useState } from "react";
// import GitHubCalendar from "react-github-calendar";

// const Github = ({ apiUrl }) => {
//   const [quote, setQuote] = useState(null);

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         const entry = Array.isArray(data) ? data[0] : data;
//         setQuote({
//           content: entry.q || entry.quote,
//           author: entry.a || entry.author,
//         });
//       })
//       .catch((err) => {
//         console.error("Error fetching quote:", err);
//         setQuote(null);
//       });
//   }, [apiUrl]);

//   return (
//     <div className="flex flex-col items-center p-6 md:p-24 bg-black text-white">
//       <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 text-center">
//         Days I <span className="text-green-500">Code</span>
//       </h1>

//       <div className="font-bold flex justify-center mb-10">
//         <GitHubCalendar
//           username="Prachi089"
//           blockSize={13}
//           blockMargin={5}
//           color="#8E44AD"
//           fontSize={14}
//           showWeekdayLabels
//         />
//       </div>

//       {/* Quote Block */}
//       {/* <div className="mt-4 max-w-xl text-center">
//         <h2 className="text-xl font-semibold mb-4">✍️ Quote of the Day</h2>
//         {quote ? (
//           <blockquote className="bg-gray-800 p-6 rounded-xl shadow-lg italic transition-opacity duration-500">
//             “{quote.content}”
//             <footer className="mt-4 text-sm text-gray-400">— {quote.author}</footer>
//           </blockquote>
//         ) : (
//           <p className="text-sm text-gray-400 italic">Loading quote...</p>
//         )}
//       </div> */}
//     </div>
//   );
// };

// export default Github;
