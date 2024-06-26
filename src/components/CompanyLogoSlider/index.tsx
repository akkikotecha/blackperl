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
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
          },
          1229: {
            slidesPerView: 4,
          },
          1396: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className="swipeaa">
          <div className={styles.abcde}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 25.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 27.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 28.png"
            />

            
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 29.png"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 32.png"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 33.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 34.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 35.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 36.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 37.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 38.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 39.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 40.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeaa" >
          <div className={styles.itemcell}>
            <img
              loading="lazy"
              alt=""
              src="/logo/Frame 41.png"
            />
          </div>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default CompanyLogoSlider;
