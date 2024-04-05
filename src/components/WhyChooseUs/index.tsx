import { FunctionComponent } from "react";
import styles from "./WhyChooseUs.module.css";
import { CircularProgressbar,buildStyles,  } from 'react-circular-progressbar';

import { useEffect, useState } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import ReactVisibilitySensor from "react-visibility-sensor";
const WhyChooseUs: FunctionComponent = () => {
  // const percentage1 = 95;
  // const percentage2 = 90;
  // const percentage3 = 80;
  // const percentage4 = 70;
  const stroke = 1;
  const [percentage1, setPercentage] = useState(0);
  const [percentage2, setPercentage1] = useState(0);
  const [percentage3, setPercentage2] = useState(0);
  const [percentage4, setPercentage3] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage1 < 95) {
        setPercentage(percentage1 + 1);
      }
    }, 20);
  }, [percentage1]);
  

  useEffect(() => {
    setTimeout(() => {
      if (percentage2 < 90) {
        setPercentage1(percentage2 + 1);
      }
    }, 20);
  }, [percentage2]);

  useEffect(() => {
    setTimeout(() => {
      if (percentage3 < 80) {
        setPercentage2(percentage3 + 1);
      }
    }, 20);
  }, [percentage3]);

  useEffect(() => {
    setTimeout(() => {
      if (percentage4 < 70) {
        setPercentage3(percentage4 + 1);
      }
    }, 20);
  }, [percentage4]);
  
  // const isVisible = true;
  
   
  return (
    
    <section className={styles.dataMerger}>
    
    <div className={styles.certification}>
    <h1 className={styles.data_box}>
      <p className={styles.title_text}>Why choose us</p>
      <p className={styles.title_disc}>It’s our attention to the small stuff and making a big impact. You want results, we have found that best way to deliver them is to train through live hands-on best in class curriculam, which we promise to deliver on each of our workshops and training programs. Our prices are way too fair. We don't believe in making money; we believe in providing you the best knowledge, and to help you grow. The cost is only to cover up our logistics.</p>
    </h1>
    <ReactVisibilitySensor onChange={0} delayedCall>

    <div className={styles.row}>
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
      <CircularProgressbar value={percentage1} strokeWidth={stroke} styles={buildStyles({textSize: '16px',pathTransitionDuration: 2,pathColor: `rgba(256, 256, 256, ${percentage1 / 100})`,textColor: '#fff',trailColor: '#000',backgroundColor: '#fff',
  })}/>
      <div className={styles.title_count}>95%</div>
      <span className={styles.title_disc_per}>Best Rate on <br/><span className={styles.title_disc_per_1}>Investment</span></span>
      </div>
    
      <div className={`${styles.flex_row} ${styles['col-2']}`}>
      <CircularProgressbar value={percentage2} strokeWidth={stroke} styles={buildStyles({textSize: '16px',pathTransitionDuration: 2,pathColor: `rgba(256, 256, 256, ${percentage1 / 100})`,textColor: '#fff',trailColor: '#000',backgroundColor: '#fff',
  })}/>
      <div className={styles.title_count}>90%</div>
      <span className={styles.title_disc_per}>Outstanding Course <br/><span className={styles.title_disc_per_1}>Curriculum</span></span>
      </div>

      <div className={`${styles.flex_row} ${styles['col-2']}`}>
      <CircularProgressbar value={percentage3} strokeWidth={stroke} styles={buildStyles({textSize: '16px',pathTransitionDuration: 2,pathColor: `rgba(256, 256, 256, ${percentage1 / 100})`,textColor: '#fff',trailColor: '#000',backgroundColor: '#fff',
  })}/>
      <div className={styles.title_count}>80%</div>
      <span className={styles.title_disc_per}>Hands-on  <br/><span className={styles.title_disc_per_1}>Training</span></span>
      </div>

      <div className={`${styles.flex_row} ${styles['col-2']}`}>
      <CircularProgressbar value={percentage4} strokeWidth={stroke} styles={buildStyles({textSize: '16px',pathTransitionDuration: 2,pathColor: `rgba(256, 256, 256, ${percentage1 / 100})`,textColor: '#fff',trailColor: '#000',backgroundColor: '#fff',
  })}/>
      <div className={styles.title_count}>70%</div>
      <span className={styles.title_disc_per}>Community  <br/><span className={styles.title_disc_per_1}>Build up Support</span></span>
      </div>

    </div>
    </ReactVisibilitySensor>

    
    </div>

  
  </section>
  );
};

export default WhyChooseUs;
