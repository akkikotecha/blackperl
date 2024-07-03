import styles from "./Services.module.css";
import Service from "./Service";
const ServiceContainer = () => {
  return (
    <>
      <section className={styles.rectangleB}>
        <Service
          // groupPrivacyPolicy="pending_I0:208;133:245"
          imageURL="../../../about/world_1.png"
          detect="INR"
          detect_data="Budget"
          itClosesAllTheSecuirtyGap="₹ 1000 to ₹ 30000"
        />
        <Service
          imageURL="../../../about/world_2.png"
          // groupPrivacyPolicy="pending_I0:209;133:246"
          detect="Joined"
          detect_data="Students"
          itClosesAllTheSecuirtyGap="10000 +"
        />
        <Service
          // groupPrivacyPolicy="pending_I0:210;133:247"
          imageURL="../../../about/world_3.png"
          detect="Free"
          detect_data="Courses"
          itClosesAllTheSecuirtyGap="55 +"
        />


      </section>
    </>
  );
};

export default ServiceContainer;
