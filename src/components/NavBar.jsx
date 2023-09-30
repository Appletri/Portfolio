import { useEffect } from "react";
import { useState } from "react";

function NavBar() {
  const [colorChange, setColorChange] = useState('false');
  const [Y, setY] = useState(0);
  let height = screen.height * .7;

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setY(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={Y<height ?"navbar":"navbar-bg"}>
      <div className="navbar-left">
        {/* <div className="logo">
          <p>NINE</p>
          <p>20</p>
        </div> */}
        <p>NINE20_DESIGNS</p>
      </div>
      <div className="navbar-right">
        <a className="nav-link" href="#about-me">ABOUT</a>
        <a className="nav-link" href="#techstack">TECH STACK</a>
        <a className="nav-link" href="#portfolio">PROJECTS</a>
        <a className="nav-link" href="#contact">CONTACT</a>
      </div>
    </div>
  );
}

export default NavBar;
