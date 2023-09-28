import pic from '../assets/profile.jpg'
import bg from '../assets/clement-helardot-95YRwf6CNw8-unsplash.jpg'
function AboutMe() {
  return (
    <section className="about-me" id='about-me' >
      <div className='about-me-bg'>
        <div className='bg-filter'></div>
        <img src={bg} alt="photo of JavaScript in progress by Clement Helardot from Unsplash.com"></img>
      </div>
      <div className='profile-container'>
        <div className="profile">
          <img src={pic} alt="Profile picture of Tri Lam"></img>
        </div>
        <div className="about-section">
          <h1>T R I | L A M</h1>
          <p>Full-Stack Dev | Digital Artist | Designer | Tech Enthusiest</p>
          <div className="links">
            <a href="https://github.com/Appletri" target='_blank'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
            <a href="https://www.linkedin.com/in/triduclam" target='_blank'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutMe;