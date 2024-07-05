import { FunctionComponent } from "react";
import styles from "./BccdCourseSummary.module.css";
import Accordion from "react-bootstrap/Accordion";
// import Relation from "../Relations/Relation";

import certificate_1 from "../../../public/training/pcd_main.png";
import certificate_2 from "../../../public/training/pcd_side.png";

const CourseSummary: FunctionComponent = () => {
  return (
    <>
      <section className={styles.span_disc}>
        <p className={styles.p_tags}>
          This BlackPerl Certified, Practical Cloud Defender (PCD) program is
          designed to equip you with the essential skills and knowledge to
          secure cloud environments. Through a blend of theory and hands-on
          labs, you'll gain expertise in cloud security fundamentals, threat
          detection, incident response, and more.The BlackPerl Certified,
          Practical Cloud Defender (PCD) program equips you with the skills to
          secure cloud environments. Through a blend of theory and hands-on
          labs, you'll master cloud security fundamentals, threat detection,
          incident response, and more. This 30-day, instructor-led program
          prepares you for a successful career in cloud security
        </p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is this training for?</Accordion.Header>
            <Accordion.Body>
              <div className={styles.row}>
                <p className={`${styles.p_tags} mt-0 pt-0 `}>
                  The course is designed from beginners to intermediate level
                  who wants to enhance their skill in Cloud Security.
                  <br />
                  <br />
                  Professionals focus on securing cloud environments and
                  ensuring compliance with security standards like <br />
                  <br />
                </p>

                <div className="row col-lg-12">
                  <div
                    className={`col-lg-1 col-md-1 width-set col-3 pe-0`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      Security (SOC) analysts and Blue Teams
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      Cloud Architects and Engineers
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      DevOps and DevSecOps Engineers
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      IT and System Administrators
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      Compliance Officers and Risk Managers
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      Digital forensic and incident response (DFIR)
                      professionals
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>Aspiring SOC Leads</h5>
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
                    style={{ width: "55px" }}>
                    {/* <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    /> */}
                  </div>
                  <div className="col-lg-11 d-none  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      STRONG FOUNDATIONAL COVERAGE
                    </h5>
                  </div>

                  <div className="col-lg-12 mt-3 d-none">
                    <p className={`${styles.p_tags} mt-0 pt-0 `}>
                      The PCD certification provides a strong foundation for
                      cloud security domain coverage with key concepts in each
                      domain combined with practical hands-on labs and critical
                      thinking challenges producing world class and modern cloud
                      security technologists. The PCD provides the foundational
                      skills essential for starting a career in Cloud Security,
                      focusing on four disciplines: network defense, ethical
                      hacking, digital forensics, and security operations.
                    </p>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4 d-none">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      PRACTICAL ENGAGEMENT EXPERIENCE
                    </h5>
                  </div>

                  <div className="col-lg-12 mt-3 d-none">
                    <p className={`${styles.p_tags} mt-0 pt-0 `}>
                      The PCD program is delivered utilizing live real world
                      engagement style utilizing live targets and real attack
                      systems for a truly immersive, real-life practice and
                      assessment platform. Candidates will be equipped with
                      multiple attack and defense scenarios for cloud security
                      landscape.
                    </p>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4 d-none">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>PROJECTS AND LABS</h5>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <p className={`${styles.p_tags} mt-0 pt-0 `}>
                      The PCD certification offers multiple projects and labs
                      which enables critical thinking towards putting knowledge
                      into practice and providing a proven record of skill
                      demonstration. Candidates completing the PCD program will
                      earn the PCD certification and have a proven track record
                      of performing the tasks required in a practical
                      environment, proving to employers their ability to perform
                      critical job duties.
                    </p>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4 d-none">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                      MULTIPLE CERTIFICATIONS
                    </h5>
                  </div>

                  <div className="col-lg-12 mt-3">
                    <p className={`${styles.p_tags} mt-0 pt-0 `}>
                      The course outline of the PCD program goes above and
                      beyond some of the more common well known cloud security
                      programs, in a completely handson real world environment
                      instead of simulations to ensure cloud security skills
                      development. We believe that candidates who successfully
                      attain the PCD certification will attain other leading
                      cybersecurity certifications,, without further training.
                    </p>
                  </div>
                </div>
                <div className="row col-lg-12 mt-4 d-none">
                  <div
                    className={`col-lg-1 col-md-1 width-set pe-0 col-3 d-none`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9 d-none">
                    <h5 className={styles.title_flex}>MOST AFFORDABLE</h5>
                  </div>

                  <div className="col-lg-12 mt-3 d-none">
                    <p className={`${styles.p_tags} mt-0 pt-0 `}>
                      The Despite the unique design of the heavily hands-on
                      course and its uses of real-world cyber range capability,
                      the certification is one of the most affordable in the
                      world!
                    </p>
                  </div>
                </div>

                <p className={`${styles.p_tags} mt-4 mb-4 pt-0 `}>
Basic understanding of Windows and Linux operating systems.

                </p>

                <div className="row col-lg-12">
                  <div
                    className={`col-lg-1 col-md-1 width-set col-3 pe-0`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                    Basic understanding of Networking, TCP/IP Protocols, IT Infrastructure will work as a Plus
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-3">
                  <div
                    className={`col-lg-1 col-md-1 width-set col-4 pe-0`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-8">
                    <h5 className={styles.title_flex}>
                    Hunger for learning                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-3">
                  <div
                    className={`col-lg-1 col-md-1 width-set col-3 pe-0`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                    Familiarity with basic system administration, networks, cloud and security concepts.
                    </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-3">
                  <div
                    className={`col-lg-1 col-md-1 width-set col-3 pe-0`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                    Own Laptop/PC with minimum of 8GB RAM, with Admin Access. 
                                      </h5>
                  </div>
                </div>
                <div className="row col-lg-12 mt-3">
                  <div
                    className={`col-lg-1 col-md-1 width-set col-3 pe-0`}
                    style={{ width: "55px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../about/right.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 col-9">
                    <h5 className={styles.title_flex}>
                    Good broadband/internet speed, microphone to talk to the instructors                                      </h5>
                  </div>
                </div>
              </div>
            </Accordion.Body>
            
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
            How it is beneficial for students??

            </Accordion.Header>
            <Accordion.Body>
            <p className={`${styles.p_tags} mt-0 pt-0 `}>This PCD course benefits students by providing hands-on experience through real-world scenarios, equipping them with industry-relevant knowledge and skills. Certification from the course validates their expertise, enhancing job prospects and opening up various career opportunities in cloud security. Students gain critical skills in implementing and managing security controls, while also building a professional network. The up-to-date curriculum ensures they learn the latest trends and technologies, and the practical approach develops their problem-solving abilities for addressing complex security issues effectively.</p>

            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="3">
            <Accordion.Header>
              Career Ready Engagement -<br />
              Rs 74670 / USD 899
            </Accordion.Header>
            <Accordion.Body>
            <p className={`${styles.p_tags} mt-0 pt-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </section>

      {/* <section className={` ${styles.contentBoxes}`}>
        <div className={styles.frameParent}>
          <b className={styles.learner}>Reviews</b>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>BPCD Course</p>
            <p className={styles.areTelling}>Reviews</p>
          </b>
        </div>
      </section>
      <Relation /> */}

      <section className={` ${styles.contentBoxes} ${styles.contentBoxesNew}`}>
        <div className={styles.frameParent}>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>Get Certified</p>
            <p className={styles.p_tags_certificate}>
              The course is designed to equipt you all necessary skills to
              showcase excellence in your work! Once the course is completed,
              you will be certified from our vendor partner Certifier Grab
              Digital Badges- Gold, Silver, Bronze Category After Challenging
              yourself on the Final Assessment
            </p>
          </b>
        </div>
      </section>
      <div className={`${styles.span_disc} ${styles.span_disc_mobile}`}>
        <div className="row mt-5 mb-5 pb-5 pt-3">
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

export default CourseSummary;
