import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Carousel from 'react-bootstrap/Carousel';
// import styles from "./css/Services.module.css";
import styles from "../../Page/css/Services.module.css";
import stylesTwo from "../../Page/css/Home.module.css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import archan from '../../../public/training/archan.png';
import souvik from '../../../public/training/souvik.png';
import sayan from '../../../public/training/sayan-avatat.png';
import { Modal } from "react-bootstrap";
// import sayan from '../../../public/training/avatar-sayan.png';
const Service = () => {
  const data = [
    {
      imgURL:archan,
      heading: "Archan",
      heading2:"Choudhury",
           content: "Lead Instructor of BCAD Program and he is the creator of BlackPerl DFIR Community. He has been associated with DFIR Industry for over 10 years now. He has played major role in various field of information and cyber security (Consumer Goods, FMGC, Media Industries, Phytical Tech store). He is known for his intensive knowledge of Incident Response, Threat Hunt, Security Engineering in On-Prem and Cloud. He has closely worked with various prestigious Organization like- Wipro, Unilever Industries Pvt. Ltd., Informatica, Amazon, Uptycs.",

    },
    {
      imgURL:souvik,
      heading: `Souvik`,
      heading2:"Biswas",
            content: "Sr. Consultant and associated with BlackPerl DFIR from it's inception. Throughout his career, he has honed his expertise in Digital Forensics and Incident Response, threat intelligence and helped many law enforcement agencies. He is known for his profound expertise on Mobile Forensics and Windows Disk Forensics. As a former lead consultant in DFIR, he played a critical role in identifying and responding to critical investigations on LE departments.",

    },
    {
      imgURL:sayan,
      heading: `Sayan`,
      heading2:"Kr Dey",
      content: "Sr. Consultant and associated with BlackPerl DFIR from it's inception. He comes up with extensive experience in Incident Response and Threat hunting, demonstrated excellence in varying Cybersecurity roles supporting critical functions in Security Operations from Incident Response to Threat Hunting and Digital Forensics. He has been a part of several DFIR consulting engagements for doing investigation for critical and sophisticated attacks, has also been a part of the Detection and Response Team (DART) - APAC and highly specialized team for maintaining effective cyber security analysis capabilities covering IT assets.",
    },
    {
      imgURL:archan,
      heading: "Archan",
      heading2:"Choudhury",
      content: "Lead Instructor of BCAD Program and he is the creator of BlackPerl DFIR Community. He has been associated with DFIR Industry for over 10 years now. He has played major role in various field of information and cyber security (Consumer Goods, FMGC, Media Industries, Phytical Tech store). He is known for his intensive knowledge of Incident Response, Threat Hunt, Security Engineering in On-Prem and Cloud. He has closely worked with various prestigious Organization like- Wipro, Unilever Industries Pvt. Ltd., Informatica, Amazon, Uptycs.",
    },
    {
      imgURL:souvik,
      heading: `Souvik`,
      heading2:"Biswas",
      content: "Sr. Consultant and associated with BlackPerl DFIR from it's inception. Throughout his career, he has honed his expertise in Digital Forensics and Incident Response, threat intelligence and helped many law enforcement agencies. He is known for his profound expertise on Mobile Forensics and Windows Disk Forensics. As a former lead consultant in DFIR, he played a critical role in identifying and responding to critical investigations on LE departments.",
    },
    {
      imgURL:sayan,
      heading: `Sayan`,
      heading2:"Kr Dey",
          content: "Sr. Consultant and associated with BlackPerl DFIR from it's inception. He comes up with extensive experience in Incident Response and Threat hunting, demonstrated excellence in varying Cybersecurity roles supporting critical functions in Security Operations from Incident Response to Threat Hunting and Digital Forensics. He has been a part of several DFIR consulting engagements for doing investigation for critical and sophisticated attacks, has also been a part of the Detection and Response Team (DART) - APAC and highly specialized team for maintaining effective cyber security analysis capabilities covering IT assets.",

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
  const [showModal, setShowModal] = useState(false);
  const [readMoreData, setReadMoreData] = useState("");
  const [readMoreName, setReadMoreName] = useState("");
 
  const handleClose = () => {
    setShowModal(false);
    // sessionStorage.setItem("HomeModal", "false");
  };

  const handleShow = (data:string,name:string) => {
    console.log("data is",data)
    setReadMoreData(data)
    setReadMoreName(name)
    setShowModal(true);
  };
  
    return (
    <>
      
      <div className="d-flex mt-4">
                <button onClick={goToPrevSlide} className="rotateImage">
                  <img
                    
                    loading="lazy"
                    alt=""
                    src="/group-457-2.svg"
                  />
                </button>
           
              <button onClick={goToNextSlide} className="ms-3">
                <img
                 
                  alt=""
                  src="/group-457-2.svg"
                />
              </button>
              </div>
      <div
        style={{
          color: "white",
          width: "100%",
          padding: "70px 14px",
          paddingRight: "26px"
        }}
      >
        <Swiper
          navigation={false}
          modules={[Navigation]}
          className=""
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
              <div className="mainContainerInstructor">
                <div className="container">
                  <img src={single?.imgURL} className="imgURL"  />
                  <h1 className="textH2Main"> {single?.heading}</h1>
                  <h1 className="textH1Main"> {single?.heading2}</h1>
                  
                  <div onClick={()=>handleShow(single?.content,`${single?.heading} ${single?.heading2}`)} className="readMoreContainer">
                    <h1  >Read More</h1>
                    <img loading="lazy" alt="" src="/group-456.svg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Carousel className="myCarousleSet">
        {data.map((single, index) => (

<Carousel.Item  key={index}>
<div className="mainContainerInstructor">
                <div className="container">
                  <img src={single?.imgURL} className="imgURL"  />
                  <h1 className="textH2Main"> {single?.heading}</h1>
                  <h1 className="textH1Main"> {single?.heading2}</h1>
                  
                  <div className="readMoreContainer">
                    <h1>Read More</h1>
                    <img loading="lazy" alt="" src="/group-456.svg" />
                  </div>
                </div>
              </div>
</Carousel.Item>
        ))}
</Carousel> */}


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
        <Modal.Header closeButton className={stylesTwo.positionFix}></Modal.Header>
        {/* <Link to="/BCAD"> */}
          <Modal.Body className={stylesTwo.ModalCurv}>
            {/* <h4>JOIN OUR</h4> */}
            
            <h1 >
              <span className={`${styles.data_box} text-[#00F38e]`}>{readMoreName}</span>
              
              <p className={` mt-4 text-white text-[25px]`}>{readMoreData}</p>
            </h1>
          </Modal.Body>
        {/* </Link> */}
      </Modal>
   
    </>
  );
};

export default Service;
