import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Education';
import Banner from './components/Banner/Brevia';
import Cards from './components/Cards/ProjectCards';
import Banner2 from './components/Banner/Surya engennering';
import Email from './components/Email/contact';
import email from './components/Cards/ProjectCards'
const App = () => {
  return (
    <div className="bg-[#1c2634] backdrop-blur-sm
 text-white min-h-screen">

      <Navbar />

      <section id="about">
        <Hero />
      </section>

      <section id="education">
        <Services />
      </section>

      <section id="projects">
        <Cards />
      </section>

      <section id="experience">
        <Banner />
      </section>

      <section id="internship">
        <Banner2 />
      </section>

      <section id="contact">
        <Email />
      </section>
    </div>
  );
};

export default App;
