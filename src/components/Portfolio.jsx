import Work from "./Work"
import shopGif from "../assets/gifs/shopping-cart.gif"
import inventoryGif from "../assets/gifs/inventory-app.gif"
import cvGif from "../assets/gifs/cv-application.gif"
import UXPic from "../assets/UX.png"
import chessPic from "../assets/chess.png"
import PortfolioPic from "../assets/portfolio.png"

function Portfolio() {
  const portfolio = [
    {
      title: 'SWUVSA Shop Website',
      image: 'https://raw.githubusercontent.com/Appletri/shopping-cart/main/src/assets/SWUVSA_Logo.png',
      gif: shopGif,
      github: 'https://github.com/Appletri/shopping-cart',
      project: 'https://appletri.github.io/shopping-cart/',
      des: 'The front-end application built with ReactJS for a non-profit organization merchandise.'
    },
    {
      title: 'Inventory App',
      image: 'https://raw.githubusercontent.com/Appletri/inventory-app/main/client/src/assets/ancient_ring.jpg',
      gif: inventoryGif,
      github: 'https://github.com/Appletri/inventory-app',
      project: null,
      des: 'This project is a full stack application utilizing ReactJS, MongoDB, and Express. The goal of this assignment is to create mini inventory CRUD app. I turned mine into a game where users can create their own unique items for everyone to see. '
    },
    {
      title: 'Resume Builder',
      image: 'https://raw.githubusercontent.com/Appletri/Appletri/main/assets/cv-resume-example.JPG',
      gif: cvGif,
      github: 'https://github.com/Appletri/cv-application',
      project: 'https://appletri.github.io/cv-application/',
      des: 'An application that helps the user build their resume. This is the first project for ReactJS. I learned how to make basic components, utilizing state and props. Later down the curriculum, I was tasked with swapping out the class components with hooks. '
    },
    {
      title: 'Personal Website',
      image: PortfolioPic,
      gif: null,
      github: 'https://github.com/Appletri/Portfolio',
      project: 'https://www.triduclam.com',
      des: 'My personal website'
    },
    {
      title: 'UX Designer Portfolio',
      image: UXPic,
      gif: null,
      github: null,
      project: 'https://appletri.github.io/cindys-website/',
      des: 'This is a UX designer portfolio built with ReactJS.'
    },
    {
      title: 'American Dog Society',
      image: 'https://raw.githubusercontent.com/Appletri/Appletri/main/assets/AmericanDogSocietyWebsitePhoto.png',
      gif: null,
      github: null,
      project: 'https://americandogsociety.com/',
      des: 'Working in the development of a comprehensive educational platform targeting dog owners, covering topics such as training, health care, and responsible ownership. Implemented interactive features to engage users and ensure an enjoyable learning experience. Managing ongoing updates and maintenance tasks for the current website.'
    },
    {
      title: 'PhotoTag',
      image: 'https://raw.githubusercontent.com/Appletri/Appletri/main/assets/photo-tag.JPG',
      gif: null,
      github: 'https://github.com/Appletri/photo-tag',
      project: 'https://appletri.github.io/photo-tag/',
      des: 'Photo Tag is an engaging full-stack project that seamlessly integrates a Firebase database with a dynamic React front end. In this interactive experience, users immerse themselves in a thrilling "Where is Waldo" challenge, searching for three designated targets within the picture.'
    },
    
  ]
  return(
    <section className="portfolio" id="portfolio">
      <h1> My Projects </h1>
      <div className="works">
        {portfolio.map((work, index) => {
          return(
            <Work key={index} title={work.title} image={work.image} gif={work.gif}github={work.github} project={work.project} des={work.des}/>
          )
        })}
        
      </div>
      <h2 className="demoreel-header">2022 Demo Reel</h2>
      <iframe className='demoreel' width="560" height="315" src="https://www.youtube.com/embed/KsRK876ajjY?si=Q7WYkIwLxjCJWCbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </section>
  )
}

export default Portfolio