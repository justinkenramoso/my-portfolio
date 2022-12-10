// Hooks
import { useEffect } from "react";
// Sections
import Landing from "./components/sections/Landing";
import Projects from "./components/sections/Projects";
import Modals from "./components/sections/Modals";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <Landing />
      <Projects />
      <Skills />
      <About />
      <Modals />
    </div>
  );
}

export default App;
