import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import styles from "../../Page/css/Services.module.css";
import stylesTwo from "../../Page/css/Home.module.css";
import "./style.css";
import { Navigation } from "swiper/modules";
import archan from '../../../public/training/archan.png';
import { Modal } from "react-bootstrap";
// import souvik from '../../../public/training/souvik.png';
// import sayan from '../../../public/training/sayan.png';
const Service = () => {
  const data = [
    // {
    //   imgURL:archan,
    //   heading: "Archan",
    //   heading2:"Choudhury",
    //   content: "#",
    // },
    // {
    //   imgURL:souvik,
    //   heading: `Souvik`,
    //   heading2:"Biswas",
    //   content: "#",
    // },
    // {
    //   imgURL:sayan,
    //   heading: `Sayan`,
    //   heading2:"Kr Dey",
    //   content: "#",
    // },
    {
      imgURL: archan,
      heading: "Archan",
      heading2: "Choudhury",
      content:
        "Lead Instructor of BCAD Program and he is the creator of BlackPerl DFIR Community. He has been associated with DFIR Industry for over 10 years now. He has played major role in various field of information and cyber security (Consumer Goods, FMGC, Media Industries, Phytical Tech store). He is known for his intensive knowledge of Incident Response, Threat Hunt, Security Engineering in On-Prem and Cloud. He has closely worked with various prestigious Organization like- Wipro, Unilever Industries Pvt. Ltd., Informatica, Amazon, Uptycs.",
    },
    // {
    //   imgURL:souvik,
    //   heading: `Souvik`,
    //   heading2:"Biswas",
    //   content: "#",
    // },
    // {
    //   imgURL:sayan,
    //   heading: `Sayan`,
    //   heading2:"Kr Dey",
    //   content: "#",
    // },
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

  const [showModal, setShowModal] = useState(false);
  const [readMoreData, setReadMoreData] = useState("");
  const [readMoreName, setReadMoreName] = useState("");

  const handleClose = () => {
    setShowModal(false);
    // sessionStorage.setItem("HomeModal", "false");
  };

  const handleShow = (data: string, name: string) => {
    console.log("data is", data);
    setReadMoreData(data);
    setReadMoreName(name);
    setShowModal(true);
  };

    return (
      <>
        <div className="d-flex mt-4">
          <button onClick={goToPrevSlide} className="rotateImage">
            <img loading="lazy" alt="" src="/group-457-2.svg" />
          </button>

          <button onClick={goToNextSlide} className="ms-3">
            <img alt="" src="/group-457-2.svg" />
          </button>
        </div>
        <div
          style={{
            color: "white",
            width: "100%",
            padding: "70px 14px",
            paddingRight: "26px",
          }}
           
        >
          <Swiper
          
            navigation={false}
            modules={[Navigation]}
            className="flex justify-center items-start my-swiper"
            speed={1500}
            slidesPerView={1}
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
                <div className="mainContainerInstructor">
                  <div className="container">
                    <img src={single?.imgURL} className="imgURL" />
                    <h1 className="textH2Main"> {single?.heading}</h1>
                    <h1 className="textH1Main"> {single?.heading2}</h1>

                    <div
                      onClick={() =>
                        handleShow(
                          single?.content,
                          `${single?.heading} ${single?.heading2}`
                        )
                      }
                      className="readMoreContainer"
                    >
                      <h1>Read More</h1>
                      <img loading="lazy" alt="" src="/group-456.svg" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Modal
          show={showModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          // className={styles.popuppadding}
          className={stylesTwo.PaddingModalSet}
        >
          <Modal.Header
            closeButton
            className={stylesTwo.positionFix}
          ></Modal.Header>
          {/* <Link to="/BCAD"> */}
          <Modal.Body className={stylesTwo.ModalCurv}>
            {/* <h4>JOIN OUR</h4> */}

            <h1>
              <span className={`${styles.data_box} text-[#00F38e]`}>
                {readMoreName}
              </span>

              <p className={` mt-4 text-white text-[25px]`}>{readMoreData}</p>
            </h1>
          </Modal.Body>
          {/* </Link> */}
        </Modal>
      </>
    );
};

export default Service;
