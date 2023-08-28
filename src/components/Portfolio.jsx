import Work from "./Work"
import shopGif from "../assets/gifs/shopping-cart.gif"
import inventoryGif from "../assets/gifs/inventory-app.gif"

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
      title: 'SWUVSA E-Commerse Website',
      image: 'https://raw.githubusercontent.com/Appletri/shopping-cart/main/src/assets/SWUVSA_Logo.png',
      gif: shopGif,
      github: 'https://github.com/Appletri/shopping-cart',
      project: 'https://appletri.github.io/shopping-cart/',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
    },
    {
      title: 'SWUVSA E-Commerse Website',
      image: 'https://raw.githubusercontent.com/Appletri/shopping-cart/main/src/assets/SWUVSA_Logo.png',
      gif: shopGif,
      github: 'https://github.com/Appletri/shopping-cart',
      project: 'https://appletri.github.io/shopping-cart/',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio voluptatibus quibusdam facere repellat quos nam pariatur, molestias veniam rerum tempora aperiam nihil, officiis molestiae. Libero illo accusamus perspiciatis magnam?'
    },
  ]
  return(
    <div className="portfolio">
      <h1> My Work </h1>
      <div className="works">
          <Work title={portfolio[0].title} image={portfolio[0].image} gif={portfolio[0].gif} github={portfolio[0].github} project={portfolio[0].project} des={portfolio[0].des}/>
          <Work title={portfolio[1].title} image={portfolio[1].image} gif={portfolio[1].gif} github={portfolio[1].github} project={portfolio[1].project} des={portfolio[1].des}/>
          <Work title={portfolio[0].title} image={portfolio[0].image} github={portfolio[0].github} project={portfolio[0].project} des={portfolio[0].des}/>
          <Work title={portfolio[0].title} image={portfolio[0].image} github={portfolio[0].github} project={portfolio[0].project} des={portfolio[0].des}/>
          <Work title={portfolio[0].title} image={portfolio[0].image} github={portfolio[0].github} project={portfolio[0].project} des={portfolio[0].des}/>
          <Work title={portfolio[0].title} image={portfolio[0].image} github={portfolio[0].github} project={portfolio[0].project} des={portfolio[0].des}/>
        {/* {portfolio.map((work, index) => {
          <Work key={index} title={work.title} image={work.image} github={work.github} 
          project={work.project} des={work.des}/>
        })} */}
      </div>
    </div>
  )
}

export default Portfolio