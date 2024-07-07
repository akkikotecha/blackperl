import { FunctionComponent } from "react";
import styles from "./BccdToolsCoverd.module.css";

const BccdToolsCoverd: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
        <div className={`row d-none ${styles.desktopShow}`}  >
            <div className="col-lg-9">
              <p className={styles.BcadLabs}>Tools Covered</p>
              <p className={styles.SetupIn}>in the Class</p>
            </div>
            <div className="col-lg-3 d-flex justify-content-end align-items-start">
            </div>
          </div>

        
          <div className={`row   d-md-none ${styles.mobileShow}`}  >
            <div className="col-lg-8 col-md-6 ps-2">
              <p className={styles.BcadLabs}>Tools Covered</p>
              <p className={styles.SetupIn}>in the Class</p>
            </div>
           
          </div>

          
               <div className={`${styles.row} mt-4 pt-0`}>
               <div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>Guard Duty</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>CloudWatch</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>AWS Inspector</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}> Macie</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>Pacu</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>Prowler</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>Cloudspanning</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>awspx</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>CSPM toolset</h5>
</div>
<div className={`${styles.flex_row} ${styles['col-2']}`}>
    <h5 className={styles.title_flex_tools}>Cloud Vulnerability Assessment Toolset</h5>
</div>

    </div>
    </div>
      </section>
    </>
  );
};

export default BccdToolsCoverd;
