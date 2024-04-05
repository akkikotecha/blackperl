import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const FooterSection: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.frameWithTitleAndSubtitle}>
        <div className={styles.instaFbYTFrame}>
        <img className={styles.image1Icon} alt="" src="/image-1-1@2x.png" />
          <div className={styles.instaFbYTLabel}>
            <img
              className={styles.instaIcon}
              loading="lazy"
              alt=""
              src="/insta.svg"
            />
            <img
              className={styles.fbIcon}
              loading="lazy"
              alt=""
              src="/fb.svg"
            />
            <img
              className={styles.ytIcon}
              loading="lazy"
              alt=""
              src="/yt.svg"
            />
          </div>
        </div>
       

      </div>
      <div className={styles.reviewsParent}>
        <h3 className={styles.reviews}>{`Reviews  `}</h3>
        <h3 className={styles.academy}>Academy</h3>
        <h3 className={styles.training}>Training</h3>
      </div>

      <div className={styles.reviewsParent}>
        <h3 className={styles.aboutUs}>About us</h3>
        <h3 className={styles.services}>Services</h3>
        <h3 className={styles.contact}>Contact</h3>
      </div>
    </div>
  );
};

export default FooterSection;
