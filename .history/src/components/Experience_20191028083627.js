import React from "react";
import LazyLoad from "react-lazyload";
import analyticalImg from "../images/analytical.svg";
import patternImg from "../images/pattern.svg";
import adaptiveImg from "../images/adaptive.svg";

const Experience = () => {
  return (
    <section>
      <h1 className="section-title">Experience</h1>
      <p className="section-body">
        I have a work experience of a self-employed online poker player. You may
        be asking what does it mean to you as a potential employer. Online poker
        made me develop skills that are translatable into programming:
      </p>
      <div className="section-skills">
      <div className="section-skill">
      <div className="section-skill-image-container">
        <LazyLoad height={260}>
          <img
            className="section-skill-image"
            src={analyticalImg}
            alt="analytical"
          />
        </LazyLoad>
        </div>
        <h2>Analytical and Systematic Approach</h2>
        <p>
          There is not a lot difference between finding out where the error happened
          and narrowing down opponents card range.
        </p>
      </div>
      <div className="section-skill">
        <LazyLoad height={260}>
          <img className="section-skill-image" src={patternImg} alt="pattern" />
        </LazyLoad>
        <h2>Great Pattern Recognition</h2>
        <p>
          Everyone has a thinking pattern and it's very expressed in poker. It made
          me understand Redux and prop drilling quite easily.
        </p>
      </div>
      <div className="section-skill">
        <LazyLoad height={260}>
          <img className="section-skill-image" src={adaptiveImg} alt="" />
        </LazyLoad>
        <h2>Adaptable</h2>
        <p>
          Poker has been evolving as fast as programming languages before
          getting very close to a solved game with poker solvers. I see adaptability
          as a key in both areas.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Experience;
