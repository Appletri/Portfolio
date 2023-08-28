import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { useState } from 'react';

function Work({title, image, gif, github, project, des}) {
  const [showGif, setShowGif] = useState(false);

  function MouseOver(event) {
    setShowGif(true);
  };

  function MouseOut(event) {
    setShowGif(false);
  };

  return (
    <div className="work">
      <div className='img-container' onMouseOver={MouseOver} onMouseOut={MouseOut}>
        {showGif ? <img className='project-gif' src={gif} alt=''></img> : <img className='project-image' src={image} alt=''></img>}
      </div>
      <div className="about-work">
        <div className="header">
          <h2>{title}</h2>
          <div className="links">
            <a href={github} target='_blank'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
            <a href={project} target='_blank'>
              <Icon path={mdiOpenInNew} size={1} color='black'/>
            </a>
          </div>
        </div>
        <p>{des}</p>
      </div>
    </div>
  )
}

export default Work;