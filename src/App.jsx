import About from "./components/About";
import Contact from "./components/Contact";
import ContactButton from "./components/ContactButton";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-white/20 selection:text-cyan-50zz">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,31,138,0.41),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content */}
      <div className="container felx flex-col ">
        <Navbar />
        <Home />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        <Contact />
        <ContactButton />
      </div>
    </div>
  );
};

export default App;
