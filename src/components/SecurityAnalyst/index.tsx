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
              <div className="col-lg-4">
          <SecurityAnalystService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Security Operation <br/> (SecOps) 101"
          dis="We believe in equal learning opportunities around the world on InfoSec Domain. Our instructors design courses that are easily accessible to everyone and MOST Budget friendly."
          img_url="../../../certificate/certificate_1.png"
        />
        </div>
        <div className="col-lg-4">
        <SecurityAnalystService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Security Operation <br/> (SecOps) 101"
          dis="We believe in equal learning opportunities around the world on InfoSec Domain. Our instructors design courses that are easily accessible to everyone and MOST Budget friendly."
          img_url="../../../certificate/certificate_1.png"
        />
        </div>
        </div>
        </div>

    </>
  );
};

export default SecurityAnalyst;
