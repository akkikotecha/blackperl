import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const FooterSection: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.frameWithTitleAndSubtitle}>
        <div className={styles.instaFbYTFrame}>
        <img className={styles.image1Icon} alt="" src="/image-1-1@2x.png" />
          <div className={styles.instaFbYTLabel}>
          <img
              className={styles.ytIcon}
              loading="lazy"
              alt=""
              src="/yt.svg"
            />
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
            
          </div>
        </div>
       

      </div>
      <div className={styles.reviewsParent}>
        <Link to="/Review"><h3 className={styles.reviews}>{`Reviews  `}</h3></Link>
        <a href="https://academy.blackperldfir.com/learn" target="_blank"><h3 className={styles.academy}>Academy</h3></a>
        <Link to="/LiveTrainning"><h3 className={styles.training}>Training</h3></Link>
      </div>

      <div className={styles.reviewsParent}>
      <Link to="/about"><h3 className={styles.aboutUs}>About us</h3></Link>
      <Link to="/Services"><h3 className={styles.services}>Services</h3></Link>
      <Link to="/GetInTouch"> <h3 className={styles.contact}>Contact</h3></Link>
      </div>
    </div>
  );
};

export default FooterSection;
