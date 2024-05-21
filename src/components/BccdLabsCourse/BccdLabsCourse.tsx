import { FunctionComponent } from "react";
import styles from "./BccdLabsCourse.module.css";
import Carousel from "../BccdlabsCourseCarousel/BccdlabsCourseCarousel";
const BccdLabsCourse: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className="row ">
            <div className="col-lg-6 col-md-6">
              <p className={styles.BcadLabs}>BCAD Labs</p>
              <p className={styles.SetupIn}>Setup Includes</p>
            </div>
            <div className="col-lg-6  col-md-6 d-flex justify-content-end align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-5">
            <div className="row col-lg-6 col-md-6 ">
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
                2 Customized Incident Response VMs(Windows + Linux)

                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Fully Configured Cuckoo Sandbox
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Memory Forensics VM-Orochi
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6">
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
                Jupyter Notebook VMs
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Wazuh SIEM
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Suricata - Network Detection
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Loads of Malware Samples (Binaries, Scripts, Email Header, MS Office Files)
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Deobfuscation Tools, CyberChef
                </h5>
              </div>
            </div>
          </div>

          
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Sysmon: Endpoint Perimeter/System Detection
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Threat Profiling using MITRE ATT&CK Navigator
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                MISP: Malware Information Sharing Platform
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Sample Collection (memory, triage, and disk images)
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Windows Forensics Investigation Case
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Linux Forensics Investigation Case
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Memory Forensics Investigation Case
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Network Forensics Investigation Case
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                USB Forensics Investigation Case
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Elastic SIEM
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Case Management Solution: TheHive
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Elastic EDR
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                SecOps Automation: Cortex
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                APT Attack Simulator
                </h5>
              </div>
            </div>
          </div>

          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                Evilginx Phishing Simulator
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                Code Deobfuscator
                </h5>
              </div>
            </div>
          </div>

          <div className="row mt-4 justify-content-between">
            <div className="row col-lg-6 col-md-6 ">
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
                AlienVault
                </h5>
              </div>
            </div>
            <div className="row col-lg-6 col-md-6 ">
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
                QRadar SIEM
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

export default BccdLabsCourse;
