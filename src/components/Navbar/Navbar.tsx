import { FunctionComponent, useState } from "react";
import styles from "./GroupComponent.module.css";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const GroupComponent: FunctionComponent = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);
  const [isLiveTrainingSubMenuOpen, setIsSubMenuOpenClose] = useState(false);
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu,setSubShowMenu] = useState(false);
  //
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    // sessionStorage.setItem("HomeModal", "false");
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={styles.topnav}>
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
        <a className="icon" onClick={() => setShowMenu(!showMenu)}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div
        className={`${styles.myLinks} ${styles.menuAnimation} ${
          showMenu ? styles.show : ""
        }`}
      >
        <Link to="/">
          <div
            className={
              location.pathname === "/"
                ? `${styles.home} ${styles.borderBottom} ${styles.greenMenu}`
                : `${styles.home}  ${styles.borderBottom}`
            }
          >
            Home
          </div>
        </Link>

        <Link to="/about">
          <div
            className={
              location.pathname === "/about"
                ? `${styles.aboutUs1} ${styles.borderBottom} ${styles.greenMenu}`
                : `${styles.aboutUs1}  ${styles.borderBottom}`
            }
          >
            About Us
          </div>
        </Link>
        <Link to="/Services">
          <div
            className={
              location.pathname === "/Services"
                ? `${styles.aboutUs1} ${styles.borderBottom} ${styles.greenMenu}`
                : `${styles.aboutUs1}  ${styles.borderBottom}`
            }
          >
            Services
          </div>
        </Link>
        <div
          className={[styles.aboutUs1, styles.hover].join(" ")}
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        >
          <div
            className={
              location.pathname === "/LiveTrainning" ||
              location.pathname === "/Certification" ||
              location.pathname === "/BCAD" ||
              location.pathname === "/BCCD" ||
              location.pathname === "/BCDE" ||
              location.pathname === "/TTIA"
                ? `${styles.aboutUs1} ${styles.borderBottom} ${styles.greenMenu}  pt-4`
                : `${styles.aboutUs1}  ${styles.borderBottom}  pt-4`
            }

            onClick={() => setSubShowMenu(!showSubMenu)}
          >

<i className="fa fa-sharp fa-light fa-caret-right"></i> Training
          </div>

          {showSubMenu && (
            <div
              className={`${styles.myLinks} ${styles.menuAnimation} ${
                showMenu ? `${styles.show} mb-0 pb-0` : ""
              }`}
            >
              
              <a
                    href="https://academy.blackperldfir.com/learn"
                    target="_blank"
                  ><div className={`${styles.reviews1} ${styles.borderBottom}`}
                >
                   Academy
                </div>
              </a>
              <Link to="/Certification">
          <div
            className={
              location.pathname === "/Certification"
                ? `${styles.reviews1} ${styles.borderBottom} ${styles.greenMenu}`
                : `${styles.reviews1} ${styles.borderBottom}`
            }
          >
             Certification
          </div>
        </Link>
              <div
                className={[styles.aboutUs1, styles.hover].join(" ")}
                onClick={() => setIsSubSubMenuOpen(!isSubSubMenuOpen)}
              >
                <div
                  className={
                    location.pathname === "/LiveTrainning" ||
                    location.pathname === "/BCAD" ||
                    location.pathname === "/BCCD" ||
                    location.pathname === "/BCDE" ||
                    location.pathname === "/TTIA"
                      ? `${styles.aboutUs1} ${styles.borderBottom} ${styles.greenMenu}   pt-4`
                      : `${styles.aboutUs1}   ${styles.borderBottom}  pt-4`
                  }
                >
                  <i className="fa fa-sharp fa-light fa-caret-right"></i> Live Training
                </div>

                {isSubSubMenuOpen && (
                  <div
                    className={`${styles.myLinks} ${styles.menuAnimation} ${
                      showMenu ? `${styles.show} mb-0 pb-2` : ""
                    }`}
                  >
                    
                    <Link to="/BCAD">
                <div
                  className={
                    location.pathname === "/BCAD"
                      ? `${styles.reviews1} ${styles.borderBottom} ${styles.greenMenu}`
                      : `${styles.reviews1} ${styles.borderBottom}`
                  }
                >
                  BCAD
                </div>
              </Link>
                    {/* <Link to="/BCCD"> */}
                <div
                  className={
                    `${styles.reviews1} ${styles.borderBottom} text-white pt-4`
                  }
                  onClick={handleShow}
                >
                   BCCD
                </div>
              {/* </Link> */}
                    <Link to="/BCDE">
                <div
                  className={
                    location.pathname === "/BCDE"
                      ? `${styles.reviews1} ${styles.borderBottom} ${styles.greenMenu}`
                      : `${styles.reviews1} ${styles.borderBottom}`
                  }
                >
                   BCDE
                </div>
              </Link>
                    <Link to="/TTIA">
                <div
                  className={
                    location.pathname === "/TTIA"
                      ? `${styles.reviews1} ${styles.borderBottom} ${styles.greenMenu}`
                      : `${styles.reviews1} ${styles.borderBottom}`
                  }
                >
                    TTIA
                </div>
              </Link>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
        <Link to="/Review">
          <div
            className={
              location.pathname === "/Review"
                ? `${styles.reviews1} ${styles.greenMenu}`
                : `${styles.reviews1} ${styles.borderBottom}`
            }
          >
            Reviews
          </div>
        </Link>

        <div
          className={
            location.pathname === "/GetInTouch"
              ? `mt-4 mb-4  ${styles.menu} ${styles.menuButton} ${styles.hover}`
              : `mt-4 mb-4 ${styles.menu} ${styles.hover}`
          }
        >
          <Link to="/GetInTouch" className="mt-0 pt-0">
            <div className={styles.reviewsAcademyTrainingAbout}>
              <div className={styles.menu1}>Contact</div>
            </div>
          </Link>
        </div>
      </div>

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
        <div className={styles.textInputField}>
          <div className={styles.buttonFrame}>
            <div className={styles.aboutUs}>
              <Link to="/">
                <div
                  className={
                    location.pathname === "/"
                      ? `${styles.home} ${styles.greenMenu}`
                      : styles.home
                  }
                >
                  Home
                </div>
              </Link>
            </div>
            <div className={[styles.aboutUs, styles.hover].join(" ")}>
              <Link to="/about">
                <div
                  className={
                    location.pathname === "/about"
                      ? `${styles.aboutUs1} ${styles.greenMenu}`
                      : styles.aboutUs1
                  }
                >
                  About Us
                </div>
              </Link>
            </div>
            <Link to="/Services"><div className={[styles.services, styles.hover].join(" ")}>
              <div className={styles.services1}>Services</div>
            </div></Link>
            <div
              className={[styles.training, styles.hover].join(" ")}
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
            >
              <div
                className={
                  location.pathname === "/LiveTrainning" ||
                  location.pathname === "/Certification" ||
                  location.pathname === "/BCAD" ||
                  location.pathname === "/BCCD" ||
                  location.pathname === "/BCDE" ||
                  location.pathname === "/TTIA"
                    ? `${styles.training1} ${styles.greenMenu}`
                    : styles.training1
                }
              >
                Training
              </div>

              {isSubMenuOpen && (
                <div className={styles.subMenu}>
                  <a
                    href="https://academy.blackperldfir.com/learn"
                    target="_blank"
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      className={
                        location.pathname === "/Academy"
                          ? `${styles.subMenuItem} ${styles.greenMenu}`
                          : styles.subMenuItem
                      }
                    >
                      Academy
                    </div>
                  </a>
                  <Link to="/Certification">
                    <div
                      className={
                        location.pathname === "/Certification"
                          ? `${styles.subMenuItem} ${styles.greenMenu}`
                          : styles.subMenuItem
                      }
                    >
                      Certifications
                    </div>
                  </Link>
                  <div
                    className={[styles.hover].join(" ")}
                    onMouseEnter={() => setIsSubMenuOpenClose(true)}
                    onMouseLeave={() => setIsSubMenuOpenClose(false)}
                  >
                    <Link to="/LiveTrainning">
                      <div
                        className={
                          location.pathname === "/LiveTrainning" ||
                          location.pathname === "/BCAD" ||
                          location.pathname === "/BCDE" ||
                          location.pathname === "/TTIA"
                            ? `${styles.subMenuItem} ${styles.paddingBottomSetting} ${styles.greenMenu}`
                            : `${styles.subMenuItem} ${styles.paddingBottomSetting}`
                        }
                      >
                        Live Training{" "}
                      </div>
                    </Link>

                    {isLiveTrainingSubMenuOpen && (
                      <div className={styles.subInsubMenu}>
                        <Link to="/BCAD">
                          <div
                            className={
                              location.pathname === "/BCAD"
                                ? `${styles.subMenuItem} ${styles.greenMenu}`
                                : styles.subMenuItem
                            }
                          >
                            BCAD
                          </div>
                        </Link>

                        <div
                          style={{ cursor: "pointer", color: "white" }}
                          className={
                            location.pathname === "/BCCD"
                              ? `${styles.subMenuItem}`
                              : styles.subMenuItem
                          }
                          onClick={handleShow}
                        >
                          BCCD
                        </div>

                        <Link to="/BCDE">
                          <div
                            className={
                              location.pathname === "/BCDE"
                                ? `${styles.subMenuItem} ${styles.greenMenu}`
                                : styles.subMenuItem
                            }
                          >
                            BCDE
                          </div>
                        </Link>
                        <Link to="/TTIA">
                          <div
                            className={
                              location.pathname === "/TTIA"
                                ? `${styles.subMenuItem} ${styles.greenMenu}`
                                : styles.subMenuItem
                            }
                          >
                            TTIA
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className={[styles.reviews, styles.hover].join(" ")}>
              <Link to="/Review">
                <div
                  className={
                    location.pathname === "/Review"
                      ? `${styles.reviews1} ${styles.greenMenu}`
                      : styles.reviews1
                  }
                >
                  Reviews
                </div>
              </Link>
            </div>
            <div
              className={
                location.pathname === "/GetInTouch"
                  ? `${styles.menu} ${styles.menuButton} ${styles.hover}`
                  : `${styles.menu} ${styles.hover}`
              }
            >
              <Link to="/GetInTouch">
                <div className={styles.reviewsAcademyTrainingAbout}>
                  <div className={styles.menu1}>Contact</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.positionFix}></Modal.Header>
        <Link to="/BCAD">
          <Modal.Body className={styles.ModalCurv}>
            {/* <h4>JOIN OUR</h4> */}
            <h1 className={styles.data_box}>
              <p className={styles.title_text}>BCCD</p>
              <p className={styles.title_text_2}>COMING SOON!</p>
            </h1>
          </Modal.Body>
        </Link>
      </Modal>
    </>
  );
};

export default GroupComponent;
