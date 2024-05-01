import { FunctionComponent } from "react";
import styles from "./LabsCourse.module.css";
import Carousel from "../labsCourseCarousel/labsCourseCarousel";
const LabsCourse: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className="row ">
            <div className="col-lg-6">
              <p className={styles.BcadLabs}>BCAD Labs</p>
              <p className={styles.SetupIn}>Setup Includes</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div>
          </div>

          <div className="row mt-5 justify-content-between pt-5">
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                  Sysmon: Endpoint Perimeter/System Detection
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                  Threat Profiling using MITRE ATT&CK Navigator
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-between">
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                MISP: Malware Information Sharing Platform
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                Sample Collection (memory, triage, and disk images)
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-between">
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                Windows Forensics Investigation Case
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                Linux Forensics Investigation Case
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-between">
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                Memory Forensics Investigation Case
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 ">
              <div
                className={`col-lg-2 width-set pe-0`}
                style={{ width: "55px" }}
              >
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 px-0">
                <h5 className={styles.title_flex}>
                Network Forensics Investigation Case
                </h5>
              </div>
            </div>
          </div>

          
          
        </div>
      </section>
      <div className="container-fluid mt-0 pt-0">
        <div className="row">
          <div className="col-lg-12">
          <Carousel />

          </div>
        </div>
      </div>
    </>
  );
};

export default LabsCourse;
