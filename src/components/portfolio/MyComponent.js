 import React,{useState ,useRef} from "react";
 import './portfolio.css'
 import Wv from './../../videos/TabletView.mp4'
const MyComponent = () => {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const videoRef4 = useRef(null);
    const videoRef5 = useRef(null);
    const videoRef6 = useRef(null);
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
          discription: "Google Drive Video1111111111111111 2",
          link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
          Vlink:Wv,
          vd:videoRef4
        },
        {
          "img": '',
          discription: "Google Drive Video fdfdddddddddddddf",
          link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
          Vlink:Wv,
          vd:videoRef5
        },
        {
          "img": '',
          discription: "Google Drive Videddddddssssssss`o 2",
          link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
          Vlink:Wv,
          vd:videoRef6
        },
        {
          "img": '',
          discription: "Google Drive Video 2",
          link: "https://drive.google.com/file/d/your-video-id-2/view?usp=sharing",
          Vlink:Wv,
          vd:videoRef6
        }
      ];
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
    const itemsPerPage=3;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const currentItems = data.slice(startIndex, endIndex);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
        <div>
      <div className="r" >
        {currentItems.map((item, index) => (
        <div className='each' key={index}  onMouseEnter={() => handleHover(item.vd)}
        onMouseLeave={() => handleHout(item.vd)}>
       <video   className='subeach'
      
       ref={item.vd}
       src={Wv} typeof='video/mp4'
       controls={false} 
       muted={true} 
       loop={true}  /> <div className='btndiv'>
       <button className="btnn" onClick={() => visitt(item.git_link)}>GitHub</button>
      <button className="btnn"  onClick={() => visitt(item.link)}>Visit</button>
      </div>      
       <p style={{fontSize:'small'}}>{item.discription}</p>
      
       </div>
        ))}
      </div>
      <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button className='btn'key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyComponent;