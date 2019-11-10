import React from 'react';
import LazyLoad from 'react-lazyload'

const Project = ({ title, body, src, alt, href, featured, new }) => {
    return (
        <article className={featured}>
          <h2>{title}</h2>
          {{new} || nul}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="responsive-container">
              <LazyLoad>
                <img
                  className="project-image"
                  src={src}
                  alt={alt}
                />
              </LazyLoad>
            </div>
          </a>
          <p>{body}</p>
        </article>
    );
};

export default Project;