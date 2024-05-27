import React from 'react'
import './Nav.css'
import { HashLink } from 'react-router-hash-link';

const nav = () => {
  return (
    <div className='Nc'>
    <div className="navbar">
   
    <a href="Header">  <HashLink smooth to='/about-us/#section1' >  </HashLink></a>
    <a href="About"> About</a>
    <a href="Experience"> Experince</a>
    <a href="#"> Services</a>
    <a href="#"> Work</a>
    <a href="#"> Testimonials</a>
    <a href="Contact"> Contact</a>
    </div>
    </div>
   
  )
}

export default nav
