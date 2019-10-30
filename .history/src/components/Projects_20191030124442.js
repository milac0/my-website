import React from "react";
import LazyLoad from "react-lazyload";
import Project from './Project'
import quoteImg from "../images/quote.PNG";
import markdownImg from "../images/markdown.PNG";
import pomodoroImg from "../images/pomodoro.PNG";
import drumImg from "../images/drum.PNG";
import thissiteImg from "../images/thissite.PNG";

const Projects = () => {
  return (
    <section>
      <h1 className="section-title">Projects</h1>
      <p className="section-body">
        Only my own work. On the web can be found many projects but I really
        hope you'd like the projects I've created by myself just like this
        website.
      </p>
      <div className="projects">

        <Project title="Random Quote"
        href="https://quotemachine-milac.netlify.com/"
        src={quoteImg}
                  alt="quote-machine"
                  body="Hooks, Axios, Material-UI, Lodash, Skeleton" />
      
        <Project 
        title="Markdown Previewer"
        href="https://markdown-milac.netlify.com/"
        src={markdownImg}
                  alt="markdown-previewer"
                  body="dangerouslySetInnerHTML, markdown parser"
        />
        <article>
          <h2>Drum Machine</h2>
          <a
            href="https://drummachine-milac.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="responsive-container">
              <LazyLoad>
                <img
                  className="project-image"
                  src={drumImg}
                  alt="drum-machine"
                />
              </LazyLoad>
            </div>
          </a>
          <p>createRef</p>
        </article>
        <article>
          <h2>Pomodoro Clock</h2>
          <a
            href="https://pomodoro-clo.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="responsive-container">
              <LazyLoad>
                <img
                  className="project-image"
                  src={pomodoroImg}
                  alt="pomodoro clock"
                />
              </LazyLoad>
            </div>
          </a>
          <p>FortAwesome, Moment, Lodash</p>
        </article>
        <article>
          <h2>This website</h2>
          <a
            href="https://mile-balenovic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="responsive-container">
              <LazyLoad>
                <img
                  className="project-image"
                  src={thissiteImg}
                  alt="this website"
                />
              </LazyLoad>
            </div>
          </a>
          <p>Formik, LazyLoad, EmailJS, CSS Modules</p>
        </article>
      </div>
    </section>
  );
};

export default Projects;