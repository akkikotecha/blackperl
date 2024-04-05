import { FunctionComponent } from "react";
import styles from "./tranning.module.css";

export type DetectType = {
  groupPrivacyPolicy?: string;
  detect: string;
  detect_data?: string;
  imageURL?: string;
};

const tranning: FunctionComponent<DetectType> = ({
  detect,
  detect_data,
  imageURL
}) => {
  return (
    <div className={styles.detect}>
      <div className={styles.groupTermsCondition}>
        <img src={imageURL} className={styles.indexSet}/>
        <h1 className={styles.detect1} dangerouslySetInnerHTML={{__html: detect}}></h1>
        <h1 className={styles.detect_data}>{detect_data}</h1>
       
      </div>
    </div>
  );
};

export default tranning;
