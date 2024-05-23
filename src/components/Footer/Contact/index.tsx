import { FunctionComponent } from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";

const OurLogoFrame: FunctionComponent = () => {
  return (
    <div className={styles.ourLogoFrame}>
      <div className={styles.ourLogoFrameChild} />
      <div className={styles.socialMediaLinksFrame}>
        <div className={styles.socialMediaLinksFrameInner}>
          <div className={styles.getInTouchParent}>
            <h1 className={styles.getInTouchContainer}>
              <p className={styles.getIn}>{`Get In `}</p>
              <p className={styles.touch}>Touch</p>
            </h1>
            <div className={styles.contactUsButton}>
              <div className={styles.m91234}>Email :</div>
              <h3 className={styles.eHelloblackperlcom}>
                support@blackperldfir.com
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.nameInputField}>
            <div className={styles.phoneNumberFrame}>
              <input
                className={styles.enterName}
                placeholder="Enter Name"
                type="text"
              />
              {/* <div className={styles.caseClassification} /> */}
            </div>
          </div>
          <div className={styles.phoneNumberSubframe}>
            <div className={styles.frameWithPhoneNumber}>
              <div className={styles.book}>+91</div>
            </div>
  
            <input
              className={styles.frameWithPhoneNumber1}
              placeholder="Phone Number"
              type="text"
            />
          </div>
          <textarea
            className={styles.writeHereInput}
            placeholder="Write Here"
            rows={14}
            cols={32}
          />
          <div className={styles.privacyPolicyText}>
            <div className={styles.byTappingSubmitContainer}>
              <p
                className={styles.byTappingSubmit}
              >{`By tapping Submit, you agree to the following  `}</p>
              <p className={styles.privacyPolicyTermsCondi}>
              <Link to="/PrivacyPolicy"><b className={styles.privacyPolicy}>{`Privacy Policy `}</b></Link>
                <span className={styles.span}>{`&`}</span>
                <Link to="/TermAndCondition"><b
                  className={styles.termsConditions}
                >{` Terms & Conditions`}</b></Link>
              </p>
            </div>
            <button>
              <img
                className={styles.privacyPolicyTextChild}
                loading="lazy"
                alt=""
                src="/group-1171276214.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLogoFrame;
