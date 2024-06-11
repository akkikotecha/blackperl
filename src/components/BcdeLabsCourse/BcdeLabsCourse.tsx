import { FunctionComponent } from "react";
import styles from "./BcdeLabsCourse.module.css";
import Carousel from "../BcdelabsCourseCarousel/BcdelabsCourseCarousel";
const BcdeLabsCourse: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className="row ">
            <div className="col-lg-6 col-md-6">
              <p className={styles.BcadLabs}>BCDE Labs</p>
              {/* <p className={styles.SetupIn}>Setup Includes</p> */}
            </div>
            <div className="col-lg-6  col-md-6 d-flex justify-content-end align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-5">
          <p className={`${styles.SetupIn} mb-4`}>Introduction to Security Operations</p>
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
                SOC Requirement
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
                SOC Types
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
                SOC Roles &amp; Responsibilities
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
                First line of defense for SOC

                </h5>
              </div>
            </div>
          </div>

          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Detection Engineering Role</p>

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
                Detection Engineering requirement
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
                ATT&ampCK-D3FEND Fundamentals

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
                Touching the core: Threats, IoCs
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
                Types of detection logic
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
                Detection Engineering Pipeline
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Lab Setup Essentials
</p>

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
                Installation of VirtualBox
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
                Configuring Networking

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
                VM Snapshots and importance
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
                Digital Ocean setup
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
                Creating Droplet in Digital Ocean
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
                Setting up necessary OS
                </h5>
              </div>
            </div>
            
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>SIEM as first-line of defense
</p>

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
                SIEM Requirements
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
                SIEM in general
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
                SIEM vendors
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
                Generic SIEM purchasing factors
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>ELK Setup</p>

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
                Understanding ElasticSearch
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
                Working with YAML files
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
                Setting up Elastic instance in Cloud
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
                Installing Kibana
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
                Beats and Stash - FileBeat, MetricBeat, LogStash
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
                Rules in ELK
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
                Setting up connectors
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
                ELK queries
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
                Power of Visualisation via Kibana
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
                Building meaningful dashboards

                </h5>
              </div>
            </div>
            
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Elastic SIEM and Elastic Defend</p>

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
                Rules in ELK SIEM
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
                Types of Rules
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
                Rule configurations
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
                Integration of connectors for alerting
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
                Fleet Server
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
                Elastic Integrations
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
                Elastic Defend Integration
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
                Integration of log sources with Elastic Defend
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">

            </div>
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Wazuh - Open Source SIEM + EDR</p>

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
                Wazuh Architecture
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
                Installation of Wazuh
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
                Wazuh rules
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
                Adding Wazuh agent
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
                CIS controls or security hardening
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
                Wazuh Integrations
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
                Wazuh simple use-cases
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">

            </div>
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Generic Use-Cases</p>

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
                User Deletion within limited timespan
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
                Multiple user creation and deletion
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
                Clearing of Audit Logs
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
                ACL set on Admin Group Members
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
                Critical services stopped
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
                UAC Bypass
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
                Addition, modification or deletion of cron jobs
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
                Detecting changes in syslog
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
                Unix FTP Login access
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
                Multiple root login failures
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
                Failed logins with disabled accounts
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
                SSH brute-force
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
                Outbound traffic to suspicious regions
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
                Accessing malware associated IoCs.
                </h5>
              </div>
            </div>
           
            <div className="row col-lg-4 col-md-4 mt-3">

            </div>
           
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Adversary Emulation</p>

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
                Emulation of Red Team
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
                Creating Adversary Emulation Plans
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
                Executing Predefined & custom emulations
                </h5>
              </div>
            </div>
           
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>Cloud Based Use-Cases</p>

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
                Resource Injection in CloudFormation template
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
                VPC traffic monitoring abuse
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
                Phishing users with MFA
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
                Abusing IAM for PrivEsc
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
                CSV Injection
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
                AWS shadow admins
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
                PrivEsc via Cloud Functions
                </h5>
              </div>
            </div>
          
           
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>DE Essentials</p>

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
                Building effective detections
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
                Sigma Rule converter
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
                Open Cybersecurity Schema Framework
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-2">
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
                Exploring Matano
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-2">
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
                MITRE D3FEND
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
                MaGMA UC Framework
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
                Concept of PCDA Multiloop
                </h5>
              </div>
            </div>
          
           
           
          </div>
          <div className="row mt-4 justify-content-between pt-4">

          <p className={`${styles.SetupIn} mb-4`}>GitHub Actions</p>

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
                Overview and DE use-case
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
                Detection as Code
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
                TOML concepts & Syncing with Elastic
                </h5>
              </div>
            </div>           
          </div>
          
        </div>
      </section>
     
    </>
  );
};

export default BcdeLabsCourse;
