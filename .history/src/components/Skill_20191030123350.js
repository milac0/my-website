import React from 'react';
import LazyLoad from 'react-lazyload'

const Skill = ({title, body, imageSrc}) => {
    console.log(imageSrc)
    return (
        <div className="section-skill">
          <div className="section-skill-image-container">
            <div className="responsive-container">
              <LazyLoad>
                <img
                  className="section-skill-image"
                  src={imageSrc}
                  alt={`${imageSrc}`}
                />
              </LazyLoad>
            </div>
          </div>
          <h2>{title}</h2>
          <p>
            {body}
          </p>
        </div>
    );
};

export default Skill;