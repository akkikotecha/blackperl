import { FunctionComponent } from "react";
import styles from "./SecurityAnalystService.module.css";

export type DetectType = {
  img_url?: string;
  title: string;
  dis?: string;
};

const EnrolNowService: FunctionComponent<DetectType> = ({
  title,
  dis,
  img_url
}) => {
  return (
    <div className={styles.cards}>
    <div className={styles.cards_image}>
      <img src={img_url}/>
    </div>
    
    <div className={styles.cards_box}>
    
    
      <h1 className={styles.cards_title} dangerouslySetInnerHTML={{__html: title}}></h1>

      <div className={styles.cards_content}>
        <p>
        {dis}
        </p>
      </div>
      
    
    </div>
    <hr className={styles.LineSet} />
    <div className={styles.cards_footer}>
    <h1 className={styles.cards_footer_title}>₹ 1,500.00</h1>
    <div className="row px-0">
    <div className="col-lg-6 col-md-6 text-start">
   
    <a href="#">Start Free Trial</a>
 
    </div>
    <div className="col-lg-6 col-md-6 text-end">
    <button className={styles.advance_button}>BUY NOW</button>  
    </div>
    </div>
    </div>
  </div>
  );
};

export default EnrolNowService;
