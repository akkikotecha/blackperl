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
      heading2:"04",
      content: "Digital Forensics and Advanced Incident Response (OS Components, RAM/Disk/Targetted Acquisition, Disk Analysis, Windows Live Response, NTFS, File Carving)",
    },
    {
      heading: `Module:`,
      heading2:"05",
      content: "Incident Response with Windows Registry",
    },
    {
      heading: `Module:`,
      heading2:"06",
      content: "Incident Response with Windows Key Artefacts (Prefetch, Amcache, Shimcache, ShellBags, UserAssist)",
    },
   
    {
      heading: `Module:`,
      heading2:"07",
      content: "USB Artefacts Analysis and implement that in Incident Response",
    },
   
    {
      heading: `Module:`,
      heading2:"08",
      content: "Windows Event log Analysis and SYSMON Deep Dive",
    },
   
    {
      heading: `Module:`,
      heading2:"09",
      content: "Analysis of Email Artefacts- Email Forensics",
    },


    {
      heading: `Module:`,
      heading2:"10",
      content: "Malware Analysis for Incident Responders",
    },
    {
      heading: `Module:`,
      heading2:"11",
      content: "Incident Response and Threat Hunt with Advanced Memory Forensics",
    },
    {
      heading: `Module:`,
      heading2:"12",
      content: "Cloud Incident Response- AWS EC2 IR",
    },
    {
      heading: `Module:`,
      heading2:"13",
      content: "Introduction to Mobile Forensics",
    },
    {
      heading: `Module:`,
      heading2:"14",
      content: "Incident Response with Linux Live and Memory Artefacts",
    },
    {
      heading: `Module:`,
      heading2:"15",
      content: "Threat Intelligence and Threat Hunting",
    },
    {
      heading: `Module:`,
      heading2:"16",
      content: "Career Objective, Resume Enhancement, Job Market Enablement",
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
        
        </div>


         <div className={styles.agreeTermsCheckboxGroupTest}>
          <div className={styles.imageFrame}>
            
              <div className="row">
                <div className="col-lg-6">
              <div className={styles.subheaderFrame}>
                <h1 className={styles.services}>BCAD Course</h1>
                
              </div>
              {/* <h1 className={`mt-5 pt-5 ${styles.portfolio}`}>Outline (High Level)</h1> */}
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
          breakpoints={{
            // when window width is >= 320px
            720: {
              slidesPerView: 2,
            },
            425: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
            
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
                slidesPerView: 3,
              },
          }}
        >
          {data.map((single, index) => (
            <SwiperSlide key={index}>
              <div className={`mainContainerLabs ${styles.mainContainerLabsData}`}>
                <div className="container">
                  <h1 className="textH1"> {single?.heading}</h1>
                  <h1 className={`textH2 ${styles.textheading}`}> {single?.heading2}</h1>
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
