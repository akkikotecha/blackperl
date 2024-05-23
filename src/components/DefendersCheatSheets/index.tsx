import styles from "./DefendersCheatSheets.module.css";
import DefendersCheatSheetsService from "./DefendersCheatSheets";
const DefendersCheatSheets = () => {
  return (
    <>
    <div className="container mt-5 pt-4">
    <div className="row text-center mb-5">
        <h1 className={styles.workAt}>Defender's Cheat Sheets</h1>
        </div>
        </div>

        <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-4 col-md-6">
          <DefendersCheatSheetsService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Tactical Threat Intelligence Analyst"
          dis="The course is aimed to provide learners with comprehensive knowledge and practical skills in the subject of threat intelligence. This course takes you from novice to expert, from learning the principles to hands-on experience. "
          img_url="../../../certificate/tita_one.png"
          redirect_url="https://academy.blackperldfir.com/learn/ttia-join"
          price="1,999.00"

        />
        </div>
        <div className="col-lg-4 col-md-6">
        <DefendersCheatSheetsService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="BCDE- BlackPerl Certified Detection Engineer"
          dis="The course is aimed to provide learners with comprehensive knowledge and practical skills in the subject of Detection Engineering Process. This course takes you from novice to expert, from learning..."
          img_url="../../../certificate/tita_one.png"
          redirect_url="https://academy.blackperldfir.com/learn/bcde-live"
          price="2,999.00"

        />
        </div>
        </div>
        </div>

    </>
  );
};

export default DefendersCheatSheets;
