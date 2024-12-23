import React from "react";
import BlurBackground from "./components/BlurBackground";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactButton from "./components/ContactButton";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Technologies from "./components/Technologies";
import GoToTop from "./components/GoToTop";
import LoadingPage from "./components/LoadingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  useGSAP(() => {
    let t1 = gsap.timeline();

    t1.to(".box", {
      scale: 1,
      y: 0,
      rotate: 360,
      duration: 0.8,
      stagger: {
        amount: 0.7,
        from: "start",
        grid: [3, 3],
      },
    });

    t1.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    });

    t1.to(".wrapper", {
      opacity: 0,
      display: "none",
    });
  });

  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-white/20 selection:text-cyan-50">
      <div className="fixed top-0 -z-50 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,31,138,0.41),rgba(255,255,255,0))]"></div>
      </div>
      <BlurBackground />

      {/* Main Content */}
      <div className="flex flex-col">
        <LoadingPage />
        <Navbar />
        <Home />
        <About />
        <Technologies />
        <Skills />
        <Works />
        <Contact />
        <ContactButton />
        <GoToTop />
      </div>
    </div>
  );
};

export default App;
