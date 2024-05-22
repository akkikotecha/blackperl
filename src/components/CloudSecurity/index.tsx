import styles from "./CloudSecurity.module.css";
import CloudSecurityService from "./CloudSecurityService";
const CloudSecurity = () => {
  return (
    <>
    <div className="container mt-5 ">
    <div className="row text-center mb-5 pt-4">
        <h1 className={styles.workAt}>Cloud Security</h1>
        </div>
        </div>

        <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-4 col-md-6">
          <CloudSecurityService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Cloud Security- AWS EC2 Incident Response"
          dis="Master AWS EC2 Incident Response: Efficiently handle security incidents, investigate them, strengthen your incident handling skills to detect, protect..."
          img_url="../../../certificate/Cloud Security.png"
          redirect_url="https://academy.blackperldfir.com/learn/aws-ec2-ir"
          price="2,000.00"
        />
        </div>

        </div>
        </div>

    </>
  );
};

export default CloudSecurity;
