import { FunctionComponent } from "react";
import styles from "./JoinOurWorld.module.css";
import ServiceContainer from './serviceContainer'

const WhyChooseUs: FunctionComponent = () => {
  return (
    <section className={styles.dataMerger}>
    
    <div className={styles.certification}>
    <h1 className={styles.data_box}>
      <p className={styles.title_text}>Join our</p>
      <p className={styles.title_text_2}>worldwide community of learners</p>
      <p className={styles.title_disc}>Learning is a part of life and we strive to give everyone an equal chance of learning something new every day.</p>
    </h1>
    
   <ServiceContainer/>
    </div>

    
  
  </section>
  );
};

export default WhyChooseUs;
