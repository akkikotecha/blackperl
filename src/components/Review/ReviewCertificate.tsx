import { FunctionComponent } from "react";
import styles from "./ReviewCertificate.module.css";
const FrameComponent: FunctionComponent = () => {
  const data = [
    {
      imgURL: "/mask-group-1@2x.png",
    },
    {
      imgURL: "/mask-group-1@2x.png",
    },
    {
      imgURL: "/mask-group-1@2x.png",
    },
    {
      imgURL: "/mask-group-1@2x.png",
    },
    {
      imgURL: "/mask-group-1@2x.png",
    },
    {
      imgURL: "/mask-group-1@2x.png",
    },
  ];
 
  return (
    <section className={styles.callToActionWrapper}>
      <div className={styles.callToAction}>
        <div className="container ps-5">
      <div className="row">
        
            {data.map((single) => (
              <div className="col-lg-6">
                <div className={styles.nameInput}>
                  
                    <img
                      className={styles.titleprimaryleftIcon}
                      alt=""
                      src="/vector-12.svg"
                    />
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src={single.imgURL}
                    />
                  </div>
                  
               </div>
            ))}         
        </div>
        </div>
        <div className="container ps-0">
      <div className="row">
        
        <div className="col-lg-12 text-center mt-5 ps-0">
          <button className={`btn btn-warning ${styles.btnViewMore}`}>View More</button>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
