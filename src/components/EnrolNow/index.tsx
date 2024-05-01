import styles from "./EnrolNow.module.css";
import EnrolNowService from "./EnrolNowService";
const EnrolNow = () => {
  return (
    <>
      <section className={styles.rectangleB}>
        <EnrolNowService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="BlackPerl Certified Advanced Defender- Cyber Career Surge Framework"
          dis="BCAD is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts."
          img_url="../../../training/enrol_1.png"
          title_image_url="../../../training/zero_to_hero.png"
        />
         <EnrolNowService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="BlackPerl Certified Advanced Defender- Cyber Career Surge Framework"
          dis="BCAD is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts."
          img_url="../../../training/enrol_2.png"
          title_image_url="../../../training/secondTraining.png"
        />
         <EnrolNowService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="BlackPerl Certified Advanced Defender- Cyber Career Surge Framework"
          dis="BCAD is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts."
          img_url="../../../training/enrol_3.png"
          title_image_url="../../../training/zero_to_hero.png"
        />
      </section>
    </>
  );
};

export default EnrolNow;
