import { FunctionComponent } from "react";
// import Component1Service from "./Service";
import styles from "./PortfolioServices.module.css";

const WriteHereLabel: FunctionComponent = () => {
  return (
    <section className={styles.writeHereLabel}>
      <div className={styles.agreeTermsCheckboxGroup}>
        <div className={styles.imageFrame}>
          <div className={styles.headerFrame}>
            <div className={styles.subheaderFrame}>
              <h1 className={styles.services}>Services</h1>
              <h1 className={styles.relationFirst}>
                RELATION FIRST – CUSTOM SOLUTION
              </h1>
            </div>
            <div className={styles.text}>
              <img
                className={styles.textChild}
                loading="lazy"
                alt=""
                src="/group-1171276224@2x.png"
              />
            </div>
            <img
              className={styles.headerFrameChild}
              alt=""
              src="/group-457-2.svg"
            />
          </div>
        </div>
        <h1 className={styles.portfolio}>Portfolio</h1>
      </div>
    </section>
  );
};

export default WriteHereLabel;
