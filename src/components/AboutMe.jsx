import pic from '../assets/profile.jpg'
function AboutMe() {
  return (
    <div className="intro">
      <div className="profile">
        <img src={pic} alt="Profile picture of Tri Lam"></img>
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus sint totam, voluptates culpa numquam libero nesciunt, explicabo, iure doloribus eos natus? Beatae totam, fugit id labore aspernatur voluptates pariatur?</p>
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