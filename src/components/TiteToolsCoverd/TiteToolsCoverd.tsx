import { FunctionComponent } from "react";
import styles from "./TiteToolsCoverd.module.css";

const TiteToolsCoverd: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes} pb-5`}>
        <div className={`container ${styles.paddingView} `}>
        <div className={`row ${styles.desktopShow}`}  >
            <div className="col-lg-9">
              <p className={styles.BcadLabs}>Tools Covered</p>
              <p className={styles.SetupIn}>in the Class</p>
            </div>
            <div className="col-lg-3 d-flex justify-content-end align-items-start">
            </div>
          </div>

        
          <div className={`row  d-md-none ${styles.mobileShow}`}  >
            <div className="col-lg-8 col-md-6 ps-2">
              <p className={styles.BcadLabs}>Tools Covered</p>
              <p className={styles.SetupIn}>in the Class</p>
            </div>
           
          </div>

          
               <div className={`${styles.row} mt-4 pt-0`}>
               <div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>MITRE ATT&CK</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>Virustotal</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>URLSCAN</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>Threat Abuse/Abuse bazaar</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>BellingCat</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>MISP</h5>
</div>
    </div>
    </div>
      </section>
    </>
  );
};

export default TiteToolsCoverd;
