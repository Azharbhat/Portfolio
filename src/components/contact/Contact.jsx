import React from 'react'
import'./Contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";


const Contact = React.forwardRef((props, ref)=> {
  const phoneNumber = '916006292504';
  const instagramUsername = 'your_instagram_username';
  const emailAddress = 'bhatazhar9617@gmail.com';
  
  const fnc=()=>{
    const message = encodeURIComponent('Hello, I am interested in your website.');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappLink;
  }
  return (
    <div className='Contact' ref={ref}>
    <div className='SH'><h4>Get In Touch</h4><h2>ContactMe</h2></div>
    <div className='Cc'>
      <div className='Ccc'>
      <a  href={`mailto:${emailAddress}`} target="_blank"><div className='Cccl'><IoIosMail className='icons' />
         
         <h4>Mail</h4>
         <h6 style={{color:'white'}}>Send a Message</h6></div></a>

         
         <a href={`https://www.instagram.com/${instagramUsername}/`} target="_blank" rel="noopener noreferrer" className='icon'>
         <div className='Cccl'><RiMessengerLine  className='icons'/>
         <h4>Messenger</h4>
         <h6 style={{color:'white'}}>Send a Message</h6></div>
         <div className='Cccl' onClick={fnc}><FaWhatsapp  className='icons'/><h4>Whatsapp</h4><h6 style={{color:'white'}}>Send a Message</h6></div></a>
      </div>
      <div className='inputsection'>
       <input type='text' className='Cinput' placeholder='YourFullName'/>
       <input type='text' className='Cinput' placeholder='Email'/>
       <input type='text' className='Cinputt' placeholder='Your Message'/>
       
      </div>
      <button className='button'>send</button>
    </div>
    </div>
  )
});

export default Contact
