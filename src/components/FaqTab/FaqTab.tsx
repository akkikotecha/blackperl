import { FunctionComponent } from "react";
import styles from "./FaqTab.module.css";
import Accordion from "react-bootstrap/Accordion";

const FaqTab: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className={`${styles.row} mt-0 pt-0`}>
          <Accordion className={`col-lg-12 mt-0 pt-0 ${styles.paddingOff}`}>
          <Accordion.Item eventKey="0">
            <Accordion.Header className={`ps-0`}>How is the BCAD course delivered?</Accordion.Header>
            <Accordion.Body className={styles.content_body}> 
            BCAD is a live DFIR training and engagement program, typically takes around 4 months to complete where 3 months online class, assessments, labs etc. and 1 month final assessment, mock interviews and career coaching.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How long does the BCAD course take to complete?</Accordion.Header>
            <Accordion.Body className={styles.content_body}>
            BCAD is a live DFIR training and engagement program, typically takes around 4 months to complete where 3 months online class, assessments, labs etc. and 1 month final assessment, mock interviews and career coaching.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
            What is the delivery mode of the course<br/>challenges for the BCAD course?
            </Accordion.Header>
            <Accordion.Body className={styles.content_body}>
            BCAD is a live DFIR training and engagement program, typically takes around 4 months to complete where 3 months online class, assessments, labs etc. and 1 month final assessment, mock interviews and career coaching.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
            What are the career opportunities after<br/>completing the BCAD course?
            </Accordion.Header>
            <Accordion.Body className={styles.content_body}>
            BCAD is a live DFIR training and engagement program, typically takes around 4 months to complete where 3 months online class, assessments, labs etc. and 1 month final assessment, mock interviews and career coaching.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
            How long will I have access to course materials?
            </Accordion.Header>
            <Accordion.Body className={styles.content_body}>
            BCAD is a live DFIR training and engagement program, typically takes around 4 months to complete where 3 months online class, assessments, labs etc. and 1 month final assessment, mock interviews and career coaching.
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
