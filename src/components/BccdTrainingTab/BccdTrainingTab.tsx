import { FunctionComponent } from "react";
import styles from "./BccdTrainingTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BccdCourseSummary from '../BccdCourseSummary/BccdCourseSummary'
import BccdLabsCourse from '../BccdLabsCourse/BccdLabsCourse'
import BccdToolsCoverd from '../BccdToolsCoverd/BccdToolsCoverd'
import BccdFaqTab from '../BccdFaqTab/BccdFaqTab'
import BccdInstructors from '../BccdInstructors/BccdInstructors'

const BccdTrainingTab: FunctionComponent = () => {
  return (
    <section className={styles.dataMerger}>
    
    <div className={styles.certification}>
    <Tabs
      defaultActiveKey="Course_Summary"
      id="fill-tab-example"
      className="mb-3 mt-5"
      fill
    >
      <Tab eventKey="Course_Summary" title="Course Summary ">
        <BccdCourseSummary />
      </Tab>
      <Tab eventKey="LABS/ COURSe" title="LABS/ COURSe">
      <BccdLabsCourse />
      </Tab>
      <Tab eventKey="Tools Covered" title="Tools Covered">
      <BccdToolsCoverd />
      </Tab>
      <Tab eventKey="Instructors" title="Instructors">
      <BccdInstructors />
      </Tab>
      <Tab eventKey="FAQS" title="FAQS">
      <BccdFaqTab />
      </Tab>
      
    </Tabs>
    </div>
    
  
  </section>
  );
};

export default BccdTrainingTab;
