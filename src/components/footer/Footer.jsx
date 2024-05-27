import React from 'react'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='FP'>
        <div className='FCenter'>
        <div><CiFacebook className='icons'/><FaInstagram className='icons'/><CiTwitter className='icons' /></div>
        <div><FaRegCopyright /> Azhar all tutorials reserved</div>
        </div>
        
    </div>
  )
}

export default Footer
