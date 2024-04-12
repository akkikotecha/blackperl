import { FunctionComponent } from "react";
import styles from "./TrainingTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CourseSummary from '../CourseSummary/CourseSummary'
import LabsCourse from '../LabsCourse/LabsCourse'
import ToolsCoverd from '../ToolsCoverd/ToolsCoverd'
import FaqTab from '../FaqTab/FaqTab'
import Instructors from '../Instructors/Instructors'

const TrainingTab: FunctionComponent = () => {
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
        <CourseSummary />
      </Tab>
      <Tab eventKey="LABS/ COURSe" title="LABS/ COURSe">
      <LabsCourse />
      </Tab>
      <Tab eventKey="Tools Covered" title="Tools Covered">
      <ToolsCoverd />
      </Tab>
      <Tab eventKey="Instructors" title="Instructors">
      <Instructors />
      </Tab>
      <Tab eventKey="FAQS" title="FAQS">
      <FaqTab />
      </Tab>
      
    </Tabs>
    </div>
    
  
  </section>
  );
};

export default TrainingTab;
