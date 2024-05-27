import React from 'react'
import './Experience.css'
import { CiCircleCheck } from "react-icons/ci";
const Experience=React.forwardRef((props, ref)=> {
  return (
    <div className='Ec' ref={ref}>
      <div className='Etc'> <h4> What Skills I Have</h4><h1>My Experience</h1></div>
      <div className='Esc'>
              <div className='Resc'>
                 <h2> Frontend Developer</h2>
                     <div className='F'>
                            <div className='S'>
                                 <div><h3><CiCircleCheck />Html</h3><h6>Experienced</h6></div>
                                 <div><h3>JavaScript</h3> <h6> Experienced</h6></div>
                                 <div><h3>BootStrap</h3><h6>Experienced</h6></div>
                             </div>
                           <div className='S'>
                                 <div>
                                 <div><h3>Css</h3><h6>Experienced</h6></div></div>
                                 <div><h3>React </h3> <h6> Experienced </h6></div>
                                 <div><h3> ChartJs </h3> <h6>Experienced</h6></div>
                                 </div>
                                 
                      </div>
        </div>
              <div className='Resc'>
                 <h2> Backend Developer</h2>
                     <div className='F'>
                            <div className='S'>
                                 <div><h3>NodeJs</h3><h6>Experienced</h6></div>
                                 <div><h3>Java</h3> <h6> Experienced</h6></div>
                                 <div><h3>MongoDb</h3><h6>Experienced</h6></div>
                             </div>
                           <div className='S'>
                                 <div>
                                 <div><h3>Php</h3><h6>Experienced</h6></div></div>
                                 <div><h3>Python</h3> <h6> Experienced </h6></div>
                                 <div><h3> MySql</h3> <h6>Experienced</h6></div>
                                 </div>
                                 
                      </div>
              </div>
                      
                          
      </div>
    </div>
  )
});

export default Experience
