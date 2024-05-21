
import {
    Navbar,
    ContactForm,
    Footer,
    ReviewFooter,
    BcdeTrainingTab
  } from "../components";
  import styles from "./css/bcde.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/bcde.module.css';
  
  function Bcde() {
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
            <p className={styles.weStrengthen}>BCDE- BlackPerl Certified Detection Engineer</p>
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
            <p className={styles.weStrengthen}>The course is aimed to provide learners with comprehensive knowledge and practical skills in the subject of Detection Engineering Process. This course takes you from novice to expert, from learning the principles to hands-on experience. </p>
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
            <p className={styles.weStrengthenSmall}>JOIN OUR BCDE<br/>
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

        <BcdeTrainingTab />

        <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      </>
    );
  }
  
  export default Bcde;
  