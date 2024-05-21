import { FunctionComponent } from "react";
import styles from "./BcdeTrainingTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BcdeCourseSummary from '../BcdeCourseSummary/BcdeCourseSummary'
import BcdeLabsCourse from '../BcdeLabsCourse/BcdeLabsCourse'
import BcdeToolsCoverd from '../BcdeToolsCoverd/BcdeToolsCoverd'
import BcdeFaqTab from '../BcdeFaqTab/BcdeFaqTab'
import BcdeInstructors from '../BcdeInstructors/BcdeInstructors'

const BcdeTrainingTab: FunctionComponent = () => {
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
        <BcdeCourseSummary />
      </Tab>
      <Tab eventKey="LABS/ COURSe" title="LABS/ COURSe">
      <BcdeLabsCourse />
      </Tab>
      <Tab eventKey="Tools Covered" title="Tools Covered">
      <BcdeToolsCoverd />
      </Tab>
      <Tab eventKey="Instructors" title="Instructors">
      <BcdeInstructors />
      </Tab>
      <Tab eventKey="FAQS" title="FAQS">
      <BcdeFaqTab />
      </Tab>
      
    </Tabs>
    </div>
    
  
  </section>
  );
};

export default BcdeTrainingTab;
