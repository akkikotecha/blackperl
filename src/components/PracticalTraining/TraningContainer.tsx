import React from "react";
import styles from "./TranningContainer.module.css";
import TranningCon from "./tranning";
const TraningContainer = () => {
  return (
    <>
      <section className={styles.rectangleB}>
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_1.png"
          detect="Lifetime Access <br/>
          to Course"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_2.png"
          detect="GBs of Practice<br/>
          Dataset"
          detect_data="You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs."
        />
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_3.png"
          detect="Practical<br/>
          Exams"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_4.png"
          detect="Dedicated<br/>
          Mentorship"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_5.png"
          detect="Live Lab<br/>
          Access"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_6.png"
          detect="Vendor<br/>
          Nutral"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
         <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_7.png"
          detect="Toxic-Free<br/>
          Support"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_8.png"
          detect="Career Focused<br/>
          Engagement"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
        <TranningCon
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../training/prac_tran_9.png"
          detect="Discounts<br/><br/>"
          detect_data="Receive lifetime access to video-led training that was developed to help guide you through a 
          hands-on learning experience."
        />
      </section>
    </>
  );
};

export default TraningContainer;
