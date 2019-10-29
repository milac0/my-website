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
        Only my own work. On the web can be found many projects but I really hope
        you'd like the projects I've created by myself just like this website.
      </p>
      <div className="projects">
      <article>
        <h2>Random Quote</h2>
        <a
          href="https://quotemachine-milac.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
          <div className="responsive-container">
            <img className="project-image" src={quoteImg} alt="quote-machine" />
            </div>
          </LazyLoad>
        </a>
        <p>Hooks, Axios, Material-UI, Lodash, Skeleton</p>
      </article>
      <article>
        <h2>Markdown Previewer</h2>
        <a
          href="https://markdown-milac.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoad>
          <div className="responsive-container">
            <img
              className="project-image"
              src={markdownImg}
              alt="markdown-previewer"
            />
            </div>
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
          <div className="responsive-container">
            <img className="project-image" src={drumImg} alt="drum-machine" />
            </div>
          </LazyLoad>
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
          <LazyLoad>
          <div className="responsive-container">
            <img
              className="project-image"
              src={pomodoroImg}
              alt="pomodoro clock"
            />
            </div>
          </LazyLoad>
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
          <LazyLoad>
          <div className="responsive-container">
            <img
              className="project-image"
              src={thissiteImg}
              alt="this website"
            />
            </div>
          </LazyLoad>
        </a>
        <p>Formik, LazyLoad, EmailJS, CSS Modules</p>
      </article>
      </div>
    </section>
  );
};

export default Projects;
