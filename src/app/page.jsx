"use client"
// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Header } from '../../Components/header/Header';
import Hero from '../../Components/Hero';
import { HeroSection } from '../../Components/hero/Hero';
import { AboutSection } from '../../Components/about/About';
import { ProjectsSection } from '../../Components/Projects/Projects';
import { Footer } from '../../Components/footer/Footer';
import { ServicesSection } from '../../Components/Services/Services';
import { SocialMediaSection } from '../../Components/platforms/Platforms';
import Reviews from '../../Components/reviews/Reviews';
import { ContactSection } from '../../Components/contact/ContactSection';

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
    <Header/>
    <HeroSection/>
    <ServicesSection/>
    <AboutSection/>
    <ProjectsSection/>
    <SocialMediaSection/>
    <Reviews/>
    <ContactSection/>
    <Footer/>
    </main>
  );
};

export default page;