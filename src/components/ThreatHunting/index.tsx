import styles from "./ThreatHunting.module.css";
import ThreatHuntingService from "./ThreatHuntingService";
const ThreatHunting = () => {
  return (
    <>
    <div className="container mt-5 ">
    <div className="row text-center mb-5 pt-4">
        <h1 className={styles.workAt}>Threat Hunting</h1>
        </div>
        </div>

        <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-4 col-md-6">
          <ThreatHuntingService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Threat Hunting 101"
          dis="Threat Hunting 101 to create your basic understanding about Threat Hunting and also to introduce you with right approach of doing Threat Hunt with Live Labs"
          img_url="../../../certificate/Threat Hunting 1.png"
          redirect_url="https://academy.blackperldfir.com/learn/Threat-Hunting-101"
          price="1,500.00"          
        />
        </div>
        <div className="col-lg-4  col-md-6">
        <ThreatHuntingService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Threat Hunting 201"
              dis="Threat Hunting 201 is highly focused on hunting against 2 APT groups. The course is built with real life practical experience."
              img_url="../../../certificate/Threat Hunting 2.png"
              redirect_url="https://academy.blackperldfir.com/learn/Threat-Hunting-201"
              price="2,000.00"
        />
        </div>
        </div>
        </div>

    </>
  );
};

export default ThreatHunting;
