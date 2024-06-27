import { FunctionComponent } from "react";
import styles from "./TiteCourseSummary.module.css";
import Accordion from "react-bootstrap/Accordion";
import Relation from '../TTIARelation/TTIARelation'

import certificate_1 from '../../../public/training/ttiaCert.png';
import certificate_2 from '../../../public/training/TTIACERTIFICATE.png';

// import {Icon} from 'react-fa'
const TiteCourseSummary: FunctionComponent = () => {
  return (
    <>
      <section className={styles.span_disc}>
        <p className={styles.p_tags}>
        Cyber Threat Intelligence (CTI) refers to the knowledge and information collected, analyzed, and disseminated regarding potential cyber threats and risks that could pose harm to an organization's information systems, networks, and overall cybersecurity posture. CTI is a proactive approach to understanding and mitigating cybersecurity threats by providing relevant and timely information to decision-makers.<br/><br/>

Key aspects of Cyber Threat Intelligence include:<br/><br/>
1. Data Collection:  Gathering data from various sources, such as open-source intelligence (OSINT), dark web monitoring, incident reports, malware analysis, and information sharing platforms.<br/><br/>
2. Analysis:  Analyzing collected data to identify patterns, trends, and potential indicators of compromise (IoCs) that could signify a cyber threat.<br/><br/>
3. Contextualization: Providing context to the raw data by understanding the motives, tactics, techniques, and procedures (TTPs) of threat actors. This involves understanding the "who, what, where, when, why, and how" of cyber threats.<br/><br/>
4. Threat Indicators: Identifying specific indicators of compromise (IoCs) that can be used to detect and respond to ongoing or future cyber attacks. These indicators might include IP addresses, malware signatures, patterns of behavior, etc.<br/><br/>
5. Information Sharing:  Sharing threat intelligence with relevant stakeholders, both within an organization and across the broader cybersecurity community. Collaborative sharing helps create a collective defense against cyber threats.<br/><br/>
6. Tactical, Operational, and Strategic Intelligence:  Providing intelligence at different levels to cater to various stakeholders' needs. Tactical intelligence assists in immediate incident response, operational intelligence supports ongoing security operations, and strategic intelligence aids in long-term planning and risk management.<br/><br/>
7. Risk Mitigation: Enabling organizations to make informed decisions to proactively mitigate cyber risks and enhance their overall cybersecurity posture.
<br/><br/>
Cyber Threat Intelligence is crucial for organizations to stay ahead of evolving cyber threats, understand their threat landscape, and take proactive measures to protect their information assets. It involves a combination of technology, processes, and human expertise to effectively gather, analyze, and act upon relevant threat information.
<br/><br/>
This Course will explore the complexities of threat intelligence, including terminologies, intelligence types, frameworks, Dark Web research, data collecting methodologies, hands-on tools, and practical case studies. The course concludes with a detailed examination of a real-world threat scenario.



        </p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is this training for?</Accordion.Header>
            <Accordion.Body>
            <div className={styles.row}>
                      <div className="row col-lg-12">
                        <div
                          className={`col-lg-1 col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                          Ideal for cybersecurity enthusiasts and researchers, analysts, IT administrators

                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                          Any individual interested in learning more about cyber threats.

                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1 col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                          This course is designed for both beginners and intermediate-level attendees who want to learn practical threat intelligence skills.

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
                          className={`col-lg-1 col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                          Participants should be familiar with basic cybersecurity concepts.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-11 px-0">
                          <h5 className={styles.title_flex}>
                          For hands-on sessions, a laptop with internet connectivity is essential.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                          Virtual Box/VMWare
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-11 px-0">
                          <h5 className={styles.title_flex}>
                          All other materials would be delivered during the session
                          </h5>
                        </div>
                      </div>
                    </div>
                    </Accordion.Body>
            {/* <Accordion.Header>Prerequisites</Accordion.Header>
            <Accordion.Body>
            <Accordion className="AccordionSub">
                <Accordion.Item eventKey="7">
                  <Accordion.Header className="AccordionTitle">
                    Program Engagement Options- Choose what you need
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
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header className="AccordionTitle">
                    Career Ready Engagement- Rs 74670 / USD 899
                  </Accordion.Header>
                  <Accordion.Body>
                  <div className={styles.row}>
                      <div className="row col-lg-12">
                        <div
                          className={`col-lg-1 col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                            Basic understanding of Windows and Linux operating
                            systems.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-11 px-0">
                          <h5 className={styles.title_flex}>
                            Basic understanding of Networking, TCP/IP Protocols,
                            IT Infrastructure will work as a Plus
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                          Hunger for learning, problem solving skills for Assessment Challenges
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-11 px-0">
                          <h5 className={styles.title_flex}>
                          Familiarity with basic system administration, networks, and security concepts.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11   col-md-11 px-0">
                          <h5 className={styles.title_flex}>
                          Own Laptop/PC with minimum of 8GB RAM, with Admin Access. For smooth access on the work, we would like to dedicate 4GB RAM to the VMs.
                          </h5>
                        </div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-3  col-md-8 px-0">
                          <h5 className={styles.title_flex}>
                          Download Oracle Virtual Box using the 

                          </h5>
                        </div>
                        <div className="col-lg-4  col-md-2 px-0"><span><a href="#" className={styles.LinkSet}>Link   <Icon name="arrow-right" className={styles.rotated_icon} /></a></span></div>
                      </div>
                      <div className="row col-lg-12 mt-4">
                        <div
                          className={`col-lg-1  col-md-1 width-set pe-0`}
                          style={{ width: "55px" }}
                        >
                          <img
                            className={styles.float_img}
                            src="../../../about/right.png"
                          />
                        </div>
                        <div className="col-lg-11  col-md-10 px-0">
                          <h5 className={styles.title_flex}>
                          Good broadband/internet speed, microphone to talk to the instructors.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body> */}
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>How this can be beneficial for students?</Accordion.Header>
          <Accordion.Body>
          <div className={styles.row}>
                      <p className={`${styles.p_tags} mt-0 pt-0`}>Participants will develop practical threat intelligence capabilities, allowing them to successfully identify and respond to online threats. The course provides a solid foundation for cybersecurity jobs and equips students to actively contribute to their organization's security posture and follow a career path as threat analyst or cyber threat intelligence researcher</p>
                    </div>
                    </Accordion.Body>
          
          </Accordion.Item>
         
          
        </Accordion>

      
       
      </section>
      
      <section className={` ${styles.contentBoxes} pt-2`}>
        <div className={styles.frameParent}>
          <b className={styles.learner}>Reviews</b>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>TTIA Course</p>
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
            Once you complete the 2 days Live session, you will be given a course assessment which will be hands-on. Once you clear the assessment and submit the report with a 70% score; you will be awarded with a course completion certificate. It won't be any MCQ!! You will be doing real Threat Intel work and need to submit a report. And you will have 3 attempts to clear the assessment. Once you submit the report, you will get feedback within 1 business day from us and if you are not clearing it, you can reattempt.<br/><br/>

Since you will have 30 days of access of the recorded session; you should complete the assessment within this time frame.

        </p>
          </b>
        </div>
        
      </section>
      <div className={`${styles.span_disc} ${styles.span_disc_mobile}`}>
        <div className="row mt-5 mb-5 pb-5 pt-3">
          <div className="col-lg-9 px-0 col-md-9">
              <img src={certificate_1} className={styles.certificateWidthMain}/>
          </div>
          <div className={`col-lg-3 col-md-3 ${styles.paddingRightOff}`}>
          <img src={certificate_2} className={styles.certificateWidth} />
          <img src={certificate_2} className={`mt-4 ${styles.certificateWidth}`}/>
          <img src={certificate_2} className={`mt-4 ${styles.certificateWidth}`}/>
          </div>
          </div>
        </div>
    </>
  );
};

export default TiteCourseSummary;
