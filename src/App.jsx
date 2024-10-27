import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SampleOfOurWork from "./components/SampleOfOurWork";
import Services from "./components/Services";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0">
        <Hero />
        <About />
        <SampleOfOurWork />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
