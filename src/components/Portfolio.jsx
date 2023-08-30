import Work from "./Work"
import shopGif from "../assets/gifs/shopping-cart.gif"
import inventoryGif from "../assets/gifs/inventory-app.gif"
import cvGif from "../assets/gifs/cv-application.gif"
import UXPic from "../assets/UX.png"
import chessPic from "../assets/chess.png"

function Portfolio() {
  const portfolio = [
    {
      title: 'SWUVSA E-Commerse Website',
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
      title: 'UX Designer Portfolio',
      image: UXPic,
      gif: null,
      github: null,
      project: 'https://appletri.github.io/cindys-website/',
      des: 'This is a UX designer portfolio built with ReactJS.'
    },
    {
      title: 'Knight Travils',
      image: chessPic,
      gif: null,
      github: 'https://github.com/Appletri/knight-travails',
      project: 'https://appletri.github.io/knight-travails/',
      des: 'Knight Travils is a project that explores the graph data structure. The app will find a path containing the shortest amount of moves for a knight to move from point A to point B in chess.'
    },
  ]
  return(
    <div className="portfolio">
      <h1> My Projects </h1>
      <div className="works">
        {portfolio.map((work, index) => {
          return(
            <Work key={index} title={work.title} image={work.image} gif={work.gif}github={work.github} project={work.project} des={work.des}/>
          )
        })}
        
      </div>
    </div>
  )
}

export default Portfolio