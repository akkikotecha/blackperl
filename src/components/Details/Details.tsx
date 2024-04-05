import { FunctionComponent } from "react";
import styles from "./Details.module.css";

const Details: FunctionComponent = () => {
  return (
    <section className={styles.dataMerger}>
    
    <div className={styles.certification}>
    <h1 className={styles.data_box}>
      <p className={styles.title_text}>ABOUT US</p>
      <p className={styles.title_disc}>BlackPerl DFIR Pvt Ltd. is a privately owned organisation focused on providing top of the line Cybersecurity training-certification. Manages Security services.<br/><br/>
BlackPerl DFIR was founded in Bangalore, with a mission of protecting people and technology. With decades s of industry experience, countless number ofmidnight fuel burn experience and from our core mission , We will make sure you sleep happy.<br/><br/>
Know more about our mission for Managed Security? <a href="#" className={styles.link}>Visit YukthAstra</a></p>
    </h1>
    
    <h3 className={styles.details_title}>
    On top of our cyber security experience. We also hold several top industry certification:
    </h3>


    <div className={styles.row}>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>ECIH</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>chfi</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>gcfa</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>gcih</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>CDFE</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>BEikaca</h5>
      </div>
     
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>Aws cloud Security speciality</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>CEH</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>CCSk</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>Corporate investigation with Beikasoft x</h5>
      </div>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../about/right.png'/>
        <h5 className={styles.title_flex}>ibm certified professional</h5>
      </div>
    </div>

    </div>

    
  
  </section>
  );
};

export default Details;
