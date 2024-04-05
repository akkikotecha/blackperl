import { FunctionComponent } from "react";
import styles from "./EnrolNowService.module.css";
import ReactStars from "react-rating-stars-component";

export type DetectType = {
  img_url?: string;
  title?: string;
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
      <img src="../../../training/zero_to_hero.png" />
    </div>
    
    <div className={styles.cards_box}>
      <div className={styles.row}>
        <div className={styles.flex_col}>
    <img src={img_url}  className={styles.topSet} />
    </div>
    <div className={[styles.flex_col,styles.alignSet].join(" ")}>
    <ReactStars
    count={5}
    size={24}
    value={3.5}
    isHalf={true}
    edit={false}
    activeColor="#ffd700"
  /><span className={styles.span_count}>4.0</span>
  </div>
  </div>
    <span className={styles.advance}>Beginner - Advanced</span>
      <h1 className={styles.cards_title}>{title}</h1>

      <div className={styles.cards_content}>
        <p>
        {dis}
        </p>
      </div>
    
    </div>

    <div className={styles.cards_footer}>
    <button className={styles.advance_button}>Start: 4th March 2024 | End: 29th June 2024</button>
      <a href="#">Enrol Now</a>
    </div>
  </div>
  );
};

export default EnrolNowService;
