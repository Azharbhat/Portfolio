import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiSquareAlert } from "react-icons/ci";
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a  href='https://linkedin.com' target='_blank'>
      <FaLinkedin className='aa'/></a>
      <a href='https://github.com' target='_blank'><FaGithub  className='aa'/></a>
      <a  href='https://naukri.com' target='_blank'><CiSquareAlert className='aa'/></a>
    </div>
  )
}

export default HeaderSocials
