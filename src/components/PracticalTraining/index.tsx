import { FunctionComponent } from "react";
import styles from "./PracticalTraining.module.css";
import TraningContainer from './TraningContainer'

const PracticalTraining: FunctionComponent = () => {
  return (
    <section className={styles.dataMerger}>
    
    <div className={styles.certification}>
    <h1 className={styles.data_box}>
      <p className={styles.title_text}>Practical</p>
      <p className={styles.title_text_2}> Training. Real-World Exams.</p>
    </h1>
    <TraningContainer/>
    </div>

  </section>
  );
};

export default PracticalTraining;
