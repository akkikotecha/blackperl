import { FunctionComponent, useRef } from "react";
import styles from "./Relation.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
// import RelationImage from "./../../"
const FrameComponent: FunctionComponent = () => {
  const data = [
    {
      imgURL: "/mask-group-1@2x.png",
    },
    {
      imgURL: "/mask-group-1@2x.png",
    },
    {
      imgURL: "/mask-group-1@2x.png",
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
            loop={true}
            ref={swiperRef}
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

            <SwiperSlide>
              <div className={styles.nameInput1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-12.svg"
                  />
                  <img
                    className={styles.maskGroupIcon1}
                    alt=""
                    src="/mask-group-1@2x.png"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
