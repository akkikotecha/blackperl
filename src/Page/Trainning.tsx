
import {
    Navbar,
    EnrolNow,
    PracticalTraining,
    ContactForm,
    Footer,
    ReviewFooter
  } from "../components";
  import styles from "./css/trainning.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/trainning.module.css';
  
  function Trainning() {
    return (
      <>
        <Navbar />
        <section className={styles.dataMerger}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>Live Training</p>
            <p className={styles.organisation}>LEARN HOW TO HACK,<br/>THEN DEFEND IT</p>
          </h1>
        </section>

        <EnrolNow />
        <PracticalTraining/>
        <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      </>
    );
  }
  
  export default Trainning;
  