import React from "react";
import resumeIcon from '../images/resume.png'
import linkedinIcon from '../images/linkedin.png'
import githubIcon from '../images/github.png'
import resumePdf from '../resume.pdf'

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <li>
                    <ul><a href={resumePdf} download target="_self"><img  className="nav-item" src={resumeIcon} alt="resume" /></a></ul>
                    <ul><a href="https://www.linkedin.com/in/mile-balenovi%C4%87-a4ab9188/"><img  className="nav-item" src={linkedinIcon} alt="linkedin" /></a></ul>
                    <ul><a href="https://github.com/milac0"><img  className="nav-item" src={githubIcon} alt="github" /></a></ul>
                </li>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
