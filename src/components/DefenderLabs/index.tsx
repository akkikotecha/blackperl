import styles from "./DefenderLabs.module.css";
import DefenderLabsService from "./DefenderLabs";
const DefenderLabs = () => {
  return (
    <>
    <div className="container mt-5 pt-4">
    <div className="row text-center mb-5">
        <h1 className={styles.workAt}>Defender Labs</h1>
        </div>
        </div>

        <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-4 col-md-6">
          <DefenderLabsService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="SRUM Analysis"
          dis="This is a Blue Team challenge where you will be responding to an incident took place on a windows endpoint and you will perform SRUM analysis."
          img_url="../../../certificate/Defender Labs 1.jpg"
          redirect_url="https://academy.blackperldfir.com/learn/srum-analysis"
          price="1,000.00"
        />
        </div>
        <div className="col-lg-4 col-md-6">
        <DefenderLabsService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Registry Deep Dive"
          dis="This is a Blue Team challenge where you will be responding to an incident took place on a windows endpoint and you will perform registry analysis."
          img_url="../../../certificate/Defender Labs 2.jpg"
          redirect_url="https://academy.blackperldfir.com/learn/registry-deep-dive"
          price="1,000.00"

        />
        </div>
        <div className="col-lg-4 col-md-6">
        <DefenderLabsService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Cloud Website Takeover"
          dis="This is a Blue Team challenge where you will be responding to an incident took place on customer..."
          img_url="../../../certificate/Defender Labs 3.jpg"
          redirect_url="https://academy.blackperldfir.com/learn/cloud-website-takeover"
          price="1,000.00"

        />
        </div>
        </div>
        </div>

    </>
  );
};

export default DefenderLabs;
