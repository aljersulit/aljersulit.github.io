import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from '../../constants'
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
            className="app__profile-item app__flex"
            key={about.title + index}
          >
            
            <img src={urlFor(about.imgUrl)} alt="My about photo" />
            
            <div className="app__profile-description">
              <p className="p-text">
                {about.description}
              </p>
              <a href="#" download>Download CV</a>
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
