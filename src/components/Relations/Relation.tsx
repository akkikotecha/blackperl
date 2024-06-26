import { FunctionComponent, useRef } from "react";
import styles from "./Relation.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
// import RelationImage from "./../../"
const FrameComponent: FunctionComponent = () => {
  const data = [
    {
      imgURL: "/bcad_review/f1.PNG",
    },
    {
      imgURL: "/bcad_review/f2.PNG",
    },
    {
      imgURL: "/bcad_review/f3.PNG",
    },
    {
      imgURL: "/bcad_review/f4.PNG",
    },
    {
      imgURL: "/bcad_review/f5.PNG",
    },
    {
      imgURL: "/bcad_review/f6.PNG",
    },
    {
      imgURL: "/bcad_review/f7.PNG",
    },
    {
      imgURL: "/bcad_review/f8.PNG",
    },
    {
      imgURL: "/bcad_review/f9.PNG",
    },
    {
      imgURL: "/bcad_review/f10.PNG",
    },
    {
      imgURL: "/bcad_review/f11.PNG",
    },
    {
      imgURL: "/bcad_review/f12.PNG",
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
    <section className={styles.callToActionWrapper}>
      <div className={styles.callToAction}>
        <div className={styles.group}>
          <div className={styles.phoneNumberInput}>
            <button onClick={goToPrevSlide}>
              <img
                className={styles.phoneNumberInputChild}
                alt=""
                src="/group-1171276224@2x.png"
              />
            </button>
            <button className={styles.rightButton} onClick={goToNextSlide}>
              <img
                className={styles.phoneNumberInputItem}
                alt=""
                src="/group-457-2.svg"
              />
            </button>
          </div>
        </div>

        <div className={styles.line}>
          <Swiper
            navigation={false}
            modules={[Navigation]}
            speed={1500}
            slidesPerView={2}
            spaceBetween={2}
            loop={true}
            ref={swiperRef}
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
                slidesPerView: 1,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
              },
              1229: {
                slidesPerView: 2,
              },
              1396: {
                slidesPerView: 2,
              },
              1536: {
                slidesPerView: 2,
              },
            }}
          >
            {data.map((single) => (
              <SwiperSlide>
                <div className={styles.nameInput}>
                  <div className={styles.submitBtn}>
                    <img
                      className={styles.titleprimaryleftIcon}
                      alt=""
                      src="/vector-12.svg"
                    />
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src={single.imgURL}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
