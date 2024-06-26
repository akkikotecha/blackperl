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
              <p className={styles.BcadLabs}>BPCD Labs</p>
              {/* <p className={styles.SetupIn}>Setup Includes</p> */}
            </div>
            <div className="col-lg-6  col-md-6 d-flex justify-content-end align-items-start">
              <button className={styles.am}>
                <b className={styles.contactUs}>VIEW ALL</b>
                <img className={styles.amChild} alt="" src="/group-457.svg" />
              </button>
            </div>
          </div>
          <div className="row mt-4 justify-content-left pt-5">
            <p className={`${styles.SetupIn} mb-4`}> DAY 1 </p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Traditional vs Virtualization vs Containerization
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Understanding differences between On-premises and Cloud
                  architecture.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Understanding AWS Regions & Availability Zones.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Understanding IP Addressing & Subnetting.
                </h5>
              </div>
            </div>
            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: LAB ON DOCKER{" "}
            </p>
          </div>

          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 2 & 3 </p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Create an AWS Account.</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Install Putty for Windows, Exploring the AWS Account and
                  Services Layer.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Exploring the AWS Physical and Networking Layer.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Essential CSA Terminology</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Shared Security Responsibility Model and Attributes.
                </h5>
              </div>
            </div>
            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: LAB ON ACCOUNT SETUP
            </p>
          </div>

          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 4 & 5</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>What is VPC Peering?</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Single & Multi-Region VPC Peering.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Configure Intra VPC and Inter-VPC Peering.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Real time use cases of AWS VPC Peering.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Problems with VPC Peering and solutions.
                </h5>
              </div>
            </div>
            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: LAB ON VPC SET UP
            </p>
          </div>
          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 6 & 7</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Deep Dive with IAM- Identify and Access Management.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Manage Identities securely with IAM.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Deep Dive with STS</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Activity: Use IAM to Create a Group, User, and Role.
                  Understand different types of Policies and Security Best
                  Practice
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: IAM POLICY EVALUATION LAB
            </p>
          </div>
          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 8 & 9</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  I AM Exploitation using pacu, scout suite.
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: IAM EXPLOITATION LAB AND CTF
            </p>
          </div>

          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 10 & 11</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>S3 Essentials</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>S3 Components</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>S3 Feature</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Creating an S3 Object</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Managing S3 Buckets</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>S3 Object Version Control</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  S3 Cross-Region Replication
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  S3 Object Lifecycle Management
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  S3 Activity: Create Your Own S3 Bucket and Object
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: S3 EXPLOITATION LAB AND CTF
            </p>
          </div>

          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 12 & 13</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Design and Deploy Virtual Private Cloud.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Create Subnets, Internet gateway, Routing, Security Groups and
                  deploy
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  EC2 machine with Key Pair. EC2 EBS Volumes Types
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Actity: Launch Instances</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  EC2 Security Group,Launch using bootstrap script, EBS, Packer
                  Ami creation
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  What is Network Address Translation?
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: AMI AUTOMATION USING PACKER, EC2 CREATION FOR WINDOWS ,
              LINUX ALONG WITH BOOTSTRAP
            </p>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Configuring a NAT Gateway.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Securing inbound connectivity with NAT Gateway.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  How to monitor & secure VPC traffic? What is a Security
                  Group(SG)?
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  What is Network Access Control List (NACL)?
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Differentiate SG vs NACL?</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Testing Security Group & NACL Introduction to Application &
                  Network Load Balancer.
                </h5>
              </div>
            </div>
            <p className={`${styles.SetupIn} mb-4 mt-3`}>
              {" "}
              PRACTICAL: LAB ON NAT GW
            </p>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Difference between Targets Groups and Load Balancer.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Deploy and Configure Network Load Balancer and perform load
                  balancing.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Simulate Network Load Balancing Scenarios.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Deploy and configure Application Load Balancing.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Simulate Path-Based load balancing using multi-target groups.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  SSL Certificate configuration using AWS Certificate Manager
                  and 3rd Party Certificate Authorities.
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Integrating NLB and ALB with Route53 Zones
                </h5>
              </div>
            </div>
            <p className={`${styles.SetupIn} mb-4 mt-3`}>
              {" "}
              PRACTICAL: LAB ON LOAD BALANCER AND ROUTE 53(WEB SITE CREATION AND
              DNS MAPPING WITH LB)
            </p>
          </div>

          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 14 & 15 </p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Introduction Cloudwatch, Dashboards, Alarms
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Cloud Watch Logs and Schedules with Lambda
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Infra as a Code(IaaC) with Cloudformation and version with
                  GitHub
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>GitOps as Principals</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  AWS AP & Resource audit with Cloud Trial & AWS Config.{" "}
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Working with Trusted Advisor, Service Catalog, License Manager
                  & Personal Health Dashboard.{" "}
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: LAB ON SENDING CLOUD WATCH LOGS TO SQS
            </p>
          </div>
          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 16 & 17</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Working with AWS Inspector to identify overly permissive
                  workloads
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Working with Macie, DDoS Protection and Guard Duty-
                  Investigate Alarms and Incident Response
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: VULNERABILITY MANAGEMENT & THREAT DETECTION LAB
            </p>
          </div>
          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 18 & 19</p>
            <p className={`${styles.SetupIn} mb-4`}> SOC:</p>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Hierarchy</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Roles and Responsibilities
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>SOC Models</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>SOC Maturity Model</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>SOC WORKFLOW</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>SIEM</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Collection Methods</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Architecture</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>IR Process</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Threat Intelligence</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>IOC and IOA</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Types of CTI</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Pyramid of Pain</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>CTI Lifecycle</h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}> ELK:</p>

            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>ELK Architecture</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>ELK components deployment</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Log source onboarding Linux and windows
                </h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>Building Dashboards</h5>
              </div>
            </div>
            <div className="row col-lg-4 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Basics of KQL Investigation of alerts
                </h5>
              </div>
            </div>
            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: ELK LAB SET UP FOR CLOUD LOG MONITORING
            </p>
          </div>

          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}> DAY 20 & 21</p>
            <div className="row col-lg-6 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Writing Cloud Security use case for threat detection
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: ELK SECURITY
            </p>
          </div>
          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}>DAY 22 & 23</p>
            <div className="row col-lg-6 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Cloud security posture management - CSPM
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: LAB FOR CSPM
            </p>
          </div>
          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}>DAY 24</p>
            <div className="row col-lg-6 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Infrastructure as Code using Terraform, CloudFormation
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: SAMPLE SCRIPTS FOR DEPLOYMENT
            </p>
          </div>
          <div className="row mt-4 justify-content-left pt-4">
            <p className={`${styles.SetupIn} mb-4`}>DAY 25</p>
            <div className="row col-lg-6 col-md-4 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={styles.title_flex}>
                  Containerization using Docker, Kubernetes
                </h5>
              </div>
            </div>

            <p className={`${styles.SetupIn} mb-4 mt-4`}>
              {" "}
              PRACTICAL: CLUSTERCREATION WITH NODES AND PODS
            </p>
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
