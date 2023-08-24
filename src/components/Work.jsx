import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

function Work({title, image, github, project, des}) {
  return (
    <div className="work">
      <img className='project-image' src={image} alt=''></img>
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