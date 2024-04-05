import { FunctionComponent } from "react";
import styles from "./Inestigation.module.css";

const CollaborationPartners1: FunctionComponent = () => {
  return (
    <div className={styles.collaborationPartners}>
      <div className={styles.collaborationPartnersChild} />
      <div className={styles.contactInfoBox}>
        <b className={styles.downloadOurSampleContainer}>
          <p className={styles.downloadOurSample}>{`DOWNLOAD OUR SAMPLE `}</p>
          <p className={styles.investigationReport}>INVESTIGATION REPORT</p>
        </b>
        <div className={styles.enterNameInput}>
          <div className={styles.wrapperImage12}>
            <img
              className={styles.image12Icon}
              loading="lazy"
              alt=""
              src="/image-12@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.lineElement}>
        <button className={styles.dutyBilling}>
          <b className={styles.downloadNow}>Download NOW</b>
        </button>
      </div>
    </div>
  );
};

export default CollaborationPartners1;
