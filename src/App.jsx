import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SampleOfOurWork from "./components/sampleOfOurWork";
import Services from "./components/Services";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SampleOfOurWork />
      <Services />
      <Projects />
      <Clients />
      <Contact />
    </>
  );
}

export default App;
