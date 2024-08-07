import { FunctionComponent } from "react";
import styles from "./TiteInstructors.module.css";
import Carousel from "../TiteInstructorsCarousel/TiteInstructorsCarousel";
const TiteInstructors: FunctionComponent = () => {
  return (
    <>
      <section className={` ${styles.contentBoxes}`}>
        <div className={`container ${styles.paddingView} `}>
          <div className="row ">
            <div className="col-lg-11">
              <p className={styles.BcadLabs}>Main Instructors</p>
              
            </div>
            <div className="col-lg-1 d-flex justify-content-end align-items-start">
              
            </div>
          </div>

          <div className="row mt-0 justify-content-between">
            
          <Carousel />
          
          </div>

          <div className="row mt-5 d-none pt-1">
            <div className="col-lg-11">
              <p className={`${styles.BcadLabs} ${styles.BcadLabsMobile}`}>Watch this to feel</p>
              <p className={styles.SetupIn}>the aroma of what we are cooking!!</p>
            </div>
            <div className="col-lg-1 d-flex justify-content-end align-items-start">
            </div>

            <div className={`col-lg-12 mt-5 ${styles.paddingRightOff}`}>
            <iframe width="100%" height="615" src="https://www.youtube.com/embed/96O9ghOyhbE?si=1ZAx6TyeYL_fIWkT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TiteInstructors;
