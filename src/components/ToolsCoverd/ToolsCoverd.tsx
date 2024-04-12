import { FunctionComponent } from "react";
import styles from "./ToolsCoverd.module.css";

const ToolsCoverd: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className="row ">
            <div className="col-lg-9">
              <p className={styles.BcadLabs}>Tools Covered</p>
              <p className={styles.SetupIn}>in the Class</p>
            </div>
            <div className="col-lg-3 d-flex justify-content-end align-items-start">
            </div>
          </div>

          
               <div className={`${styles.row} mt-4 pt-0`}>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Alienvault</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>AVML</h5>
      </div>
     
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>AgentRansack</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>AmcacheParser</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Belkasoft Evidence Center</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Chainshaw</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Cortex</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>BelkaSoft RAM Capture</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Caldera</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Capa</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Capa</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Cellebrite</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>UFED 4PC and Physical Analyzer</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Chainshaw</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Cortex</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>Cuckoo Sandbox</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>CyLR</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <h5 className={styles.title_flex_tools}>CyberChef</h5>
      </div>

    </div>
    </div>
      </section>
    </>
  );
};

export default ToolsCoverd;
