import { FunctionComponent } from "react";
import styles from "./BcdeCourseSummary.module.css";
import Accordion from "react-bootstrap/Accordion";
import Relation from "../Relations/Relation";

import certificate_1 from "../../../public/training/bcde_side.png";
import certificate_2 from "../../../public/training/BCDECERTIFICATE.png";

const BcdeCourseSummary: FunctionComponent = () => {
  return (
    <>
      <section className={styles.span_disc}>
        <p className={styles.p_tags}>
          BlackPerl Certified Detection Engineering (BCDE) is a live
          instructor-led course designed to provide participants with practical
          skills and knowledge in the field of security operations and detection
          engineering. This course covers essential topics ranging from security
          operations center (SOC) requirements to advanced detection techniques
          using industry-standard tools like SIEM, ELK, and Wazuh. Participants
          will gain hands-on experience through lab exercises and real-world use
          cases.
        </p>
        <p className={styles.p_tags}>
          Key aspects of Detection Engineering include:
          <br />
          <br />
          The course offers a structured approach to learning, starting with
          foundational topics such as SOC requirements, types, and roles, and
          gradually progressing to more advanced areas like detection
          engineering, SIEM setup, ELK stack configuration, and cloud-based use
          cases. By following a systematic curriculum, participants can gain a
          holistic understanding of the entire detection engineering process,
          from initial setup to advanced threat detection strategies.
          <br />
          <br />
          Additionally, the course emphasizes practical skills development
          through lab exercises and real-world use cases. Participants will
          learn essential skills such as lab setup using VirtualBox and Digital
          Ocean, configuring networking, setting up SIEM and ELK instances,
          creating rules and connectors, and conducting adversary emulation
          exercises. This hands-on approach enables participants to apply
          theoretical knowledge to practical scenarios, enhancing their
          proficiency in detection engineering.
          <br />
          <br />
          Moreover, the course covers a wide range of topics relevant to modern
          cybersecurity challenges, including threat intelligence, indicators of
          compromise (IoCs), detection logic, log analysis, and visualization
          techniques. Participants will also explore emerging trends and
          technologies in the cybersecurity landscape, such as open-source SIEM
          solutions like Wazuh and cloud-based security monitoring.
          <br />
          <br />
          Overall, the key aspect of the "BCDE - BlackPerl Certified Detection
          Engineering" course lies in its comprehensive curriculum, hands-on
          learning approach, and focus on practical skills development, enabling
          participants to become proficient in security operations and detection
          engineering roles in real-world environments.
        </p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is this training for?</Accordion.Header>
            <Accordion.Body>
              <div className={styles.row}>
                <div className="row col-lg-12">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      Ideal for cybersecurity enthusiasts and researchers,
                      analysts, IT administrators
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      Any individual interested in learning more about cyber
                      threats.
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      This course is designed for both beginners and
                      intermediate-level attendees who want to learn practical
                      threat intelligence skills.
                    </h5>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Prerequisites</Accordion.Header>
            <Accordion.Body>
              <div className={styles.row}>
                <div className="row col-lg-12">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      Participants should be familiar with basic cybersecurity
                      concepts.
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1  col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-11 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      For hands-on sessions, a laptop with internet connectivity
                      is essential.
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1  col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>Virtual Box/VMWare</h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1  col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-11 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      All other materials would be delivered during the session
                    </h5>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How this can be beneficial for students?
            </Accordion.Header>
            <Accordion.Body>
              <p className={`${styles.p_tags} mt-0 pt-0`}>
                A detection engineering course offers students invaluable skills
                and knowledge essential for thriving in the cybersecurity
                landscape. By delving into threat detection techniques,
                understanding attack vectors, and gaining hands-on experience
                with industry-standard tools, students develop critical
                thinking, analytical abilities, and practical expertise.
                Moreover, completion of such a course often leads to industry
                certifications, enhancing employability. Equipped with these
                skills, students can pursue diverse career paths in
                cybersecurity, contributing to the protection of organizations
                against cyber threats and bolstering their own professional
                growth.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What you will get from the Curriculum
            </Accordion.Header>
            <Accordion.Body>
              <div className={styles.row}>
                <div className="row col-lg-12">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      15 days Cloud Lab Access
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}
                  >
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      1 month of recording access (If you need extended
                      recording access you can repurchase it)
                    </h5>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        
        </Accordion>
      </section>

      <section className={` ${styles.contentBoxes}`}>
        <div className={styles.frameParent}>
          <b className={styles.learner}>Reviews</b>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>BCDE Course</p>
            <p className={styles.areTelling}>Reviews</p>
          </b>
        </div>
      </section>
      <Relation />

      <section className={` ${styles.contentBoxes} ${styles.contentBoxesNew}`}>
        <div className={styles.frameParent}>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>Get Certified</p>
            <p className={`${styles.p_tags_certificate} mb-5`}>
              Once you complete the 4 days Live session, you will be given a
              course assessment which will be hands-on. Once you clear the
              assessment and submit the report with a 70% score; you will be
              awarded with a course completion certificate. It won't be any
              MCQ!! You will be doing real work and need to submit a report. And
              you will have 3 attempts to clear the assessment. Once you submit
              the report, you will get feedback within 1 business day from us
              and if you are not clearing it, you can reattempt.
              <br />
              <br />
              Since you will have 30 days of access of the recorded session; you
              should complete the assessment within this time frame.
              <br />
              <br />
            </p>
          </b>
        </div>
      </section>
      <div className={`${styles.span_disc} ${styles.span_disc_mobile}`}>
        <div className="row mt-5 mb-5 pb-5 pt-5">
          <div className="col-lg-9 px-0 col-md-9">
            <img src={certificate_1} className={styles.certificateWidthMain} />
          </div>
          <div className={`col-lg-3 col-md-3 ${styles.paddingRightOff}`}>
            <img src={certificate_2} className={styles.certificateWidth} />
            <img
              src={certificate_2}
              className={`mt-4 ${styles.certificateWidth}`}
            />
            <img
              src={certificate_2}
              className={`mt-4 ${styles.certificateWidth}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BcdeCourseSummary;
