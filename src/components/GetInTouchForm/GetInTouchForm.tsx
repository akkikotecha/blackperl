import { FunctionComponent } from "react";
import styles from "./GetInTouchForm.module.css";
const GetInTouchForm: FunctionComponent = () => {
  // const mapRef = useRef(null); // Specify the type of ref

  // const handleZoomIn = () => {
  //   if (mapRef.current) { // Check if mapRef.current is not null
  //     mapRef.current.contentWindow.postMessage('{"event":"command","func":"zoomIn"}', '*');
  //   }
  // };

  // const handleZoomOut = () => {
  //   if (mapRef.current) { // Check if mapRef.current is not null
  //     mapRef.current.contentWindow.postMessage('{"event":"command","func":"zoomOut"}', '*');
  //   }
  // };


  return (
    
    <section className={`container-fluid ${styles.callToActionWrapperMargin}`}>
      <div className="row mb-5 align-self-start">
        <div className="col-lg-6 px-0">
        <div className="map-container">
        <div className="map">

  <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4551165681614!2d77.74910980426615!3d12.94270349049472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d9f7fc7320d%3A0x6f922fb8c2b9c2b2!2sSamudri%20nilaya!5e0!3m2!1sen!2sin!4v1713423621140!5m2!1sen!2sin&night_mode=true" width="100%" height="680"  loading="lazy"  style={{"filter": "invert(90%)"}}></iframe>
  <div className="zoom-controls">
          {/* <button className="zoom-in">+</button>
                  <button className="zoom-out" >-</button> */}
        </div>
</div>
</div>

        </div>
        <div className="col-lg-6 ps-5">
          <h1 className={styles.title_text}>Get in touch</h1>
          <div className={styles.contactForm}>
            <div className="row px-0 w-100">
            <div className="col-lg-6 paddingSetLG">
            <input
                className={styles.enterName}
                placeholder="First Name"
                type="text"
              />
          </div>
          <div className="col-lg-6 px-2 paddingSetLGRight">
          <input
                className={styles.enterName}
                placeholder="Last Name"
                type="text"
              />
          </div>
          </div>
        
          <div className="row w-100">

              <input
                className={styles.enterName}
                placeholder="Email Address"
                type="text"
              />
              {/* <div className={styles.caseClassification} /> */}
            
          </div>
          <div className="row w-100">

              <input
                className={styles.enterName}
                placeholder="Your Query"
                type="text"
              />
              {/* <div className={styles.caseClassification} /> */}
            
          </div>
          <div className="row w-100">
          <textarea
            className={styles.writeHereInput}
            placeholder="Your Message Here"
            
          />
          </div>
          <div className={styles.privacyPolicyText}>
            <div className={styles.byTappingSubmitContainer}>
              <p
                className={styles.byTappingSubmit}
              >{`By tapping Submit, you agree to the following  `}</p>
              <p className={styles.privacyPolicyTermsCondi}>
                <a href="https://blackperldfir.com/privacy-policy.html" target="_blank"><b className={styles.privacyPolicy}>{`Privacy Policy `}</b></a>
                <span className={styles.span}>{`&`}</span>
                <a href="https://blackperldfir.com/terms-conditions.html"  target="_blank"><b
                  className={styles.termsConditions}
                >{` Terms & Conditions`}</b></a>
              </p>
            </div>
            {/* <button>
              <img
                className={styles.privacyPolicyTextChild}
                loading="lazy"
                alt=""
                src="/group-1171276214.svg"
              />
            </button> */}
             <button className={styles.am}>
            <b className={styles.contactUs}>Submit</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button>
          </div>
        </div>
        </div>
        </div>
        
    </section>
  );
};

export default GetInTouchForm;
