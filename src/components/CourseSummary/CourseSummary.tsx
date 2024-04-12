import { FunctionComponent } from "react";
import styles from "./CourseSummary.module.css";
import Accordion from "react-bootstrap/Accordion";
import Relation from '../Relations/Relation'

import certificate_1 from '../../../public/training/certificate_1.png';
import certificate_2 from '../../../public/training/certificate_2.png';




import {Icon} from 'react-fa'
const CourseSummary: FunctionComponent = () => {
  return (
    <>
      <section className={styles.span_disc}>
        <p className={styles.p_tags}>
          This is a 4 months (3+1) intensive, career driven training program
          which introduces you to real-world cyber threats, defenders experience
          in their networks and the tools used to defend against them. You will
          learn defense strategies, threat-hunting techniques, adversary
          detection, and how to investigate security intrusions and perform
          forensic analysis through real world experience. You choose a training
          plan based on your need and get engaged with us and we will take walk
          with you to redefine your career.
        </p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is this training for?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Prerequisites</Accordion.Header>
            <Accordion.Body>
            <Accordion className="AccordionSub">
                <Accordion.Item eventKey="7">
                  <Accordion.Header className="AccordionTitle">
                    Program Engagement Options- Choose what you need
                  </Accordion.Header>
                  <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header className="AccordionTitle">
                    Career Ready Engagement- Rs 74670 / USD 899
                  </Accordion.Header>
                  <Accordion.Body>
                  <div className={styles.row}>
                      <div className="row col-lg-12">
                        <div
                          className={`col-lg-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11 px-0">
                          <h5 className={styles.title_flex}>
                            Basic understanding of Windows and Linux operating
                            systems.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11 px-0">
                          <h5 className={styles.title_flex}>
                            Basic understanding of Networking, TCP/IP Protocols,
                            IT Infrastructure will work as a Plus
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11 px-0">
                          <h5 className={styles.title_flex}>
                          Hunger for learning, problem solving skills for Assessment Challenges
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11 px-0">
                          <h5 className={styles.title_flex}>
                          Familiarity with basic system administration, networks, and security concepts.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11 px-0">
                          <h5 className={styles.title_flex}>
                          Own Laptop/PC with minimum of 8GB RAM, with Admin Access. For smooth access on the work, we would like to dedicate 4GB RAM to the VMs.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-3 px-0">
                          <h5 className={styles.title_flex}>
                          Download Oracle Virtual Box using the 

                          </h5>
                        </div>
                        <div className="col-lg-4 px-0"><span><a href="#" className={styles.LinkSet}>Link   <Icon name="arrow-right" className={styles.rotated_icon} /></a></span></div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11 px-0">
                          <h5 className={styles.title_flex}>
                          Good broadband/internet speed, microphone to talk to the instructors.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Program Engagement Options -<br />
              Choose what you need
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Career Ready Engagement -<br />
              Rs 74670 / USD 899
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      
       
      </section>
      
      <section className={` ${styles.contentBoxes}`}>
        <div className={styles.frameParent}>
          <b className={styles.learner}>Reviews</b>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>BCAD Course</p>
            <p className={styles.areTelling}>Reviews</p>
          </b>
        </div>
      </section>
      <Relation />

      <section className={` ${styles.contentBoxes}`}>
        <div className={styles.frameParent}>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>Get Certified</p>
            <p className={styles.p_tags_certificate}>
            The course is designed to equipt you all necessary skills to showcase excellence in your work! Once the course is completed, you will be certified from our vendor partner Certifier Grab Digital Badges- Gold, Silver, Bronze Category After Challenging yourself on the Final Assessment
        </p>
          </b>
        </div>
        
      </section>
      <div className={styles.span_disc}>
        <div className="row mt-5 mb-5 pb-5 pt-3">
          <div className="col-lg-9 px-0 ">
              <img src={certificate_1} className={styles.certificateWidthMain}/>
          </div>
          <div className="col-lg-3">
          <img src={certificate_2} className={styles.certificateWidth} />
          <img src={certificate_2} className={`mt-4 ${styles.certificateWidth}`}/>
          <img src={certificate_2} className={`mt-4 ${styles.certificateWidth}`}/>
          </div>
          </div>
        </div>
    </>
  );
};

export default CourseSummary;
