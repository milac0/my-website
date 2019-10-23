import React from "react";
import { Link } from 'react-router-dom'
import resumeIcon from '../images/resume.png'
import linkedinIcon from '../images/linkedin.png'
import githubIcon from '../images/github.png'
import zivotopisPdf from '../zivotopis.pdf'

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <li>
                    <ul><Link to="" download target="_self"><img  className="nav-item" src={resumeIcon} alt="resume" /></Link></ul>
                    <ul><Link to=""><img  className="nav-item" src={linkedinIcon} alt="linkedin" /></Link></ul>
                    <ul><Link to=""><img  className="nav-item" src={githubIcon} alt="github" /></Link></ul>
                </li>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
