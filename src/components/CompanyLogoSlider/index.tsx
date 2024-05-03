import { Autoplay } from "swiper/modules";
import styles from "./logoSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import Slider from "react-infinite-logo-slider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CompanyLogoSlider = (props: any) => {
  return (
    <section className={props.extraPadding ? styles.contactUsGroupPadding : styles.contactUsGroup}>
      <Swiper
        speed={1500}
        autoplay={{
          reverseDirection: props.reverseDirection,
          delay: 2000,
        }}
        slidesPerView={5}
        loop={true}
        modules={[Autoplay]}
        className={styles.swipperPushTp}
      >
        <SwiperSlide className="swipeaa">
          <div className={styles.abcde}>
            <img
              className={styles.logo1Icon}
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              className={styles.tcs1Icon}
              loading="lazy"
              alt=""
              src="/tcs-1@2x.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.itemcell1}>
            <img
              className={styles.wiproLogo1Icon}
              loading="lazy"
              alt=""
              src="/wiprologo-1@2x.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.secondaryLeft}>
            <img className={styles.logo1Icon1} alt="" src="/logo-1-1@2x.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.abcde1}>
            <img className={styles.logo1Icon2} alt="" src="/logo-1-2@2x.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.buttonseeall}>
            <img className={styles.logo1Icon3} alt="" src="/logo-1-3@2x.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.itemcell2}>
            <img className={styles.tcs1Icon1} alt="" src="/tcs-1-1@2x.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.itemcell3}>
            <img
              className={styles.wiproLogo1Icon1}
              alt=""
              src="/wiprologo-1-1@2x.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.logo1Wrapper}>
            <img className={styles.logo1Icon4} alt="" src="/logo-1-4@2x.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa">
          <div className={styles.headercell}>
            <img className={styles.logo1Icon5} alt="" src="/logo-1-5@2x.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CompanyLogoSlider;
