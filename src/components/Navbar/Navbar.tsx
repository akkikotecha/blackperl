import { FunctionComponent, useState } from "react";
import styles from "./GroupComponent.module.css";
import { Link,useLocation } from "react-router-dom";


const GroupComponent: FunctionComponent = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isLiveTrainingSubMenuOpen, setIsSubMenuOpenClose] = useState(false);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    
        <>
    
    
        <div className={styles.topnav}>
          
      <a className={styles.active}><img
            className={styles.logoTransparentForBlackBg}
            alt=""
            src="/logotransparent-for-black-bg-1-1@2x.png" />
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png" /></a>
      
      <a className="icon" onClick={() => setShowMenu(!showMenu)}>
        <i className="fa fa-bars"></i>
      </a>

      
    </div>
    <div  className={`${styles.myLinks} ${styles.menuAnimation} ${showMenu ? styles.show : ''}`}>
    <Link to="/">
                <div className={location.pathname === '/' ? `${styles.home} ${styles.greenMenu}` : styles.home}>Home</div>
              </Link>
            
              <Link to="/about">
                <div className={location.pathname === '/about' ? `${styles.aboutUs1} ${styles.greenMenu}` : styles.aboutUs1}>About Us</div>
              </Link>
              <Link to="/about">
                <div className={location.pathname === '/Services' ? `${styles.aboutUs1} ${styles.greenMenu}` : styles.aboutUs1}>Services</div>
              </Link>
              <Link to="/Review"><div className={location.pathname === '/Review' ? `${styles.reviews1} ${styles.greenMenu}` : styles.reviews1}>Reviews</div></Link>

              <div className={location.pathname === '/GetInTouch' ? `mt-4 mb-4 ${styles.menu} ${styles.menuButton} ${styles.hover}` : `mt-4 ${styles.menu} ${styles.hover}`}>
              <Link to="/GetInTouch" className="mt-0 pt-0"><div className={styles.reviewsAcademyTrainingAbout}>
                <div className={styles.menu1}>Contact</div>
              </div></Link>
            </div>

      </div>
    
    <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <Link to="/">
          <img
            className={styles.logoTransparentForBlackBg}
            alt=""
            src="/logotransparent-for-black-bg-1-1@2x.png" />
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png" />
        </Link>
        <div
          className={styles.textInputField}
        >
          <div className={styles.buttonFrame}>
            <div className={styles.aboutUs}>
              <Link to="/">
                <div className={location.pathname === '/' ? `${styles.home} ${styles.greenMenu}` : styles.home}>Home</div>
              </Link>
            </div>
            <div className={[styles.aboutUs, styles.hover].join(" ")}>
              <Link to="/about">
                <div className={location.pathname === '/about' ? `${styles.aboutUs1} ${styles.greenMenu}` : styles.aboutUs1}>About Us</div>
              </Link>
            </div>
            <div className={[styles.services, styles.hover].join(" ")}>
              <div className={styles.services1}>Services</div>
            </div>
            <div className={[styles.training, styles.hover].join(" ")} onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}>
              <div className={location.pathname === '/LiveTrainning' || location.pathname === '/Certification' || location.pathname === '/BCAD' || location.pathname === '/BCCD' || location.pathname === '/BCDE' || location.pathname === '/TTIA' ? `${styles.training1} ${styles.greenMenu}` : styles.training1}>Training</div>

              {isSubMenuOpen && (
                <div className={styles.subMenu}>
                  <Link to="/LiveTrainning">
                    <div className={location.pathname === '/Academy' ? `${styles.subMenuItem} ${styles.greenMenu}` : styles.subMenuItem}>Academy</div>
                  </Link>
                  <Link to="/Certification">
                    <div className={location.pathname === '/Certification' ? `${styles.subMenuItem} ${styles.greenMenu}` : styles.subMenuItem}>Certifications</div>
                  </Link>
                  <div className={[styles.hover].join(" ")} onMouseEnter={() => setIsSubMenuOpenClose(true)}
                    onMouseLeave={() => setIsSubMenuOpenClose(false)}>
                    <Link to="/LiveTrainning">
                      <div className={location.pathname === '/LiveTrainning' || location.pathname === '/BCAD' || location.pathname === '/BCCD' || location.pathname === '/BCDE' || location.pathname === '/TTIA'  ? `${styles.subMenuItem} ${styles.paddingBottomSetting} ${styles.greenMenu}` : `${styles.subMenuItem} ${styles.paddingBottomSetting}`}>Live Training </div>
                    </Link>

                    {isLiveTrainingSubMenuOpen && (
                      <div className={styles.subInsubMenu}>
                        <Link to="/BCAD">
                          <div className={location.pathname === '/BCAD' ? `${styles.subMenuItem} ${styles.greenMenu}` : styles.subMenuItem}>BCAD</div>
                        </Link>
                        <Link to="/BCCD">
                          <div className={location.pathname === '/BCCD' ? `${styles.subMenuItem} ${styles.greenMenu}` : styles.subMenuItem}>BCCD</div>
                        </Link>
                        <Link to="/BCDE">
                          <div className={location.pathname === '/BCDE' ? `${styles.subMenuItem} ${styles.greenMenu}` : styles.subMenuItem}>BCDE</div>
                        </Link>
                        <Link to="/TTIA">
                          <div className={location.pathname === '/TTIA' ? `${styles.subMenuItem} ${styles.greenMenu}` : styles.subMenuItem}>TTIA</div>
                        </Link>
                      </div>
                    )}

                  </div>

                </div>

              )}
            </div>
            <div className={[styles.reviews, styles.hover].join(" ")}>
              <Link to="/Review"><div className={location.pathname === '/Review' ? `${styles.reviews1} ${styles.greenMenu}` : styles.reviews1}>Reviews</div></Link>
            </div>
            <div className={location.pathname === '/GetInTouch' ? `${styles.menu} ${styles.menuButton} ${styles.hover}` : `${styles.menu} ${styles.hover}`}>
              <Link to="/GetInTouch"><div className={styles.reviewsAcademyTrainingAbout}>
                <div className={styles.menu1}>Contact</div>
              </div></Link>
            </div>
          </div>
        </div>
      </header></>

  );
};

export default GroupComponent;
