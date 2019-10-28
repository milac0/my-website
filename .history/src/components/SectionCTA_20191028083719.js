import React from "react";
import { Link } from "react-router-dom";

const SectionCTA = () => {
  return (
    <section id="section-cta">
      <h1 className="section-title">Like what you've read?</h1>
      <p className="section-body">
        I have plenty more to learn, and, as a part of your team, I believe I can
        accelerate my learning and start contributing to your company in a fruitful way.
      </p>
      <Link to="/contact">
        <button className="button-cta">Contact Me!</button>
      </Link>
    </section>
  );
};

export default SectionCTA;
