import styles from "./DigitalForensics.module.css";
import DigitalForensicsService from "./DigitalForensics";
const DigitalForensics = () => {
  return (
    <>
    <div className="container mt-5 pt-4">
    <div className="row text-center mb-5">
        <h1 className={styles.workAt}>Digital Forensics and Incident Response</h1>
        </div>
        </div>

        <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-4 col-md-6">
          <DigitalForensicsService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Memory Forensics Masterclass for Incident Responders"
          dis="This is a course focused on Memory Forensics for Incident Responders and SOC Analysts."
          img_url="../../../certificate/Data Forencis 01.png"
          redirect_url="https://academy.blackperldfir.com/learn/MemFor-IR"
          price="4,500.00"
        />
        </div>
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
        <DigitalForensicsService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="DFIR 101 Master Class"
          dis="THE DFIR MASTERCLASS, Specially Designed for Security Analysts, SOC professionals who wants to upskill their game in modern world. This was a LIVE Workshop took place on 6th May &amp; 7th May and we are releasing..."
          img_url="../../../certificate/Data Forencis 02.png"
          redirect_url="https://academy.blackperldfir.com/learn/DFIR-101-Master-Class"
          price="2,999.00"
        />
        </div>
        </div>
        </div>

    </>
  );
};

export default DigitalForensics;
