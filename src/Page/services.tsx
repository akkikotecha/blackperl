import { Navbar, ContactForm, Footer, ReviewFooter } from "../components";
import styles from "./css/Services.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Services.module.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className={`${styles.dataMerger} mt-5`}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>SERVICES</p>
        </h1>
      </section>
      <div className="container mt-0 pt-0">
        <div className="row text-center">
          <h2 className={styles.organisation}>Portfolio</h2>
        </div>
      </div>

      <div className={`container mt-5 pt-0 mb-5 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-5 col-md-6 p-4 pt-5">
            <img src="./portfolio/porfolio_1.png" />
          </div>
          <div className="col-lg-7 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>
              DEFENSIVE SECURITY & <br />
              MANAGED SERVICES
            </h1>
            <p className={styles.title_p}>
              You will get our custom tools, software, virtual machines images,
              sample analysis data sets, logs which will can be around 100+ GBs.
              You will get our custom tools, software, virtual machines images,
              sample analysis data sets, logs which will can be around 100+ GBs.
            </p>

            <button className={`${styles.am} ms-auto`}>
              <b className={styles.contactUs}>Read More</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button>
          </div>
        </div>

        <div className={`row mt-5 pt-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>
            INDUSTRIAL TRAINING & <br/>
CERTIFICATION
            </h1>
            <p className={styles.title_p}>
            You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.
            </p>

            <button className={styles.am}>
              <b className={styles.contactUs}>Read More</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button>
          </div>
          <div className="col-lg-5 col-md-6 p-4 pt-5">
            <img src="./portfolio/porfolio_2.png" />
          </div>
          
        </div>


        <div className={`row mt-5 pt-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-5 col-md-6 p-4 pt-5">
            <img src="./portfolio/porfolio_3.png" />
          </div>
          <div className="col-lg-7 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>
            LIVE TRAINING & <br/>
            CERTIFICATION
            </h1>
            <p className={styles.title_p}>
              You will get our custom tools, software, virtual machines images,
              sample analysis data sets, logs which will can be around 100+ GBs.
              You will get our custom tools, software, virtual machines images,
              sample analysis data sets, logs which will can be around 100+ GBs.
            </p>

            <button className={`${styles.am} ms-auto`}>
              <b className={styles.contactUs}>Read More</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button>
          </div>
        </div>

        <div className={`row mt-5 pt-5 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>
            Academic <br/>
collaboration
            </h1>
            <p className={styles.title_p}>
            You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.
            </p>

            <button className={styles.am}>
              <b className={styles.contactUs}>Read More</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button>
          </div>
          <div className="col-lg-5 col-md-6 p-4 pt-5">
            <img src="./portfolio/porfolio_4.png" />
          </div>
          
        </div>

      </div>

      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
    </>
  );
}

export default Services;
