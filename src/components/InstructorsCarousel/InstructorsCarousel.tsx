import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carousel from 'react-bootstrap/Carousel';

import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import archan from '../../../public/training/archan.png';
import souvik from '../../../public/training/souvik.png';
import sayan from '../../../public/training/sayan.png';
const Service = () => {
  const data = [
    {
      imgURL:archan,
      heading: "Archan",
      heading2:"Choudhury",
      content: "#",
    },
    {
      imgURL:souvik,
      heading: `Souvik`,
      heading2:"Biswas",
      content: "#",
    },
    {
      imgURL:sayan,
      heading: `Sayan`,
      heading2:"Kr Dey",
      content: "#",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef: any = useRef(null);
    return (
    <>
      
      <div
        style={{
          color: "white",
          width: "100%",
          padding: "70px 15px",
        }}
      >
        <Swiper
          navigation={false}
          modules={[Navigation]}
          className="mySwiperaddtab"
          speed={1500}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          ref={swiperRef}
        >
          {data.map((single, index) => (
            <SwiperSlide key={index}>
              <div className="mainContainerInstructor">
                <div className="container">
                  <img src={single?.imgURL} className="imgURL"  />
                  <h1 className="textH2Main"> {single?.heading}</h1>
                  <h1 className="textH1Main"> {single?.heading2}</h1>
                  
                  <div className="readMoreContainer">
                    <h1>Read More</h1>
                    <img loading="lazy" alt="" src="/group-456.svg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Carousel className="myCarousleSet">
        {data.map((single, index) => (

<Carousel.Item  key={index}>
<div className="mainContainerInstructor">
                <div className="container">
                  <img src={single?.imgURL} className="imgURL"  />
                  <h1 className="textH2Main"> {single?.heading}</h1>
                  <h1 className="textH1Main"> {single?.heading2}</h1>
                  
                  <div className="readMoreContainer">
                    <h1>Read More</h1>
                    <img loading="lazy" alt="" src="/group-456.svg" />
                  </div>
                </div>
              </div>
</Carousel.Item>
        ))}
</Carousel>
      </div>

      
   
    </>
  );
};

export default Service;
