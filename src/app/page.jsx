"use client";

import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import Skills from "../../Components/Skills";
import Services from "../../Components/Services/Services";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/footer/Footer";
import NavBar from "../../Components/utils/NavBar";
import SlickCard from "../../Components/utils/SlickCard";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) return null;

  return (
    <main className="">
    <div
      className="  overflow-hidden
      flex flex-col justify-center items-center flex-wrap gap-4
    dark:text-gray-100 dark:bg-slate-800 duration-100"
    >
      <NavBar />
      <Hero />

      <Skills />
      <Services />
      
      <Projects />
      <div id="contact">
        <Footer />
      </div>
    </div>
    </main>
  );
};

export default Home;
