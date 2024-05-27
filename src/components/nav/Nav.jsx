import React,{ useRef } from 'react'
import './Nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { SiExpertsexchange } from "react-icons/si";
import { MdRoundaboutRight } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
const Nav = ({ scrollToArea,scrollToHeader,scrollToAbout,scrollToExperience,scrollToServices,scrollToPortfolio,scrollToTestmonials}) => {
  return (
    <div className='Nc'>
    <div className="navbar">
    <a> <IoHomeOutline className='ic' onClick={scrollToHeader}/></a>
    <a ><MdRoundaboutRight className='ic' onClick={scrollToAbout}/></a>
    <a> <SiExpertsexchange className='ic' onClick={scrollToExperience}/></a>
    <a ><GrServices className='ic' onClick={scrollToServices}/></a>
    <a > <MdWorkOutline className='ic' onClick={scrollToPortfolio }/></a>
    <a ><MdOutlineRateReview className='ic' onClick={scrollToTestmonials}/></a>
    <a> <IoIosContact className='ic' onClick={scrollToArea}/></a>
    </div>
    </div>
   
  )
}

export default Nav
