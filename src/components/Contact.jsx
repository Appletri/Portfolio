import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';

function Contact() {
  return(
    <section className="contact" id='contact'>
      <h1>Contact Me</h1>
      <p>Please shoot me an email or message me through linkedin if you want to connect!</p>
      <div className='email'>
        <Icon path={mdiEmailOutline} size={1} color='white'/>
        <p>tri_duc_lam@hotmail.com</p>
      </div>
      <div className="links">
        <a href="https://github.com/Appletri" target='_blank'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>
        <a href="https://www.linkedin.com/in/triduclam" target='_blank'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
        </a>
      </div>
    </section>
  )
}
export default Contact