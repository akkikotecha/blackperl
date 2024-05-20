
import {
    Navbar,
    ContactForm,
    Footer,
    ReviewFooter,
    TrainingTab
  } from "../components";
  import styles from "./css/Training.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/Training.module.css';
  
  function Training() {
    return (
      <>
        <Navbar />
        <section className={styles.dataMerger}>
        <div className={styles.row}>
        <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../training/image_17.png'/>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>BlackPerl Certified Advanced Defender- Cyber Career Surge Framework</p>
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
            <p className={styles.weStrengthen}>BCAD-Accelerated is a fast track version of BCAD which is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts, security blue teams, threat hunters, and DFIR professionals. This program is also defined for someone who wants to switch their career from any other IT background to Cyber Security.</p>
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
            <p className={styles.weStrengthenSmall}>JOIN OUR BCAD<br/>
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

        <TrainingTab />

        <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      </>
    );
  }
  
  export default Training;
  