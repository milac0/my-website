import React, { Fragment } from "react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import SectionCTA from '../components/SectionCTA'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <main>
        <div className="container">
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <SectionCTA />
      </div>
    </main>
    </Fragment>
  );
};

export default Home;
