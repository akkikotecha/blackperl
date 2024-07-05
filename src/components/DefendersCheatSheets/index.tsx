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
              title="Tactical Threat Intelligence Analyst<br/><br/>"
              dis="Click on the KNOW MORE button, and you will find all the essential cheatsheets conveniently compiled in one place. These cheatsheets offer quick tips, shortcuts, and step-by-step guides designed to help you keep things handy."
              img_url="../../../certificate/thumbnail_defender.jpg"
              redirect_url="https://github.com/BlackPerl-DFIR/IR-Cheatsheets"
              price="Free"
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
            <DefendersCheatSheetsService
              // groupPrivacyPolicy="pending_I0:208;133:245"
              title="BCDE- BlackPerl Certified Detection Engineer"
              dis="Click on the KNOW MORE button, and you will find all the essential cheatsheets conveniently compiled in one place. These cheatsheets offer quick tips, shortcuts, and step-by-step guides designed to help you keep things handy."
              img_url="../../../certificate/thumbnail_defender.jpg"
              redirect_url="https://github.com/BlackPerl-DFIR/IR-Cheatsheets"
              price="Free"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefendersCheatSheets;
