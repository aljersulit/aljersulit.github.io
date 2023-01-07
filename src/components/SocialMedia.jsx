import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://github.com/aljersulit" target="_blank" rel="noreferrer">
          <div>
              <FaGithub />
          </div>
        </a>
        <a href="https://www.facebook.com/aldrinjerome.sulit/" target="_blank" rel="noreferrer">
          <div>
              <FaFacebookF />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/aljersulit12/" target="_blank" rel="noreferrer">
          <div>
              <BsLinkedin />
          </div>
        </a>
    </div>
  )
}

export default SocialMedia