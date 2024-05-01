import {
  ContactForm,
  Footer,
  Header,
  HowAreWeDiffenrent,
  Investigation,
  InvestigationCertificate,
  MainSection,
  Navbar,
  Relation,
  ReviewFooter,
  Services,
  CompanyLogoSlider,
} from "../components";
// import Carousel from "../components/PortfolioServices/Service";
import styles from "./css/Home.module.css";
// import Slider from "react-infinite-logo-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/PortfolioServices/Service";
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';


export default function App() {
  const [showModal, setShowModal] = useState(Boolean(localStorage.getItem("HomeModal")));

  const handleClose = () => {
    setShowModal(false);
    sessionStorage.setItem("HomeModal", "false");
  };

  useEffect(() => {
    if (!sessionStorage.getItem("HomeModal")) {
      // If the HomeModal key doesn't exist in localStorage, set it to "true" to indicate the modal should be shown
      sessionStorage.setItem("HomeModal", "true");
    } else {
      // If the HomeModal key exists, check its value
      const isModalShown = sessionStorage.getItem("HomeModal") === "true";
      setShowModal(isModalShown);
    }
  }, []); 

  return (
    <div className={styles.desktop1}>
      <Navbar />
      <Header />
      <Services />
      <section className={styles.frameText}>
        <div className={styles.frameImage}>
          <h1 className={styles.howAre}>{`HOW ARE `}</h1>
          <HowAreWeDiffenrent />
          <MainSection />
        </div>
      </section>
      {/* <PortfolioServices /> */}
      <Carousel />
      <section className={styles.contentBoxes}>
        <div className={styles.frameParent}>
          <b className={styles.learner}>Learner</b>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>What RELATIONS</p>
            <p className={styles.areTelling}>are telling?</p>
          </b>
        </div>
      </section>
      <Relation />
      {/* Our Relations */}
      <section className={styles.servicesFrame}>
        <b className={styles.ourRelationsWorkContainer}>
          <p className={styles.ourRelations}>OUR RELATIONS</p>
          <p className={styles.workAt}>WORK AT</p>
        </b>
      </section>

      <CompanyLogoSlider reverseDirection={false} extraPadding={false}  />
      <CompanyLogoSlider reverseDirection={true} extraPadding={true} />
      <section className={styles.academicPartners}>
        <Investigation />
        <InvestigationCertificate />
      </section>
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      <Modal
       show={showModal}
       onHide={handleClose}
       backdrop="static"
       keyboard={false}    
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton className={styles.positionFix}>
        
      </Modal.Header>
      <Modal.Body className={styles.ModalCurv}>
        {/* <h4>JOIN OUR</h4> */}
        <h1 className={styles.data_box}>
      <p className={styles.title_text}>JOIN OUR</p>
      <p className={styles.title_text_2}>BCAD ACCELERATED PROGRAM</p>
    </h1>
    <hr className={styles.hr_border} />
    <div className="row mt-4">    
    <div className="col-lg-6">
    <h1 className={styles.data_box}>
      <p className={`${styles.sub_title} ms-1`}>Limited Seat<span className={styles.tagColor}>!!</span></p>
    </h1>
   
      <div className="row col-lg-12 align-items-center mt-2">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>Batch starts from 15 - 04 - 2024 and ends on 31 - 05 - 2024</h5>
          </div>
      </div>
      <div className="row col-lg-12 align-items-center mt-0">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>You will get the same content what you get from BCAD and given below.</h5>
          </div>
      </div>
      <div className="row col-lg-12 align-items-center mt-0">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>Lifetime Content Access.</h5>
          </div>
      </div>

    </div>
    <div className="col-lg-6">
    <h1 className={`${styles.data_box} ms-1`}>
      <p className={styles.sub_title_new}>Cost: 16,000INR Only.</p>
    </h1>
   
      <div className="row col-lg-12 align-items-center mt-2">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>Total 1.5 months of engagement. You will get ~7 Live interaction.</h5>
          </div>
      </div>
      <div className="row col-lg-12 align-items-center mt-0">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>You connect with us weekly once for FastTrack your learning and solve queries.</h5>
          </div>
      </div>
      <div className="row col-lg-12 align-items-center mt-0">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}> 2 Exam Attempts included.</h5>
          </div>
      </div>
   
     
    </div>
    </div>

    <div className="row mt-4 mb-2">    
    <div className="col-lg-6">
    <div className="mt-1">
      <h1 className={`${styles.data_box} ms-1`}>
      <p className={styles.sub_title}>Benefits</p>
    </h1>
    </div>
      <div className="row col-lg-12 align-items-center mt-2">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>You get the same value as orthodox BCAD Full Live.</h5>
          </div>
      </div>
      <div className="row col-lg-12 align-items-center mt-0 mb-4">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>Pocket Friendly.</h5>
          </div>
      </div>

    </div>
    <div className="col-lg-6">
    
      <div className="row col-lg-12 align-items-center mt-5">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>Lifetime content access and support.</h5>
          </div>
      </div>
      <div className="row col-lg-12 align-items-center mt-4 mb-4">
        <div className="col-lg-2 width-set pe-0" >
          <img  src="../../../about/right.png" style={{"width":"70%"}} /></div>
        <div className="col-lg-10 px-0 pt-2">
          <h5 className={styles.title_flex_1}>FastTrack and quick learning.</h5>
          </div>
      </div>
     
    </div>
    </div>

      </Modal.Body>
     
    </Modal>
    </div>
    
  );
}
