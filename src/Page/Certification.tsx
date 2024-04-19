import {
  Navbar,
  ContactForm,
  Footer,
  SecurityAnalyst,
  ThreatHunting,
  CloudSecurity,
  ReviewFooter,
} from "../components";
import styles from "./css/Certification.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Certification.module.css";

function LiveTrainning() {
  return (
    <>
      <Navbar />
      <section className={styles.dataMerger}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>CERTIFICATIONS</p>
        </h1>
      </section>
      <div className="container mt-0 pt-0">
        <div className="row text-center">
          <h2 className={styles.organisation}>
            Want to save more money, go for our subscription
          </h2>
        </div>
      </div>

      <div className={`container mt-5 pt-0 mb-5 pb-0 ${styles.containerSet}`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-3 p-5">
          <h2 className={styles.priceTag}>
          $19<span> / month</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
            1 Month
          </h2>
          <p className={styles.priceDisTag}>
          Unleash the power of automation.
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 p-5">
          <h2 className={styles.priceTag}>
          $54<span> / month</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
            3 Month
          </h2>
          <p className={styles.priceDisTag}>
          Advanced tools to take your work to the next level.
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 p-5">
          <h2 className={styles.priceTag}>
          $54<span> / month</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
            6 Month
          </h2>
          <p className={styles.priceDisTag}>
          Advanced tools to take your work to the next level.
          </p>
          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className={`col-lg-3 p-5 ${styles.PopularSet}`}>
          <div className="text-right mb-4">
          <span className={styles.populartext}>
          MOST POPULAR
          </span>
          </div>
          <h2 className={styles.PopularpriceTag}>
          $89<span> / month</span>
          </h2>
          <h2 className={styles.PopularpriceMonthTag}>
            12 Month
          </h2>
          <p className={styles.PopularpriceDisTag}>
          Automation plus enterprise-grade features.
          </p>
          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PopularPriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
        </div>
      </div>

      <SecurityAnalyst />
      <ThreatHunting />
      <CloudSecurity />
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
    </>
  );
}

export default LiveTrainning;
