import React, {useRef, useState } from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDisabledByDefault } from "react-icons/md";

import './App.css'; // Assuming your global styles are defined here



function App() {
  //Darkmode code
  const [backgroundColor, setBackgroundColor] = useState('');
    const defaultt = () => {
    const newColor = ''
    setBackgroundColor(newColor);
    };
    const dark =()=>{ 
      const newColor = 'black'
      setBackgroundColor(newColor);
    };

   
  //ref scroll code
    const targetRef = useRef(null);
    const scrollToArea = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const headerRef=useRef(null)
    const scrollToHeader =()=>{
        headerRef.current.scrollIntoView({behavior:'smooth'})
    }
    const AboutRef=useRef(null)
    const scrollToAbout =()=>{
      AboutRef.current.scrollIntoView({behavior:'smooth'})
    }
    const ExperienceRef=useRef(null)
    const scrollToExperience  =()=>{
      ExperienceRef.current.scrollIntoView({behavior:'smooth'})
    }
    const ServicesRef=useRef(null)
    const scrollToServices =()=>{          //
      ServicesRef.current.scrollIntoView({behavior:'smooth'})
    }
    const PortfolioRef=useRef(null)
    const scrollToPortfolio =()=>{
      PortfolioRef.current.scrollIntoView({behavior:'smooth'})
    }
    const TestmonialsRef=useRef(null)
    const scrollToTestmonials =()=>{
      TestmonialsRef.current.scrollIntoView({behavior:'smooth'})
    }

  return (
    <div style={{backgroundColor: backgroundColor}} >
        <div className='darkmode' >
             <CiDark className='icc' onClick={defaultt}/>
             <MdDarkMode className='icc' onClick={dark}/>
        </div>
      <Header ref={headerRef} scrollToArea={scrollToArea}/>
      <About ref={AboutRef} scrollToArea={scrollToArea}/>
      <Nav scrollToArea={scrollToArea} scrollToHeader={scrollToHeader} scrollToAbout={scrollToAbout} scrollToExperience={scrollToExperience} scrollToServices={scrollToServices} scrollToPortfolio={scrollToPortfolio} scrollToTestmonials={scrollToTestmonials}/>
      <Experience ref={ExperienceRef}/>
      <Services ref={ServicesRef}/>
      <Portfolio ref={PortfolioRef}/>
      <Testimonials ref={TestmonialsRef}/>
      <Contact ref={targetRef}/>
      <Footer />
    </div>
  );
}

export default App;
