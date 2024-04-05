
import {
  Navbar,
  Details,
  AboutServices,
  WhyChooseUs,
  JoinOurWorld,
  ContactForm,
  Footer,
  ReviewFooter
} from "../components";
import styles from "./css/about.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import './css/about.module.css';

function Trainning() {
  return (
    <>
      <Navbar />
      <section className={styles.dataMerger}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>We strengthen</p>
          <p className={styles.organisation}>organisation</p>
        </h1>
        <div className={styles.certification}>
        <h1 className={styles.data_box}>
          <p className={styles.title_text}>Costly Certificates != True Knowledge</p>
          <p className={styles.title_disc}>We believe in equal learning opportunities around the world on InfoSec Domain. Our instructors design courses that are easily accessible to everyone and MOST Budget friendly. You can download handful resources during each course for better learning. We are dedicated to bring more courses so you can have a larger variety of courses to choose from. Our main focus is to provide you BEST KNOWLEDGE yet in Cost effective way!</p>
        </h1>
        <button className={styles.am}>
            <b className={styles.contactUs}>Contact Us</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button>
        </div>
      </section>
      <Details />
      <AboutServices />
      <WhyChooseUs/>
      <JoinOurWorld/>
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
    </>
  );
}

export default Trainning;
