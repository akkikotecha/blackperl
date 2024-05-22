import { FunctionComponent, useRef } from "react";
import styles from "./TTIARelation.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
// import RelationImage from "./../../"
const TTIARelation: FunctionComponent = () => {
  const data = [
    {
      imgURL: "/ttia_review/37.PNG",
    },
    {
      imgURL: "/ttia_review/38.PNG",
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

export default TTIARelation;
