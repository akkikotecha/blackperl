import { FunctionComponent, useState } from "react";
import styles from "./GroupComponent.module.css";
import { Link } from "react-router-dom";

const GroupComponent: FunctionComponent = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <Link to="/">
        <img
          className={styles.logoTransparentForBlackBg}
          alt=""
          src="/logotransparent-for-black-bg-1-1@2x.png"
        />
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </Link>
      <div
        className={styles.textInputField}
      >
        <div className={styles.buttonFrame}>
          <div className={styles.aboutUs}>
            <Link to="/">
              <div className={styles.home}>Home</div>
            </Link>
          </div>
          <div className={[styles.aboutUs, styles.hover].join(" ")}>
            <Link to="/about">
              <div className={styles.aboutUs1}>About Us</div>
            </Link>
          </div>
          <div className={[styles.services, styles.hover].join(" ")}>
            <div className={styles.services1}>Services</div>
          </div>
          <div className={[styles.training, styles.hover].join(" ")} onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}>
            <Link to="/trainning">
              <div className={styles.training1}>Training</div>
            </Link>
            {isSubMenuOpen && (
              <div className={styles.subMenu}>
                <Link to="/trainning">
                  <div className={styles.subMenuItem}>Academy</div>
                </Link>
                <Link to="/trainning">
                  <div className={styles.subMenuItem}>Certifications</div>
                </Link>
                <Link to="/trainning">
                  <div className={styles.subMenuItem}>Live Training</div>
                </Link>
                {/* Add more submenu items as needed */}
              </div>
            )}
          </div>
          <div className={[styles.reviews, styles.hover].join(" ")}>
            <div className={styles.reviews1}>Reviews</div>
          </div>
          <div className={[styles.menu, styles.hover].join(" ")}>
            <div className={styles.reviewsAcademyTrainingAbout}>
              <div className={styles.menu1}>Contact</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GroupComponent;
