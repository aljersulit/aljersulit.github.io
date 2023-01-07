import React, { useState, useEffect } from "react";

import cv from '../../assets/Sulit,Aldrin_Jerome_CV.pdf';
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from '../../client'
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then(data => setAbouts(data))
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Projects</span><br/> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div
            className="app__profile-item"
            key={about.title + index}
          >
            
            <img src={urlFor(about.imgUrl)} alt="Me and my dog" />
            
            <div className="app__profile-description">
              <p className="p-text">
                {about.description}
              </p>
              <a href={cv} download>Download CV</a>
            </div>
            
          </div>
          
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"), 
  "about",
  "app__whitebg"
  );
