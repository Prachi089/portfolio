import { useState, useEffect } from "react";

const TextChange = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ["Hi, I am Prachi Sharma", "I am Developer"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentString = texts[index];

      setCurrentText(currentString.substring(0, endValue));

      if (isForward) {
        if (endValue < currentString.length) {
          setEndValue((prev) => prev + 1);
        } else {
          setTimeout(() => setIsForward(false), 1000); // Pause before deleting
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition ease duration-300 whitespace-nowrap">
      {currentText}
    </div>
  );
};

export default TextChange;





























// import { useState, useEffect } from "react";

// const TextChange = () => {
//   const texts = ["Hi, I am Prachi Sharma", "I am Developer"];
//   const [currentText, setCurrentText] = useState("");
//   const [endValue, setEndValue] = useState(0);
//   const [isForward, setIsForward] = useState(true);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentString = texts[index];

//       // Update the `currentText` based on `endValue`
//       setCurrentText(currentString.substring(0, endValue));

//       if (isForward) {
//         if (endValue < currentString.length) {
//           setEndValue((prev) => prev + 1);
//         } else {
//           setIsForward(false); // Reverse direction once the text is fully typed
//         }
//       } else {
//         if (endValue > 0) {
//           setEndValue((prev) => prev - 1);
//         } else {
//           setIsForward(true); // Switch back to forward direction
//           setIndex((prev) => (prev + 1) % texts.length); // Move to the next string
//         }
//       }
//     }, 100);

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, [endValue, isForward, index, texts]);

//   return <div className="transition ease duration-300">{currentText}</div>;
// };

// export default TextChange;
