import { FunctionComponent } from "react";
import styles from "./TiteLabsCourse.module.css";
// import Carousel from "../TitelabsCourseCarousel/TitelabsCourseCarousel";
const TiteLabsCourse: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes} ${styles.desktopShow} pb-5`}>
        <div className={`container ${styles.paddingView} `}>
          <div className="row ">
            <div className="col-lg-6 col-md-6">
              <p className={styles.BcadLabs}>TTIA LABS</p>
             
            </div>
            <div className="col-lg-6 d-none  col-md-6 d-flex justify-content-end align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-5">
          <p className={`${styles.SetupIn} mb-4`}>LABS/COURSE</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                What is threat intelligence?

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Why is it needed?
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Goals of Threat Intelligence

                </h5>
              </div>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Know Your Terminologies</p>

            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                APT/threat group or actor/fin/hacktivist

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Attack Vector
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Dark web/deep web/surface web

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Tactics, Techniques, and Procedures (TTP)

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Indicators of Compromise (IOC) and Indicators of Attack (IOA)
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                TLP & Source Rating
                </h5>
              </div>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-4">

            <p className={`${styles.SetupIn} mb-4`}>Different Type of Threat Intelligence</p>

              <div className="row col-lg-3 col-md-3 ">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0">
                  <h5 className={styles.title_flex}>
                  Strategic

                  </h5>
                </div>
              </div>
              <div className="row col-lg-3 col-md-3 ">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0">
                  <h5 className={styles.title_flex}>
                  Tactical

                  </h5>
                </div>
              </div>
              <div className="row col-lg-3 col-md-3 ">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0">
                  <h5 className={styles.title_flex}>
                  Operational

                  </h5>
                </div>
              </div>
              <div className="row col-lg-3 col-md-3 mt-3">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0">
                  <h5 className={styles.title_flex}>
                  Technical

                  </h5>
                </div>
              </div>

            </div>

            <div className="row mt-5 pt-5">
            <div className="col-lg-12 col-md-12">
              <p className={styles.BcadLabsText}>Know about Threat Intelligence <br/>Lifecycle</p>
             
            </div>
            {/* <div className="col-lg-6  col-md-6 d-flex justify-content-end align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div> */}
          </div>

          <div className="row mt-4 justify-content-between pt-5">
          <p className={`${styles.SetupIn} mb-4`}>Dark Web</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                What is Dark Web
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                How to Access Dark Web
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Hands on Dark Web
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Deep dive into Frameworks</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                MITRE ATT&CK
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Cyber Kill Chain
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Diamond Model
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Threat Intelligence Data Collection</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                OSINT (Open Source Intelligence)
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                HUMINT (Human Intelligence)
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                CCI
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                SOCINT (Social Media Intelligence)
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Dorking
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                IOC and IOA

                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Threat Intelligence Hands on via Tools</p>
            <div className="row col-lg-2 col-md-2 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-8 col-md-8 px-0">
                <h5 className={styles.title_flex}>
                Virustotal
               </h5>
              </div>
            </div>
            <div className="row col-lg-2 col-md-2 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-8 col-md-8 px-0">
                <h5 className={styles.title_flex}>
                URLSCAN
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0">
                <h5 className={styles.title_flex}>
                Threat Abuse/Abuse bazaar
                </h5>
              </div>
            </div>
            <div className="row col-lg-3 col-md-3 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0">
                <h5 className={styles.title_flex}>
                BellingCat
               </h5>
              </div>
            </div>
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Producing Intelligence</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                MISP (Malware Information Sharing Platform)
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                Creating YARA
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0">
                <h5 className={styles.title_flex}>
                Leveraging STIX/TAXII
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0">
                <h5 className={styles.title_flex}>
                Dark Web Intelligence Gathering

               </h5>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className={` ${styles.contentBoxes} ${styles.mobileShow}` }>
        <div className={`container  `}>
          <div className="row ">
            <div className="col-lg-8 col-md-6">
              <p className={styles.BcadLabs}>TTIA Labs</p>
              {/* <p className={styles.SetupIn}>Setup Includes</p> */}
            </div>
            <div className="col-lg-4 d-none col-md-6 d-flex justify-content-start mt-0 align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-5">
          <p className={`${styles.SetupIn} mb-4`}>LABS/COURSE</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                What is threat intelligence?

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Why is it needed?
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Goals of Threat Intelligence

                </h5>
              </div>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Know Your Terminologies</p>

            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                APT/threat group or actor/fin/hacktivist

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Attack Vector
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Dark web/deep web/surface web

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Tactics, Techniques, and Procedures (TTP)

                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Indicators of Compromise (IOC) and Indicators of Attack (IOA)
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                TLP & Source Rating
                </h5>
              </div>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-4">

            <p className={`${styles.SetupIn} mb-4`}>Different Type of Threat Intelligence</p>

              <div className="row col-lg-3 col-md-3 mt-3">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0 col-10">
                  <h5 className={styles.title_flex}>
                  Strategic

                  </h5>
                </div>
              </div>
              <div className="row col-lg-3 col-md-3 mt-3">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0 col-10">
                  <h5 className={styles.title_flex}>
                  Tactical

                  </h5>
                </div>
              </div>
              <div className="row col-lg-3 col-md-3 mt-3">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0 col-10">
                  <h5 className={styles.title_flex}>
                  Operational

                  </h5>
                </div>
              </div>
              <div className="row col-lg-3 col-md-3 mt-3">
                <div
                  className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                  style={{ width: "55px" }}
                >
                  <img
                    className={styles.float_img}
                    src="../../../about/right.png"
                  />
                </div>
                <div className="col-lg-9 col-md-9 px-0 col-10">
                  <h5 className={styles.title_flex}>
                  Technical

                  </h5>
                </div>
              </div>

            </div>

            <div className="row mt-5 pt-4">
            <div className="col-lg-12 col-md-12">
              <p className={styles.BcadLabsText}>Know about Threat Intelligence <br/>Lifecycle</p>
             
            </div>
            {/* <div className="col-lg-6  col-md-6 d-flex justify-content-end align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div> */}
          </div>

          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Dark Web</p>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                What is Dark Web
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                How to Access Dark Web
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Hands on Dark Web
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Deep dive into Frameworks</p>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                MITRE ATT&CK
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Cyber Kill Chain
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Diamond Model
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Threat Intelligence Data Collection</p>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                OSINT (Open Source Intelligence)
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                HUMINT (Human Intelligence)
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                CCI
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                SOCINT (Social Media Intelligence)
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Dorking
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                IOC and IOA

                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Threat Intelligence Hands on via Tools</p>
            <div className="row col-lg-2 col-md-2 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-8 col-md-8 px-0 col-10">
                <h5 className={styles.title_flex}>
                Virustotal
               </h5>
              </div>
            </div>
            <div className="row col-lg-2 col-md-2 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-8 col-md-8 px-0 col-10">
                <h5 className={styles.title_flex}>
                URLSCAN
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0 col-10">
                <h5 className={styles.title_flex}>
                Threat Abuse/Abuse bazaar
                </h5>
              </div>
            </div>
            <div className="row col-lg-3 col-md-3 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0 col-10">
                <h5 className={styles.title_flex}>
                BellingCat
               </h5>
              </div>
            </div>
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">
          <p className={`${styles.SetupIn} mb-4`}>Producing Intelligence</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                MISP (Malware Information Sharing Platform)
               </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0 col-10">
                <h5 className={styles.title_flex}>
                Creating YARA
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0 col-10">
                <h5 className={styles.title_flex}>
                Leveraging STIX/TAXII
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-2`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-9 col-md-9 px-0 col-10">
                <h5 className={styles.title_flex}>
                Dark Web Intelligence Gathering

               </h5>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      {/* <div className="container-fluid mt-0 pt-0">
        <div className="row">
          <div className="col-lg-12">
          <Carousel />

          </div>
        </div>
      </div> */}
    </>
  );
};

export default TiteLabsCourse;
