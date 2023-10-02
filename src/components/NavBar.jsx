import { useEffect } from "react";
import { useState } from "react";

function NavBar() {
  const [Y, setY] = useState(0);
  const [X, setX] = useState(screen.width);
  let height = screen.height * .7;
  let width = screen.width;
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setY(position);
  };

  const handleResize = () => {
    const width = screen.width
    setX(width);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={Y<height ?"navbar":"navbar-bg"}>
      <div className="navbar-left">
        {/* <div className="logo">
          <p>NINE</p>
          <p>20</p>
        </div> */}
        <p>TRI DUC LAM</p>
      </div>
      {width < 671 ? null : 
      <div className="navbar-right">
        <a className="nav-link" href="#about-me">ABOUT</a>
        <a className="nav-link" href="#techstack">TECH STACK</a>
        <a className="nav-link" href="#portfolio">PROJECTS</a>
        <a className="nav-link" href="#contact">CONTACT</a>
      </div>}
      
    </div>      
  );
}

export default NavBar;
