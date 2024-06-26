import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import styles from "./PortfolioServices.module.css";
const Service = () => {
  const data = [
    {
      heading: "DEFENSIVE SECURITY & MANAGED SERVICES",
      readMoreLink: "#",
    },
    {
      heading: `INDUSTRIAL TRAINING & CERTIFICATION`,
      readMoreLink: "#",
    },
    {
      heading: `LIVE TRAINING & CERTIFICATION`,
      readMoreLink: "#",
    },
    {
      heading: `LIVE TRAINING & CERTIFICATION`,
      readMoreLink: "#",
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
                <h1 className={styles.services}>Services</h1>
                <h1 className={styles.relationFirst}>
                  RELATION FIRST – CUSTOM SOLUTION
                </h1>
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
          <h1 className={styles.portfolio}>Portfolio</h1>
        </div>

        <div className={styles.agreeTermsCheckboxGroupTest}>
          <div className={styles.imageFrame}>
            
              <div className="row">
                <div className="col-lg-6">
              <div className={styles.subheaderFrame}>
                <h1 className={styles.services}>Services</h1>
                
              </div>
              <h1 className={`mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 ${styles.portfolio}`}>Portfolio</h1>
              </div>
              <div className={`col-lg-6 ${styles.marginTopPorfolio}`}>
                <button onClick={goToPrevSlide}>
                  <img
                    className={styles.textChild}
                    loading="lazy"
                    alt=""
                    src="/group-1171276224@2x.png"
                  />
                </button>
              
              <button className={` ms-4 ${styles.rightButton}`} onClick={goToNextSlide}>
                <img
                  className={styles.headerFrameChild}
                  alt=""
                  src="/group-457-2.svg"
                />
              </button>
              </div>
              </div>
            
          </div>
          
        </div>
      </section>
      <div className="paddingCarosuleSet"
        style={{
          color: "white",
          width: "100%",
          padding: "0 75px",
        }}
      >
        <Swiper
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
          speed={1500}
          // slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          ref={swiperRef}
          breakpoints={{
            // when window width is >= 768px
            720: {
              slidesPerView: 3,
            },
            425: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((single, index) => (
            <SwiperSlide key={index}>
              <div className="mainContainer">
                <div className="container">
                  <h1 className="textH1"> {single?.heading}</h1>
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
