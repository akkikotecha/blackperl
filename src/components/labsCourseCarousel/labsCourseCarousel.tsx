import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import styles from "./labsCourseCarousel.module.css";
const Service = () => {
  const data = [
    {
      heading: "Module:",
      heading2:"01",
      content: "Create your own SIEM FOOS LAB",
    },
    {
      heading: `Module:`,
      heading2:"02",
      content: "Incident Detection and Response, SIEM-101",
    },
    {
      heading: `Module:`,
      heading2:"03",
      content: "Incident Detection and Response, SIEM-201",
    },
    {
      heading: "Module:",
      heading2:"01",
      content: "Create your own SIEM FOOS LAB",
    },
    {
      heading: `Module:`,
      heading2:"02",
      content: "Incident Detection and Response, SIEM-101",
    },
    {
      heading: `Module:`,
      heading2:"03",
      content: "Incident Detection and Response, SIEM-201",
    },
   
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef: any = useRef(null);
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <section className={styles.writeHereLabel}>
        <div className={styles.agreeTermsCheckboxGroup}>
          <div className={styles.imageFrame}>
            <div className={styles.headerFrame}>
              <div className={styles.subheaderFrame}>
                <h1 className={styles.services}>BCAD Course</h1>
              </div>
              <div className={styles.text}>
                <button onClick={goToPrevSlide}>
                  <img
                    className={styles.textChild}
                    loading="lazy"
                    alt=""
                    src="/group-1171276224@2x.png"
                  />
                </button>
              </div>
              <button className={styles.rightButton} onClick={goToNextSlide}>
                <img
                  className={styles.headerFrameChild}
                  alt=""
                  src="/group-457-2.svg"
                />
              </button>
            </div>
          </div>
          <h1 className={styles.portfolio}>Outline (High Level)</h1>
        </div>
      </section>
      <div
        style={{
          color: "white",
          width: "100%",
          padding: "0 15px",
        }} className={styles.PaddingCarosulesSet}
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
              <div className={`mainContainerLabs ${styles.mainContainerLabsData}`}>
                <div className="container">
                  <h1 className="textH1"> {single?.heading}</h1>
                  <h1 className="textH2"> {single?.heading2}</h1>
                  <p className="textp"> {single?.content}</p>
                  
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
