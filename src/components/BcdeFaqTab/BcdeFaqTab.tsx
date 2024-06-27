import { FunctionComponent } from "react";
import styles from "./BcdeFaqTab.module.css";
import Accordion from "react-bootstrap/Accordion";

const BcdeFaqTab: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className={`${styles.row} mt-0 pt-0`}>
          <Accordion className={`col-lg-12 mt-0 pt-0 ${styles.paddingOff} paddOff`}>
  <Accordion.Item className="accorderPadding" eventKey="0">
    <Accordion.Header className={`ps-0`}>What career path will this course make me ready for?
</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Completing a detection engineering course prepares you for a range of cybersecurity careers. You'll be equipped to work as a security analyst, threat hunter, incident responder, or in roles like SOC analyst, detection engineer, security consultant, penetration tester, or cyber threat intelligence analyst. This course provides the skills and expertise needed to detect, respond to, and mitigate cyber threats effectively.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="1">
    <Accordion.Header>Is there any pre-requisite for this course/session?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Participants should be familiar with basic cybersecurity concepts. For hands-on sessions, a laptop with internet connectivity is essential. Virtual Box/VMWare needs to be installed in your own system. It is preferred to have own PC with admin credential. Do Not take this course on a company or Office provided PC. All other materials would be delivered during the session.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="2">
    <Accordion.Header>Is prior cybersecurity experience required?
</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Although basic cybersecurity knowledge is necessary, the course has been tailored for beginners.

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="3">
    <Accordion.Header>Will there be a video recording given?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Yes, there will be. The access will be given for 1 month (If you need extended recording access you can repurchase it).
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="4">
    <Accordion.Header>How the certification will be done?
</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Once you complete Live session, you will be given a course assessment which will be hands-on. Once you clear the assessment and submit the report with a 70% score; you will be awarded with a course completion certificate. It won't be any MCQ!! You will be doing real work and need to submit a report. And you will have 3 attempts to clear the assessment. Once you submit the report, you will get feedback within 1 business day from us and if you are not clearing it, you can reattempt.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="5">
    <Accordion.Header>What if I am not able to attend the live class? Will I be able to attempt the exam?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
    Yes. As you will be given 1 month (31 days) of video access, you can leverage it and write the assessment and submit the report for the certification.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accorderPadding" eventKey="6">
    <Accordion.Header>Can I get life time video access, as I don't know if I will be able to clear it within 31 days of time as I will be busy with other work during this month?</Accordion.Header>
    <Accordion.Body className={styles.content_body}>
      
No. We can't do that. If due to any reason if your are not able to join or utilize this 31 days time. You can repurchase it or you can wait for our next session.

    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>


      
          </div>
        </div>
      </section>
    </>
  );
};

export default BcdeFaqTab;
