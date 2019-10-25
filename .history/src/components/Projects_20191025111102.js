import React from "react";
import LazyLoad from "react-lazyload";

import quoteImg from "../images/quote.PNG";
import markdownImg from "../images/markdown.PNG";
import pomodoroImg from "../images/pomodoro.PNG";
import drumImg from "../images/drum.PNG";
import thissiteImg from '../images/thissite.PNG'

const Projects = () => {
  return (
    <section>
      <h1 className="section-title">Projects</h1>
      <p className="section-body">
        Only my own work just like this website. I have recently updated
        front end libraries projects from freecodecamp that I did on my own just
        as a little demonstration.
      </p>
      <div className="projects">
      <article>
        <h2>Random Quote Machine</h2>
        <a
          href="https://quotemachine-milac.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
            <img className="project-image" src={quoteImg} alt="quote-machine" />
          </LazyLoad>
        </a>
        <p>hooks, Axios, Material-UI, Lodash</p>
      </article>
      <article>
        <h2>Markdown Previewer</h2>
        <a
          href="https://markdown-milac.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
            <img
              className="project-image"
              src={markdownImg}
              alt="markdown-previewer"
            />
          </LazyLoad>
        </a>
        <p>dangerouslySetInnerHTML, markdown parser</p>
      </article>
      <article>
        <h2>Drum Machine</h2>
        <a
          href="https://drummachine-milac.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
            <img className="project-image" src={drumImg} alt="drum-machine" />
          </LazyLoad>
        </a>
        <p>Hooks, Axios, Material-UI</p>
      </article>
      <article>
        <h2>Pomodoro Clock</h2>
        <a
          href="https://pomodoro-clo.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
            <img
              className="project-image"
              src={pomodoroImg}
              alt="pomodoro clock"
            />
          </LazyLoad>
        </a>
        <p>Material-UI, Bootstrap</p>
      </article>
      <article>
        <h2>This website</h2>
        <a
          href="https://mile-balenovic.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
            <img
              className="project-image"
              src={thissiteImg}
              alt="this website"
            />
          </LazyLoad>
        </a>
        <p>Formik, LazyLoad, EmailJS, Hooks, Material-UI, CSS Modules</p>
      </article>
      </div>
    </section>
  );
};

export default Projects;
