import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";

const Service = () => {
  const data = [
    {
      imgURL:"../../../public/training/archan.png",
      heading: "Archan",
      heading2:"Choudhury",
      content: "#",
    },
    {
      imgURL:"../../../public/training/souvik.png",
      heading: `Souvik`,
      heading2:"Biswas",
      content: "#",
    },
    {
      imgURL:"../../../public/training/sayan.png",
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
          className="mySwiper"
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
      </div>
    </>
  );
};

export default Service;
