import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import axios from 'axios'

const Testimonials =React.forwardRef((props, ref)=> {
  let name = ["jamseed akbar bhat", 'aabas rather', 'suhail bashir', 'azhar mohammad bhat'];
  const [ress,setRess]=useState([])
  const data = [
    {
      name: "jamseed akbar bhat",
      str: 'I recently stumbled upon this hidden gem of a software and it has completely transformed the way I work. The user interface is clean, intuitive, and aesthetically pleasing. Navigating through the features feels like a breeze, making it user-friendly for both tech-savvy individuals and those less familiar with software.',
      picture: 'https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?rs=1&pid=ImgDetMain',
    },
    {
      name: "Suhail Bashir",
      str: 'I recently came across this exceptional software, and it has truly revolutionized the way I approach my tasks. The interface is not only clean and intuitive but also exudes a modern and captivating aesthetic. Navigating through its myriad features is an absolute delight, making it equally accessible for tech enthusiasts and those who may not be as familiar with software. This software has undeniably transformed my work experience and exceeded my expectations!',
      picture: 'https://th.bing.com/th/id/OIP.AwGBn0RaiFXEpXemdj-2LQHaLG?rs=1&pid=ImgDetMain',
    },
  ];
  
  const [cur, setCur] = useState(0);

  // Use useEffect to update the state values when cur changes
  useEffect(() => {
    
    
    setNamee(data[cur].name);
    setStrr(data[cur].str);
    setPic(data[cur].picture);
    
  }, [cur, data]);

  const next = () => {
    setCur(cur % 1);
  };
  const pre=() =>{
    setCur(cur - 1);
    if(cur<0) {
      console.log(data.length);
      console.log(cur);
      setCur(0)
    }
  }

  

  const [namee, setNamee] = useState(data[cur].name);
  const [strr, setStrr] = useState(data[cur].str);
  const [pic, setPic] = useState(data[cur].picture);

  return (
    <div className='Tm' ref={ref}>
      <div className='Theader'>
        <h4>Review from clients</h4>
        <h2>Testimonials</h2>
      </div>

      <div className='Tc'>
        <img className='Ti' src={pic} alt='testimonial' />
        <h3>{namee}</h3>
        <p>{strr}</p>
      </div>
      <div className='bbtn'>
        <button className='btn 'onClick={pre}>prev</button>
        <button className='btn' onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
});

export default Testimonials;
