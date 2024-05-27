import React from 'react'
import './Services.css'

const Services =React.forwardRef((props, ref)=> {
  return (
    <div className='main' ref={ref}>
      <div className='SH'><h4>What I Offer</h4><h1>Services</h1></div>
      <div className='center'>
         <div className='s' >
             <div className='sc'><h2>Web Development</h2></div>
             <div className='textbox'>
             <h6>Website Development</h6>
             <h6>Frontend Development</h6>
             <h6> Backend Development</h6>
             <h6>Web Security Services</h6>
             <h6> E-commerce Development</h6>
             <h6>Content Management System</h6>
             <h6>Web Hosting and Maintenance</h6>
            
             </div>
         </div>
         <div className='ss'>
         <div className='sc'><h2>app Development</h2></div>
             <div className='textbox'>
             <h6>Optimal resource utilization</h6>
             <h6>Close attention to user experience</h6>
             <h6>Extremely collaborative and outcome-focused</h6>
             <h6>Guaranteed application scaling on demand</h6>
      
             <h6>Consistent delivery by following CI/CD approaches</h6>
            
            
             </div>
         </div>
         <div className='s'>
         <div className='sc'><h2>UI/UX Design</h2></div>
             <div className='textbox'>
             <h6>fdjfldfdjfl</h6>
             <h6>fdjfldfdjfl</h6>
             <h6>fdjfldfdjfl</h6>
             <h6>fdjfldfdjfl</h6>
             <h6>fdjfldfdjfl</h6>
           
             </div>
         </div>
       </div>
    </div>
  )
})

export default Services
