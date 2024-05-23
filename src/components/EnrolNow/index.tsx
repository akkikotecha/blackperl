import styles from "./EnrolNow.module.css";
import EnrolNowService from "./EnrolNowService";
const EnrolNow = () => {
  return (
    <>
      <section className={styles.rectangleB}>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6  mt-5">
        <EnrolNowService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="BlackPerl Certified Advanced Defender- Cyber Career Surge Framework"
          dis="BCAD is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts."
          img_url="../../../training/enrol_1.png"
          title_image_url="../../../training/zero_to_hero.png"
          redirectURL="BCAD"
        />
        </div>
        <div className="col-lg-4 col-md-6  mt-5">
     
         <EnrolNowService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="BlackPerl Certified Advanced Defender- Cyber Career Surge Framework"
          dis="BCAD is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts."
          img_url="../../../training/enrol_2.png"
          title_image_url="../../../training/secondTraining.png"
          redirectURL="BCDE"
        />
         </div>
         <div className="col-lg-4 col-md-6 mt-5">
     
         <EnrolNowService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="BlackPerl Certified Advanced Defender- Cyber Career Surge Framework"
          dis="BCAD is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts."
          img_url="../../../training/enrol_3.png"
          title_image_url="../../../training/zero_to_hero.png"
          redirectURL="TTIA"
        />
        </div>
        </div>
      </section>
    </>
  );
};

export default EnrolNow;
