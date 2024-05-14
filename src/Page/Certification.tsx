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
          <div className="col-lg-3 col-md-6 p-4 pt-5">
          <h2 className={styles.priceTag}>
          1,999INR<span> / month</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
            1 Months
          </h2>
          <p className={styles.priceDisTag}>
          Access to our entire academy(Course, Lab, Certification) for one month. Billing renews monthly unless cancelled. This is a subscription product billed on a monthly basis until you cancel. Cancel anytime. Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto  ${styles.PriceChooseButton}`} >Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4  pb-5 pt-5">
          <h2 className={styles.priceTag}>
          4,999INR<span> / 3 months</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
          3 Month (Save 998INR)
          </h2>
          <p className={styles.priceDisTag}>
          Access to our entire academy(Course, Lab, Certification) for three months. Billing renews 3 monthly unless cancelled. This is a subscription product billed on a monthly basis until you cancel. Cancel anytime. Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4   pb-5 pt-5">
          <h2 className={styles.priceTag}>
          8,999INR<span> / 6 months</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
          6 Month (Save 2995INR)
          </h2>
          <p className={styles.priceDisTag}>
          Access to our entire academy(Course, Lab, Certification) for three months. Billing renews 6 monthly unless cancelled. This is a subscription product billed on a monthly basis until you cancel. Cancel anytime. Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.
          </p>
          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className={`col-lg-3 col-md-6 p-4 pt-5  ${styles.PopularSet}`}>
          <div className="text-right mb-4">
          <span className={styles.populartext}>
          MOST POPULAR
          </span>
          </div>
          <h2 className={styles.PopularpriceTag}>
          17,999INR<span> / year</span>
          </h2>
          <h2 className={styles.PopularpriceMonthTag}>
          12 Month (Save 5,989INR)
          </h2>
          <p className={styles.PopularpriceDisTag}>
          Access to our entire academy(Course, Lab, Certification) for three months. Billing renews yearly unless cancelled. This is a subscription product billed on a monthly basis until you cancel. Cancel anytime. Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.
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
