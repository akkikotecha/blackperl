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
              loading="lazy"
              alt=""
              src="/logo/Arete.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Energy Australia.svg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/EY.svg"
            />

            
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 1.png"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 2.png"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 3.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 4.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 5.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 6.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 7.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 8.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 9.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 10.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Government_of_India_logo.svg"
            />
          </div>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default CompanyLogoSlider;
