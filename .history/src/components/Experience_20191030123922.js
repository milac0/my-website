import React from "react";
import LazyLoad from "react-lazyload";
import analyticalImg from "../images/analytical.svg";
import patternImg from "../images/pattern.svg";
import adaptableImg from "../images/adaptable.svg";
import Skill from "./Skill";

const Experience = () => {
  return (
    <section>
      <h1 className="section-title">Experience</h1>
      <p className="section-body">
        I have a work experience as a self-employed online poker player. You may
        be asking what does it mean to you as a potential employer. Online poker
        made me develop skills that are translatable into programming
      </p>
      <div className="section-skills">
        <Skill
          title="Analytical and Systematic Approach"
          body="There is not a lot difference between finding out where the error
            happened and narrowing down opponents card range."
          src={analyticalImg}
          alt="analytical"
        />
        <Skill
          title="Great Pattern Recognition"
          body="Everyone has a thinking pattern and it's very expressed in poker. It
            made me understand Redux and prop drilling quite easily."
          src={patternImg}
          alt="pattern"
        />
        <Skill
          title="Adaptable"
          body="Poker has been evolving as fast as programming languages before
            getting very close to a solved game with poker solvers. I see
            adaptability as a key in both areas."
          src={adaptableImg}
          alt="adaptable"
        />
      </div>
    </section>
  );
};

export default Experience;
