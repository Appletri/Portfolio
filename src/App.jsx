import { Helmet } from 'react-helmet';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';

function App() {

  return (
    <div className='App'>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tri's Porfolio</title>
      </Helmet>
      <div className='banner-container'>
        <div className='banner'></div>
      </div>
      <NavBar/>
      <AboutMe/>
      <TechStack/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
