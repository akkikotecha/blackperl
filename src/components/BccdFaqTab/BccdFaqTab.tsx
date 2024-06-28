import { FunctionComponent } from "react";
import styles from "./BccdFaqTab.module.css";
import Accordion from "react-bootstrap/Accordion";

const BccdFaqTab: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className={`${styles.row} mt-0 pt-0`}>
          <Accordion className={`col-lg-12 mt-0 pt-0 ${styles.paddingOff} paddOff`}>
  <Accordion.Item className="accorderPadding" eventKey="0">
    <Accordion.Header className={`ps-0`}>Is prior cybersecurity experience required?
</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Although basic cybersecurity knowledge is necessary, the course has been tailored for beginners.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="1">
    <Accordion.Header>How long will it take to complete?
    </Accordion.Header>
    <Accordion.Body className={styles.content_body}>
          <div className="row mt-0 justify-content-left pt-1">
            <div className="row col-lg-12 col-md-12 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-0 col-9">
                <h5 className={styles.title_flex}>
                Duration: 30 days. 
                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Mode of Delivery: Live Instructor Led. 

                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Duration: Each day Monday to Friday each 1.5 hours. Weekdays only (No Weekends class)

                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Time: 8:30AM to 10AM IST

                </h5>
              </div>
            </div>
            </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="2">
    <Accordion.Header>What will you learn?
    </Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    <div className="row mt-0 justify-content-left pt-1">
            <div className="row col-lg-12 col-md-12 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-0 col-9">
                <h5 className={styles.title_flex}>
                Covering AWS basics so you don't need to come with list of Pre-reqs.
                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Working with Cloud IAM, Complex Networking to secure Infra.


                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Working with Cloud Attack vectors from Offensive Security angle.


                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Working with Defending strategies to protect cloud workloads.


                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Working with Infrastructure as Code- Terraform and CloudFormation



                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Cloud Threat Protection, Incident Response and Forensics with SIEM.



                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Perform Investigation with Logs, Tools



                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Working with Cloud Posture Management- CSPM and Vulnerability Management.



                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-3">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 col-3`}
                style={{ width: "55px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-3 mt-2 pt-1 col-9">
                <h5 className={styles.title_flex}>
                Working with Kuberneters.



                </h5>
              </div>
            </div>
            </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="3">
    <Accordion.Header>WHY SHOULD YOU ENROLL? 
    </Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      
Engage in real scenarios, boost up your knowledge on Cloud Security. Cloud Security needed everywhere, ensuring career opportunities. Seasoned professionals impart knowledge, enhancing learning experience for Cloud Threats Stay updated with evolving cybersecurity tools, techniques. Cybersecurity jobs remain secure during economic fluctuations. Learn attack vectors for cloud, anticipate and mitigate risks. Master personal information protection on digital platforms. Certification adds significant value to professional credentials.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="4">
    <Accordion.Header>Is there any pre-requisite for this course/session?
    </Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Participants should be familiar with basic cybersecurity concepts. For hands-on sessions, a laptop with internet connectivity is essential. Virtual Box/VMWare needs to be installed in your own system. It is preferred to have own PC with admin credential. Do Not take this course on a company or Office provided PC. All other materials would be delivered during the session.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="5">
    <Accordion.Header>Will there be a video recording given?
    </Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Yes, there will be. The access will be given for 1 year.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="6">
    <Accordion.Header>How the certification will be done?
    </Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Once you complete the Live session, you will be given 3 projects which will be hands-on. Once you clear all the 3 projects and submit the report; you will be awarded with a course completion certificate. It won't be any MCQ!! You will be doing a real project and need to submit a report. Once you complete the project and submit it to us, you will get feedback within 1 business day from us and if you are not clearing it, you can reattempt.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="7">
    <Accordion.Header>What if I am not able to attend the live class? Will I be able to attempt the exam?
    </Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Yes. As you will be given1 year of video access, you can leverage it and write the assessment and submit the report for the certification.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


      
          </div>
        </div>
      </section>
    </>
  );
};

export default BccdFaqTab;
