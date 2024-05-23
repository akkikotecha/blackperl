import { FunctionComponent } from "react";
import styles from "./Certificates.module.css";
import { Link } from "react-router-dom";

const CollaborationPartners: FunctionComponent = () => {
  return (
    <div className={styles.collaborationPartners}>
      <div className={styles.collaborationPartnersChild} />
      <div className={styles.screenshot20240305At703Wrapper}>
        <img
          className={styles.screenshot20240305At703}
          loading="lazy"
          alt=""
          src="/screenshot-20240305-at-703-1@2x.png"
        />
      </div>
      <div className={styles.goForOurProfessinoalCertifParent}>
        <b className={styles.goForOurContainer}>
          <p className={styles.goForOur}>{`GO FOR OUR PROFESSINOAL `}</p>
          <p className={styles.certificationsToBoost}>
            CERTIFICATIONS TO BOOST YOUR DIGITAL CV
          </p>
        </b>
       <Link to="/BCAD"> <button className={styles.viewNowFrame}>
          <b className={styles.viewNow}>VIEW NOW</b>
        </button></Link>
      </div>
    </div>
  );
};

export default CollaborationPartners;
