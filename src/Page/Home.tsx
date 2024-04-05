import {
  ContactForm,
  Footer,
  Header,
  HowAreWeDiffenrent,
  Investigation,
  InvestigationCertificate,
  MainSection,
  Navbar,
  // PortfolioServices,
  Relation,
  ReviewFooter,
  Services,
  CompanyLogoSlider,
} from "../components";
// import Carousel from "../components/PortfolioServices/Service";
import styles from "./css/Home.module.css";
// import Slider from "react-infinite-logo-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/PortfolioServices/Service";
export default function App() {
  return (
    <div className={styles.desktop1}>
      <Navbar />
      <Header />
      <Services />
      <section className={styles.frameText}>
        <div className={styles.frameImage}>
          <h1 className={styles.howAre}>{`HOW ARE `}</h1>
          <HowAreWeDiffenrent />
          <MainSection />
        </div>
      </section>
      {/* <PortfolioServices /> */}
      <Carousel />
      <section className={styles.contentBoxes}>
        <div className={styles.frameParent}>
          <b className={styles.learner}>Learner</b>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>What RELATIONS</p>
            <p className={styles.areTelling}>are telling?</p>
          </b>
        </div>
      </section>
      <Relation />
      {/* Our Relations */}
      <section className={styles.servicesFrame}>
        <b className={styles.ourRelationsWorkContainer}>
          <p className={styles.ourRelations}>OUR RELATIONS</p>
          <p className={styles.workAt}>WORK AT</p>
        </b>
      </section>

      <CompanyLogoSlider reverseDirection={false} extraPadding={false}  />
      <CompanyLogoSlider reverseDirection={true} extraPadding={true} />
      <section className={styles.academicPartners}>
        <Investigation />
        <InvestigationCertificate />
      </section>
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
    </div>
  );
}
