import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:prachi.microsoft99@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      id="Contact"
      className="w-full py-16 px-4 md:px-20 bg-[#4B26CF] text-white"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Contact <span className="text-[#B7F34C]">Me</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto space-y-6 bg-[#2f1d77] p-8 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white font-semibold mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 bg-[#1e0f4b] text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7F34C]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white font-semibold mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 bg-[#1e0f4b] text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7F34C]"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white font-semibold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 bg-[#1e0f4b] text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7F34C]"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
        <button
  type="submit"
  className="bg-[#4B26CF] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#3a1ea5] transition duration-300 w-full sm:w-auto"
>
  Send Message
</button>

        </div>
      </form>
    </div>
  );
};

export default Contact;





// import { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Creating the mailto link with the form data
//     const mailtoLink = `mailto:prachi.microsoft99@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

//     // Redirecting to the mailto link
//     window.location.href = mailtoLink;

//     // Reset the form after submission
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div id="Contact" className="md:p-24 flex flex-col items-center">
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 text-center">
//         Contact Me
//       </h1>
//       <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 bg-black p-8 rounded-lg shadow-lg">
//         {/* Name Field */}
//         <div className="flex flex-col">
//           <label htmlFor="name" className="text-white mb-2">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="p-3 bg-zinc-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Email Field */}
//         <div className="flex flex-col">
//           <label htmlFor="email" className="text-white mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="p-3 bg-zinc-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Message Field */}
//         <div className="flex flex-col">
//           <label htmlFor="message" className="text-white mb-2">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows="6"
//             className="p-3 bg-zinc-950 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-[#465697] text-white py-3 px-6 rounded-lg hover:bg-[#3e4a7e] transition duration-300 w-full sm:w-auto"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
