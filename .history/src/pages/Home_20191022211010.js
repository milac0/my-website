import React, { Fragment } from "react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <main>
        <div class="container">

      <AboutMe />
      <Education />
      </div>
    </main>
    </Fragment>
  );
};

export default Home;
