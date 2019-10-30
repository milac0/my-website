import React from "react";
import LazyLoad from "react-lazyload";
import Project from "./Project";
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
        <Project
          title="Random Quote"
          href="https://quotemachine-milac.netlify.com/"
          src={quoteImg}
          alt="quote-machine"
          body="Hooks, Axios, Material-UI, Lodash, Skeleton"
        />
        <Project
          title="Markdown Previewer"
          href="https://markdown-milac.netlify.com/"
          src={markdownImg}
          alt="markdown-previewer"
          body="dangerouslySetInnerHTML, markdown parser"
        />
        <Project
          title="Drum Machine"
          href="https://drummachine-milac.netlify.com/"
          src={drumImg}
          alt="drum-machine"
          body="createRef"
        />
        <Project
          title="Pomodoro Clock"
          href="https://pomodoro-clo.netlify.com/"
          src={pomodoroImg}
          alt="pomodoro clock"
          body="FortAwesome, Moment, Lodash"
        />
        <Project
          href="https://mile-balenovic.com/"
          title="This website"
          src={thissiteImg}
          alt="this website"
          body="Formik, LazyLoad, EmailJS, CSS Modules"
        />
      </div>
    </section>
  );
};

export default Projects;
