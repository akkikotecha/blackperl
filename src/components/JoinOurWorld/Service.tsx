import { FunctionComponent } from "react";
import styles from "./service.module.css";

export type DetectType = {
  groupPrivacyPolicy?: string;
  detect?: string;
  detect_data?: string;
  imageURL?: string;
  itClosesAllTheSecuirtyGap?: string;
};

const Service: FunctionComponent<DetectType> = ({
  detect,
  detect_data,
  imageURL,
  itClosesAllTheSecuirtyGap,
}) => {
  return (
    <div className={styles.detect}>
      <img
        className={styles.buttonConfirmIcon}
        alt=""
        src="/about/join_world.png"
      />
      {/* <img
        className={styles.groupPrivacyPolicy}
        alt=""
        src={groupPrivacyPolicy}
      /> */}
      <div className={styles.groupTermsCondition}>
        <img src={imageURL} className={styles.indexSet}/>
        <h1 className={styles.detect1}>{detect}</h1>
        <h1 className={styles.detect_data}>{detect_data}</h1>
        <div className={styles.frameHeader}>
          <div className={styles.itClosesAll}>{itClosesAllTheSecuirtyGap}</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
