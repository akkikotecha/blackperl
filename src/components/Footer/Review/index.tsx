import { FunctionComponent } from "react";
import styles from "./ReviewAcademy.module.css";

const ReviewsAcademy: FunctionComponent = () => {
  return (
    <section className={styles.reviewsAcademy}>
      
      <div className={styles.academicPartnersCollabFrame}>
        <div className={styles.academicLogoFrame}>
          <img
            className={styles.academicLogoFrameChild}
            loading="lazy"
            alt=""
            src="/Vector 4.png"
          />
          <div className={styles.ourAcademicPartnersFrame}>
            <div className={styles.logoFrameA}>
              <div className={styles.ourAcademicPartners}>
                OUR ACADEMIC PARTNERS
              </div>
              <div className={styles.ourCollaborationPartners}>
                OUR COLLABORATION PARTNERS
              </div>
            </div>
            <div className={styles.ourCollaborationLogosFrame}>
              <div className={styles.firstLogoFrame}>
                <img
                  className={styles.image13Icon}
                  loading="lazy"
                  alt=""
                  src="/image-13@2x.png"
                />
                <img
                  className={styles.image14Icon}
                  loading="lazy"
                  alt=""
                  src="/image-14@2x.png"
                />
              </div>
              <img
                className={styles.image15Icon}
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footerFrame}>
        <div className={styles.footerFrameChild} />
        <div className={styles.copyrightBlackperlLtd}>
          © Copyright blackperl Ltd 2024
        </div>
        <div
          className={styles.privacyPolicy}
        ><span> <a href="https://blackperldfir.com/privacy-policy.html" target="_blank">Privacy & Policy</a> </span> <span> | </span> <span> <a href="https://blackperldfir.com/terms-conditions.html"  target="_blank">Term & Condition</a> </span> <span> | </span> <span> Contact US </span></div>
      </footer>
    </section>
  );
};

export default ReviewsAcademy;
