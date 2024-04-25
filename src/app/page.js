"use client";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing isLoading={isLoading} />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
