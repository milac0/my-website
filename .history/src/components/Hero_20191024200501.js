import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import profileImg from "../images/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-profile">
          <LazyLoad height={128}>
          <img src={profileImg} className="hero-profile-image" alt="profile" />
          </LazyLoad>
          <h1 className="hero-profile-title">Mile Balenovic</h1>
          <p className="hero-profile-subtitle">
            Switching career to <strong>React</strong> development
          </p>
          <Link to="/contact">
            <button className="button-cta">Contact Me!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
