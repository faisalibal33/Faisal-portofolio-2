import React from 'react';
import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';

const Social = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/faisal-iqbal33/" target="_blank" rel="noopener noreferrer"> <BsLinkedin/></a>
        <a href="https://github.com/faisalibal33" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/faisalibal" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default Social