
import {
    Navbar,
    ContactForm,
    Footer,
    ReviewFooter,
    TiteTrainingTab
  } from "../components";
  import styles from "./css/ttia.module.css";
import stylesTwo from "./css/Training.module.css";

  import 'bootstrap/dist/css/bootstrap.css';
  import './css/ttia.module.css';
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
  
  function Ttia() {
    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);

     const [showModal, setShowModal] = useState(false);

     const handleClose = () => {
       setShowModal(false);
       // sessionStorage.setItem("HomeModal", "false");
     };

     const handleShow = () => {
       setShowModal(true);
     };
    return (
      <>
        <Navbar />
        <section className={`${styles.dataMerger}  ${styles.desktopShow}`}>
          <div className={styles.row}>
            <div className={`${styles.flex_row} ${styles["col-2"]}`}>
              <img
                className={styles.float_img}
                src="../../../training/ttiaa.png"
              />
            </div>
            <div className={`${styles.flex_row} ${styles["col-2"]}`}>
              <h1 className={styles.weStrengthenOrganisationContainer}>
                <p className={styles.weStrengthen}>
                  Tactical Threat Intelligence Analyst
                </p>
              </h1>
              <div className={styles.row_right}>
                <div className={`${styles.flex_row} ${styles["col-2"]}`}>
                  <img
                    className={styles.float_img}
                    src="../../../training/small_check.png"
                  />
                  <h5 className={styles.title_flex}>LIVE ENGAGEMENT</h5>
                </div>
                <div className={`${styles.flex_row} d-none ${styles["col-2"]}`}>
                  <img
                    className={styles.float_img}
                    src="../../../training/small_check.png"
                  />
                  <h5 className={styles.title_flex}>
                    Download Full Course Syllabus
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.desktopShow}>
          <div className={styles.row_second}>
            <div className={`${styles.flex_row} ${styles["col-2"]}`}>
              <h1 className={styles.weStrengthenOrganisationContainerSmall}>
                <p className={styles.weStrengthen}>
                  The course is aimed to provide learners with comprehensive
                  knowledge and practical skills in the subject of threat
                  intelligence. This course takes you from novice to expert,
                  from learning the principles to hands-on experience.
                </p>
              </h1>
            </div>
            <div className={`${styles.flex_row} ${styles["col-2"]}`}>
              <button
                onClick={handleShow}
                className={`${styles.am} ${styles.enrollNow}`}
              >
                <b className={styles.contactUs}>Enrol NOW</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div>
          </div>
        </section>

        <section className={`${styles.dataMerger} ${styles.mobileShow}`}>
          <div className={styles.row}>
            <div className={``}>
              <img
                className={styles.float_img}
                src="../../../training/ttiaa.png"
              />
            </div>
            <div className={`row`}>
              <h1 className={styles.weStrengthenOrganisationContainer}>
                <p>TACTICAL THREAT INTELLIGENCE ANALYST</p>
              </h1>
              <div className={"row"}>
                <div className={`col-lg-12 d-flex mt-2`}>
                  <div className="col-2 ps-0">
                    <img
                      className={styles.float_img_mobile}
                      src="../../../training/small_check.png"
                    />
                  </div>
                  <div className="col-10 px-0 pt-1">
                    <h5 className={styles.title_flex}>LIVE ENGAGEMENT</h5>
                  </div>
                </div>
                <div className={`col-lg-12 d-flex mt-3 d-none`}>
                  <div className="col-2 ps-0 ">
                    <img
                      className={styles.float_img_mobile}
                      src="../../../training/small_check.png"
                    />
                  </div>
                  <div className="col-10 px-0">
                    <h5 className={styles.title_flex}>
                      Download Full Course Syllabus
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mobileShow}>
          <div className={"row"}>
            <h1 className={styles.weStrengthenOrganisationContainerSmall}>
              <p className={styles.weStrengthen}>
                The course is aimed to provide learners with comprehensive
                knowledge and practical skills in the subject of threat
                intelligence. This course takes you from novice to expert, from
                learning the principles to hands-on experience.
              </p>
            </h1>
            <div className={`row ms-2`}>
              {/* <a
                href="https://pages.razorpay.com/pl_NyOemu0RaPqx9c/view"
                target="_blank"
              > */}
              <div>
                <button
                  onClick={handleShow}
                  className={`${styles.am} ${styles.enrollNow}`}
                >
                  <b className={styles.contactUs}>Enrol NOW</b>
                  <img className={styles.amChild} alt="" src="/group-457.svg" />
                </button>
              </div>
              {/* </a> */}
            </div>
          </div>
        </section>
        <TiteTrainingTab />

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
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className={stylesTwo.popuppadding}
        >
          <Modal.Header
            closeButton
            className={stylesTwo.positionFix}
          ></Modal.Header>
          {/* <Link to="/BCAD"> */}
          <Modal.Body className={stylesTwo.ModalCurv}>
            {/* <h4>JOIN OUR</h4> */}
            <h1 className={stylesTwo.data_box}>
              <p className={`${stylesTwo.title_text_2} mt-4`}>Coming Soon</p>
            </h1>
          </Modal.Body>
          {/* </Link> */}
        </Modal>
      </>
    );
  }
  
  export default Ttia;
  