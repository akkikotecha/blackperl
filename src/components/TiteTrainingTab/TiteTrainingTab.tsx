import { FunctionComponent } from "react";
import styles from "./TiteTrainingTab.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TiteCourseSummary from '../TiteCourseSummary/TiteCourseSummary'
import TiteLabsCourse from '../TiteLabsCourse/TiteLabsCourse'
import TiteToolsCoverd from '../TiteToolsCoverd/TiteToolsCoverd'
import TiteFaqTab from '../TiteFaqTab/TiteFaqTab'
import TiteInstructors from '../TiteInstructors/TiteInstructors'

const TiteTrainingTab: FunctionComponent = () => {
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
        <TiteCourseSummary />
      </Tab>
      <Tab eventKey="LABS/ COURSe" title="LABS/ COURSe">
      <TiteLabsCourse />
      </Tab>
      <Tab eventKey="Tools Covered" title="Tools Covered">
      <TiteToolsCoverd />
      </Tab>
      <Tab eventKey="Instructors" title="Instructors">
      <TiteInstructors />
      </Tab>
      <Tab eventKey="FAQS" title="FAQS">
      <TiteFaqTab />
      </Tab>
      
    </Tabs>
    </div>
    
  
  </section>
  );
};

export default TiteTrainingTab;
