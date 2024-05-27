import React, { useRef, useState } from 'react';
import './portfolio.css';
import ReactPlayer from 'react-player';

import Wv from './../../videos/TabletView.mp4'
import MyComponent from './MyComponent';


const Portfolio = React.forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const handleHout=(vd)=>{
    const video =vd.current;
    video.pause();
  }
  const handleHover = (vd) => {
    const video =vd.current;
  video.play();
  };

  const visitt = (link) => {
    const url = link;
    window.open(url, '_blank');
  };

  const data = [
    {
      "img": '',
      discription: "A weather web app offers real-time and forecasted weather information, including temperature, humidity, and wind speed.",
      link: "https://azharbhat.github.io/WeatherWise/",
      git_link: "https://github.com/Azharbhat/WeatherWise.git",
      Vlink:Wv,
      vd:videoRef1
    },
    {
      "img": '',
      discription: "Google Drive Video 1",
      link: "https://drive.google.com/file/d/your-video-id-1/view?usp=sharing",
      Vlink:Wv,
      vd:videoRef2
    },
    {
      "img": '',
      discription: "Google Drive Video 2",
      link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
      Vlink:Wv,
      vd:videoRef3
    },
    {
      "img": '',
      discription: "Google Drive Video 2",
      link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
      Vlink:Wv,
      vd:videoRef4
    },
    {
      "img": '',
      discription: "Google Drive Video 2",
      link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
      Vlink:Wv,
      vd:videoRef5
    },
    {
      "img": '',
      discription: "Google Drive Video 2",
      link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
      Vlink:Wv,
      vd:videoRef6
    }
  ];
  let iterationCount = 0;

  return (
    <div className='top' ref={ref} 
   
   >
      <div className='head'>
        <div>
          <h4>My Recent Work</h4>
        </div>
        <h2>Portfolio</h2>
        <div></div>
      </div>
      <div className='m'>
                          <MyComponent />
        
      </div>
    </div>
  );
});

export default Portfolio;
