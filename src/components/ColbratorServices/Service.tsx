import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import styles from "./ColbratorServices.module.css";
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
      <section className={`${styles.writeHereLabel} mt-5 pb-5 mb-4`}>
        <div className={styles.agreeTermsCheckboxGroup}>
          <div className={styles.imageFrame}>
            <div className={styles.headerFrame}>
              <div className={styles.subheaderFrame}>
                <h1 className={styles.services}>Why from us?</h1>
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
          {/* <h1 className={styles.portfolio}>Portfolio</h1> */}
          <div className="row mt-0 pt-1 col-lg-12">
            <div className="row width-100 ">
            <div
              className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
              style={{ width: "55px" }}>
              <img
                className={styles.float_img}
                src="../../../about/right.png"
              />
            </div>
            <div className="col-lg-11  col-md-10 px-0 ps-2 mt-2">
              <h5 className={styles.title_flex}>
              Get Access of 100% updated content based on Industry demand.
              </h5>
            </div>
            </div>
            <div className="row width-100 mt-4">
            <div
              className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
              style={{ width: "55px" }}>
              <img
                className={styles.float_img}
                src="../../../about/right.png"
              />
            </div>
            <div className="col-lg-11  col-md-10 px-0 ps-2 mt-0">
              <h5 className={styles.title_flex}>
              Our delivery method is not one-way. We will make sure you do things, and we are with you in this whole process.
              </h5>
            </div>
          </div>

          <div className="row width-100 mt-4">
            <div
              className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
              style={{ width: "55px" }}>
              <img
                className={styles.float_img}
                src="../../../about/right.png"
              />
            </div>
            <div className="col-lg-11  col-md-10 px-0 ps-2 mt-2">
              <h5 className={styles.title_flex}>
              You will talk and interact Live with world-class Cyber Security expertise.
              </h5>
            </div>
            </div>
          <div className="row width-100 mt-4">
            <div
              className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
              style={{ width: "55px" }}>
              <img
                className={styles.float_img}
                src="../../../about/right.png"
              />
            </div>
            <div className="col-lg-11  col-md-10 px-0 ps-2 mt-2">
              <h5 className={styles.title_flex}>
              We will track your progress and support you to upskill.
              </h5>
            </div>
            </div>
          <div className="row width-100 mt-4">
            <div
              className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
              style={{ width: "55px" }}>
              <img
                className={styles.float_img}
                src="../../../about/right.png"
              />
            </div>
            <div className="col-lg-11  col-md-10 px-0 ps-2 mt-2">
              <h5 className={styles.title_flex}>
              Placement and Internship Opportunity.
              </h5>
            </div>
            </div>
          </div>
        </div>

        <div className={styles.agreeTermsCheckboxGroupTest}>
          <div className={styles.imageFrame}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.subheaderFrame}>
                  <h1 className={styles.services}>Services</h1>
                </div>
                <h1
                  className={`mt-lg-5 mt-md-5 pt-md-5 pt-lg-5 ${styles.portfolio}`}>
                  Portfolio
                </h1>
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

                <button
                  className={` ms-4 ${styles.rightButton}`}
                  onClick={goToNextSlide}>
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
      <div
        className="paddingCarosuleSet"
        style={{
          color: "white",
          width: "100%",
          padding: "0 0px",
        }}>
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
          }}>
          {data.map((_single, index) => (
            <SwiperSlide key={index}>
              <img src="./collbrator/session.png" style={{ width: "94%" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Service;
