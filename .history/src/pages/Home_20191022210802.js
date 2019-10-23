import React, { Fragment } from "react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <AboutMe />
    </Fragment>
  );
};

export default Home;
