
import {
    Navbar,
    ContactForm,
    Footer,
    ReviewFooter,
    BccdTrainingTab
  } from "../components";
  import styles from "./css/bccd.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/bccd.module.css';
import { useEffect } from "react";
  
  function Bccd() {
    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <Navbar />
        <section className={styles.dataMerger}>
        <div className={styles.row}>
        <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../training/pcd.png'/>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>BlackPerl Practical Cloud Defender</p>
          </h1>
          <div className={styles.row_right}>
            <div className={`${styles.flex_row} ${styles['col-2']}`}>
              <img className={styles.float_img} src='../../../training/small_check.png'/>
              <h5 className={styles.title_flex}>3 Engagement Plans</h5>
            </div>
            <div className={`${styles.flex_row} ${styles['col-2']}`}>
              <img className={styles.float_img} src='../../../training/small_check.png'/>
              <h5 className={styles.title_flex}>Download Full Course Syllabus</h5>
            </div>
          </div>
          </div>
          </div>
        </section>
        <section>
        <div className={styles.row_second}>
        
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainerSmall}>
            <p className={`${styles.weStrengthen} pe-3`}>The BlackPerl Certified, Practical Cloud Defender (PCD) program equips you with the skills to secure cloud environments. Through a blend of theory and hands-on labs, you'll, master cloud security fundamentals, threat detection, incident response and more.
            </p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <button className={`${styles.am} ${styles.enrollNow}`}>
            <b className={styles.contactUs}>Enrol NOW</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button>
          </div>
          </div>
        <div className={styles.row_third}>
        
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainerWhite}>
            <p className={styles.weStrengthenSmall}>JOIN OUR BPCD<br/>
              ACCELERATED PROGRAM</p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <button className={`${styles.am} ${styles.ammm}`}>
            <b className={styles.contactUs}>View More</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button>
          </div>
          </div>
        </section>

        <BccdTrainingTab />

        <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      </>
    );
  }
  
  export default Bccd;
  