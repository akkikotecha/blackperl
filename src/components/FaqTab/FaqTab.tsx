import { FunctionComponent } from "react";
import styles from "./FaqTab.module.css";
import Accordion from "react-bootstrap/Accordion";

const FaqTab: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className={`${styles.row} mt-0 pt-0`}>
          <Accordion className={`col-lg-12 mt-0 pt-0 ${styles.paddingOff} paddOff`}>
  <Accordion.Item className="accorderPadding"  eventKey="0">
    <Accordion.Header className={`ps-0`}>How is the BCAD course delivered?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      In the Accelerated Engagement, the course is self-paced using the recordings of the live classes. There will be 2 day/week Doubt Clearning and mentorship session which will cover each topics from the Syllabus.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="1">
    <Accordion.Header>How long does the BCAD course take to complete?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      BCAD is a vast DFIR training and engagement program, typically takes around 3 months to complete where 2 months online class(Self Paced), Live Mentorship, assessments, labs etc. and 1 month final assessment, mock interviews and career coaching.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="2">
    <Accordion.Header>What is the delivery mode of the course challenges for the BCAD course?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      It includes an on-demand practical assessments and labs to evaluate the student’s understanding and skills in cyber defense. The challenge is present in the practice lab itself, top 3 performers will be reward BlackPerl Swag. It needs to be completed within the duration.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="3">
    <Accordion.Header>What are the career opportunities after completing the BCAD course?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      After completing the course, individuals can explore career opportunities such as:
      <br /> 
      - Cyber Security Engineer (Intermediate - Senior)<br />
      - Incident Response Engineer (Intermediate - Senior)<br />
      - SecOps Analyst/Engineer (Intermediate - Senior)<br />
      - DFIR Engineer (Intermediate - Senior)<br />
      - Threat Intelligence/Hunt Analyst (Intermediate - Senior)<br />
      - SOC Lead
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="4">
    <Accordion.Header>How long will I have access to course materials?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      You will have 1 Year of access to course lessons and labs. You can also do extensions of access course materials within one year from the course purchase date.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="5">
    <Accordion.Header>What does the BCAD final exam look like?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      The exam is 100% practical. It will evaluate your technical skills across the following domains; threat hunting, perimeter defense, disk forensics, memory forensics, and network forensics.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="6">
    <Accordion.Header>What is the exam duration?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      You will have twenty-four (24) hours to complete your exam from the moment you click the Start button.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="7">
    <Accordion.Header>What is the passing score?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      70% is the minimum score to pass the BCAD certification exam.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="8">
    <Accordion.Header>Am I required to write a report?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      Yes. You need to write a final report based on your findings and based on the report your evaluation will be done. You will also need to set up a debrief with us to show what you did in the interview session.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="9">
    <Accordion.Header>Do I have to set up something on my machine to practice labs?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      No. You just need to have some basic application to run Pre-Configured VMs provided in BCAD Course. No need to set up anything extra on your side. Please refer the Pre-Requisites section to know more about this.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="10">
    <Accordion.Header>How much time should I dedicate to studying BCAD?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      We request you to kindly attend all the Live Classes. That's the main exciting part of this course. We suggest allocating 1 hours daily throughout the BCAD journey to self-practice. With this focused study time, you can complete the course and become ready for your next challenge. However, it's important to note that the actual duration may vary from person to person based on individual experience and learning style.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="11">
    <Accordion.Header>Will I receive a digital badge and certificate after passing the exam?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      Yes, a Certify Certificate and Digital Badge will be awarded to all participants after completing the course and passing the examination.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="12">
    <Accordion.Header>I don't have time to join live class since I work on 24/7 rotation model. I am in different timezone. How will you help?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      Most of our members are from rotational shifts. You will learn at your own pace using the recorded materials. Also you will be joining the Live Mentorship program based on your choice. And if you can provide dedicated learning time as described in above area, you won't face any problem. Also, you can reach out to Instructors and your fellow batch members anytime over WhatsApp. We also have a dedicated Collaboration group, where everyone is part of our BCAD batches(current+previous) and ready to help.
      <br /><br />
      If you are in different time-zone and can't join Live in the class, we would still request you to consider taking our class using which will enable you to go through the recorded lessons and join the live doubt clearance and QnA classes.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="13">
    <Accordion.Header>How long we will have access to the video content?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      You will get a total 12 months access from the date of starting of the batch.<br />
      However, you can get extension if you are in need.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="14">
    <Accordion.Header>How does BCAD compare to other certifications? Isn't the cost too High?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      We can speak only for ourselves. But we can highlight BCAD core values in the following points:
     
            <div className="row col-lg-12 col-md-12 mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`} >
                Challenging: unlike other certifications or programs, BCAD is not a spoon-fed experience. It teaches you and challenges you in every step to become a TRUE CHAMPION by improving your technical ability, research skills and changing your mindset on Cyber Defensive World. After getting certified, you will feel confident taking over a defender role in any organization and face any interviews. Our full program may cost even 12X Higher by some vendors who deliver similar content but for a specialized topic. We are brining you all in a combined course. We bring a course which is created- "For Defenders by Defenders"
                <br /><br />
          BCAD should be your choice if you really want to learn and grow yourself. But, if you just need a certificate to boost your CV, there are many other cheaper and easier certifications which are just famous for marketing.

                </h5>
              </div>
            </div>

            <div className="row mt-4 col-lg-12 col-md-12 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`}>
                Quality: we value quality + quantity. We don't believe in quality over quantity. We put enormous amount of time and effort for developing course labs, study material, tool set, VMs to be as realistic and valuable as possible and not only throw a bunch of lessons and labs at you which doesn't fit into your career. Our labs are value driven and speak for themselves and you won't see them anywhere else!
                </h5>
              </div>
            </div>
            <div className="row mt-4 col-lg-12 col-md-12 ">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`}>
                Community: we have a top notch private community(WhatsApp) for course students and certified professionals where you will experience cool technical discussions, suggestions, and even mentorship tips.
                </h5>
              </div>
            </div>
            <br/><br/>
      For more info, please check the course syllabus, <a href="https://blackperldfir.com/discord" target="_blank">community</a>, and instructors' profiles and see if it meets your expectations.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="15">
    <Accordion.Header>How does corporate purchases/Group purchase work?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      Corporates can benefit from the following:
      <br/><br/>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="row col-lg-12 col-md-12 mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`} >
                Discounts on bulk purchases (3+ seats).
                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`} >
                Transferable Access if you drop in middle and want to replace your place with someone, but you can't do it after completion of the full program.
                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`} >
                Onsite training for a team size more than 15.
                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`} >
                1-1 Training and Consulting for SOC process revamp for management & technical team
                </h5>
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0`}
                style={{ width: "35px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-10 col-md-10 px-0">
                <h5 className={`${styles.title_flex} mt-0 ms-2`} >
                DFIR Experts hire from BlackPerl Pool
                </h5>
              </div>
            </div>
      <br/><br/>
      Please contact us over WhatsApp or Mail for more information.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


      
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqTab;
