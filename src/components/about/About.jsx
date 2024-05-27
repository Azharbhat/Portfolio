import React from 'react';
import './about.css';
import Img from './../../images/me.png';
import { IoIosPersonAdd } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const About = React.forwardRef(({ scrollToArea }, ref) => {
  return (
    <div className='about_container' ref={ref}>
      <div className='about_container_top'>
        <h4>Get to know</h4>
        <h1>About Me</h1>
      </div>
      <div className='about_container_center'>
        <div className='about_container_left'>
          <div className='imgpicker'> <img src={Img} className='img'/></div>
        </div>
        <div className='about_container_right'>
          <div className='right'>
            <div className='right_sub'>
              <GiArtificialIntelligence className='icons' />
              <h5>Experience</h5>
              <h6 style={{color:'#2c2c6c'}}>1 Year</h6>
            </div>
            <div className='right_sub'>
              <IoIosPersonAdd className='icons'/>
              <h5>Clients</h5>
              <h6 style={{color:'#2c2c6c'}}>50</h6>
            </div>
            <div className='right_sub'>
              <FaProjectDiagram className='icons'/>
              <h5 >Projects</h5>
              <h6 style={{color:'#2c2c6c'}}>10</h6>
            </div>
          </div>
          <div className='para'>
            <p>

            As a full-stack Java developer and MERN (MongoDB, Express.js, React, Node.js) stack developer, I bring a versatile skill set to the world of web development. With proficiency in both Java and the MERN stack, I am adept at building robust and scalable applications across the entire development spectrum. My expertise spans server-side programming with Java, Spring, and Node.js, coupled with client-side development using React for creating dynamic and interactive user interfaces.
                 Having completed various projects, I have gained practical experience in designing and implementing end-to-end solutions. In these projects, I have demonstrated my ability to handle database management, server-side logic, and front-end functionality seamlessly. I am well-versed in integrating diverse technologies to create cohesive and efficient systems.
                 My dedication to staying current with industry trends and my passion for problem-solving contribute to my continuous growth as a developer. Whether it's crafting back-end functionalities or designing intuitive user interfaces, I approach each project with a commitment to delivering high-quality and user-friendly solutions. My comprehensive skills in full-stack development position me as a valuable asset in creating innovative and impactful digital experiences.
            </p>
          </div>
          <div className='cta'>
            <a className='btn-primary' href='#contact' onClick={scrollToArea}>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
