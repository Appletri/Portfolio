import Work from "./Work"
import shopGif from "../assets/gifs/shopping-cart.gif"
import inventoryGif from "../assets/gifs/inventory-app.gif"
import cvGif from "../assets/gifs/cv-application.gif"
import UXPic from "../assets/UX.png"

function Portfolio() {
  const portfolio = [
    {
      title: 'SWUVSA E-Commerse Website',
      image: 'https://raw.githubusercontent.com/Appletri/shopping-cart/main/src/assets/SWUVSA_Logo.png',
      gif: shopGif,
      github: 'https://github.com/Appletri/shopping-cart',
      project: 'https://appletri.github.io/shopping-cart/',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
    },
    {
      title: 'Inventory App',
      image: 'https://raw.githubusercontent.com/Appletri/inventory-app/main/client/src/assets/ancient_ring.jpg',
      gif: inventoryGif,
      github: 'https://github.com/Appletri/inventory-app',
      project: null,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
    },
    {
      title: 'Resume Builder',
      image: 'https://raw.githubusercontent.com/Appletri/Appletri/main/assets/cv-resume-example.JPG',
      gif: cvGif,
      github: 'https://github.com/Appletri/cv-application',
      project: 'https://appletri.github.io/cv-application/',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
    },
    {
      title: 'UX Designer Portfolio',
      image: UXPic,
      gif: null,
      github: null,
      project: 'https://appletri.github.io/cindys-website/',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
    },
    {
      title: 'UX Designer Portfolio',
      image: UXPic,
      gif: null,
      github: null,
      project: 'https://appletri.github.io/cindys-website/',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
    },
    {
      title: 'UX Designer Portfolio',
      image: UXPic,
      gif: null,
      github: null,
      project: 'https://appletri.github.io/cindys-website/',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
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