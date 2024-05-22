import styles from "./SecurityAnalyst.module.css";
import SecurityAnalystService from "./SecurityAnalystService";
const SecurityAnalyst = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center mb-5">
          <h1 className={styles.workAt}>Security Analyst</h1>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <SecurityAnalystService
              // groupPrivacyPolicy="pending_I0:208;133:245"
              title="Security Operation <br/> (SecOps) 101"
              dis="Master the essentials of SecOps with this master class. Gain the knowledge of DFIR, threat intelligence, VAPT, log analysis, security monitoring and understand their functions so that you can face your next..."
              img_url="../../../certificate/Secops1.png"
              redirect_url="https://academy.blackperldfir.com/learn/secops101"
              price="1,500.00"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <SecurityAnalystService
              // groupPrivacyPolicy="pending_I0:208;133:245"
              title="Security Mastery with QRadar SIEM"
              dis="Master the art of security with QRadar SIEM: Become a security expert with QRadar SIEM: Master threat detection, response strategies, and data protection. Your journey to security excellence!"
              img_url="../../../certificate/Security Master1.png"
              redirect_url="https://academy.blackperldfir.com/learn/QRadar-Pro"
              price="2,500.00"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityAnalyst;
