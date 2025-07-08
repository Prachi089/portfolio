/* eslint-disable react/jsx-no-undef */
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Github from './Components/Github/Github'
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills"

function App() {
  return (
    <div className="overflow-hidden bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Skills />
      <Experience/>
      <Github/>
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
