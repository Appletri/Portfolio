import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { useState } from 'react';

function Work({title, image, gif, github, project, des}) {
  const [showGif, setShowGif] = useState(false);

  function MouseOver(event) {
    if (gif) {
      setShowGif(true);
    }
  };

  function MouseOut(event) {
    setShowGif(false);
  };

  return (
    <div className="work" onMouseOver={MouseOver} onMouseOut={MouseOut}>
      <div className='img-container'>
        {showGif ? <img className='project-gif' src={gif} alt=''></img> : <img className='project-image' src={image} alt=''></img>}
      </div>
      <div className="about-work">
        <div className="header">
          <h2>{title}</h2>
          <div className="links">
            {github ? 
            <a href={github} target='_blank'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a> : null}
            <a href={project} target='_blank'>
              {project ? <Icon path={mdiOpenInNew} size={1} color='black'/>:
              <Icon path={mdiOpenInNew} size={1} color='lightgrey'/>}
            </a>
          </div>
        </div>
        <p>{des}</p>
      </div>
    </div>
  )
}

export default Work;