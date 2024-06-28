import styles from "./CourseBundles.module.css";
import CourseBundlesService from "./CourseBundles";
const CourseBundles = () => {
  return (
    <>
    <div className="container mt-5 pt-4">
    <div className="row text-center mb-5">
        <h1 className={styles.workAt}>Course Bundles</h1>
        </div>
        </div>

        <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-4 col-md-6">
          <CourseBundlesService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Blue Team Bundle"
          dis="Blue Team Bundle<br/><br/><br/><br/><br/>"
          img_url="../../../certificate/power_bundle.png"
          redirect_url="https://academy.blackperldfir.com/learn/blueteam-bundle"
          price="17,150.00"

        />
        </div>
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
        <CourseBundlesService
          // groupPrivacyPolicy="pending_I0:208;133:245"
          title="Challenge Bundle-December 2023"
          dis="This Bundle is curated based on BlackPerl DFIR Academy December 2023 Release which has 3 Challenges in them. The Challenges are made from real life usecase and with study material. So you learn and play!!"
          img_url="../../../certificate/Course Bundle 2.png"
          redirect_url="https://academy.blackperldfir.com/learn/ch-dc-bundle-2023"
          price="1,499.00"

        />
        </div>
        </div>
        </div>

    </>
  );
};

export default CourseBundles;
