import pic from '../assets/profile.jpg'
function AboutMe() {
  return (
    <div className="about-me">
      <div className="profile">
        <img src={pic} alt="Profile picture of Tri Lam"></img>
      </div>
      <div className="about-section">
        <h1>Hello! My name is Tri Lam</h1>
        <p>Full-Stack Web Developer</p>
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
  )
}

export default AboutMe;