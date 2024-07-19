/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Navbar,
  ContactForm,
  Footer,
  SecurityAnalyst,
  ThreatHunting,
  CloudSecurity,
  ReviewFooter,
  DigitalForensics,
  MalwareAnalysis,
  DefenderLabs,
  DefendersCheatSheets,
  CourseBundles

} from "../components";
import styles from "./css/Certification.module.css";
import stylesTwo from "./css/Home.module.css";
 
import stylesThree from "./../components/GetInTouchForm/GetInTouchForm.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Certification.module.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
 import { yupResolver } from "@hookform/resolvers/yup";

 import * as yup from "yup";
 import { useForm } from "react-hook-form";
import axios from "axios";

function LiveTrainning() {


   const [showModal, setShowModal] = useState(false);

   const [planId, setPlanId] = useState("");
   const [totalCount, setTotalCount] = useState(0);

   const handleSetData = (planId:string,totalCount:number) => {
     
   setPlanId(planId);
   setTotalCount(totalCount);
  
     
   };


      const handleClose = () => {
        setShowModal(false);
          setPlanId("");
          setTotalCount(0);
      
      };
       
   const handleOpen = () => {
     setShowModal(true);
   };

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
const schema = yup
  .object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email ID is required"),
    mobile: yup
      .string()
      .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
      .required("Mobile number is required"),
  })
  .required();

const {
  register,
  formState: { errors },
  handleSubmit,
  reset,
} = useForm({
  defaultValues: {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  },
  resolver: yupResolver(schema),
  //
  mode: "all",
});

const onSubmit = async (data: any) => {
  console.log("Submitted data is", data);

  try {

    const formattedData = {
      plan_id: planId,
      total_count: totalCount,
      firstname: data?.firstname,
      lastname: data?.lastname,
      email: data?.email,
      mobile: data?.mobile,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/subscription/add-subscription`,
      formattedData
    );
const redirectUrl = response.data.URL;

// Redirect the user to the new URL
window.location.href = redirectUrl;
reset();  
    console.log("API response:", response);
    
  } catch (error) {
    console.error("API request failed:", error);
    // Handle error scenarios here
  }
};



  return (
    <>
      <Navbar />
      <section className={styles.dataMerger}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>CERTIFICATIONS</p>
        </h1>
      </section>
      <div className="container mt-0 pt-0">
        <div className="row text-center">
          <h2 className={styles.organisation}>
            Want to save more money, go for our subscription
          </h2>
        </div>
      </div>

      <div
        className={`container mt-0 pt-0 mb-5 pb-0 ${styles.containerSet} ${styles.DesktopShow}`}
      >
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-3 col-md-6 p-4 pt-5">
            <h2 className={styles.priceTag}>
              1,999INR<span> / month</span>
            </h2>
            <h2 className={styles.priceMonthTag}>1 Months</h2>
            <p className={styles.priceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  one month.{" "}
                </li>
                <li>Billing renews monthly unless cancelled.</li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>

            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_ONE_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_ONE_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto  ${styles.PriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4  pb-5 pt-5">
            <h2 className={styles.priceTag}>
              4,999INR<span> / 3 months</span>
            </h2>
            <h2 className={styles.priceMonthTag}>3 Month (Save 998INR)</h2>
            <p className={styles.priceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  three months.{" "}
                </li>
                <li>Billing renews 3 monthly unless cancelled. </li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>

            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_THREE_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_THREE_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4   pb-5 pt-5">
            <h2 className={styles.priceTag}>
              8,999INR<span> / 6 months</span>
            </h2>
            <h2 className={styles.priceMonthTag}>6 Month (Save 2995INR)</h2>
            <p className={styles.priceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  three month.{" "}
                </li>
                <li> Billing renews 6 monthly unless cancelled.</li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>
            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_SIX_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_SIX_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
          <div className={`col-lg-3 col-md-6 p-4 pt-5  ${styles.PopularSet}`}>
            <div className="text-right mb-4">
              <span className={styles.populartext}>MOST POPULAR</span>
            </div>
            <h2 className={styles.PopularpriceTag}>
              17,999INR<span> / year</span>
            </h2>
            <h2 className={styles.PopularpriceMonthTag}>
              12 Month (Save 5,989INR)
            </h2>
            <p className={styles.PopularpriceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  three months.{" "}
                </li>
                <li>Billing renews yearly unless cancelled.</li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>
            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_TWELVE_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_TWELVE_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto ${styles.PopularPriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container mt-0 pt-0 mb-4 pb-0 ${styles.marginBottomSet} ${styles.containerSet} ${styles.mobileShow}`}
      >
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-3 col-md-6 pt-5">
            <h2 className={styles.priceTag}>
              1,999INR<span> / month</span>
            </h2>
            <h2 className={styles.priceMonthTag}>1 Months</h2>
            <p className={styles.priceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  one month.{" "}
                </li>
                <li>Billing renews monthly unless cancelled.</li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>

            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_ONE_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_ONE_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto mt-3 ${styles.PriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  mt-4 pt-5">
            <h2 className={styles.priceTag}>
              4,999INR<span> / 3 months</span>
            </h2>
            <h2 className={styles.priceMonthTag}>3 Month (Save 998INR)</h2>
            <p className={styles.priceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  three months.{" "}
                </li>
                <li>Billing renews 3 monthly unless cancelled. </li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>

            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_THREE_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_THREE_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto  mt-3 ${styles.PriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  mt-4 pb-5 pt-5">
            <h2 className={styles.priceTag}>
              8,999INR<span> / 6 months</span>
            </h2>
            <h2 className={styles.priceMonthTag}>6 Month (Save 2995INR)</h2>
            <p className={styles.priceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  three month.{" "}
                </li>
                <li> Billing renews 6 monthly unless cancelled.</li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>
            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_SIX_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_SIX_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto  mt-3 ${styles.PriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
          <div
            className={`col-lg-3 col-md-6   mt-4  ${styles.PopularSetMobile}`}
          >
            <div className="text-right mb-4">
              <span className={styles.populartext}>MOST POPULAR</span>
            </div>
            <h2 className={styles.PopularpriceTag}>
              17,999INR<span> / year</span>
            </h2>
            <h2 className={styles.PopularpriceMonthTag}>
              12 Month (Save 5,989INR)
            </h2>
            <p className={styles.PopularpriceDisTag}>
              <ul
                style={{ listStyle: "outside", paddingLeft: "1rem" }}
                className={styles.UlCertificare}
              >
                <li>
                  Access to our entire academy(Course, Lab, Certification) for
                  three months.{" "}
                </li>
                <li>Billing renews yearly unless cancelled.</li>
                <li>
                  This is a subscription product billed on a monthly basis until
                  you cancel.{" "}
                </li>
                <li>Cancel anytime. </li>
                <li>
                  Subscription Plan doesn’t include our Engagement Program. i.e.
                  Cyber Career Surge aka BCAD.
                </li>
              </ul>
            </p>
            <div className="text-center">
              <button
                onClick={() => {
                  handleOpen();
                  handleSetData(
                    `${import.meta.env.VITE_TWELVE_MONTH_PLAN_ID}`,
                    import.meta.env.VITE_TWELVE_MONTH_TOTAL
                  );
                }}
                className={`btn btn-warning mx-auto mt-3 mb-4 ${styles.PopularPriceChooseButton}`}
              >
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <SecurityAnalyst />
      <ThreatHunting />
      <CloudSecurity />

      <DigitalForensics />
      <MalwareAnalysis />
      <DefenderLabs />
      <DefendersCheatSheets />
      <CourseBundles />
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stylesTwo.PaddingModalSet}
      >
        <Modal.Header
          closeButton
          className={stylesTwo.positionFix}
        ></Modal.Header>

        <Modal.Body className={stylesTwo.ModalCurv}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className={`${stylesThree.contactForm}`}>
              <div className={`row px-0 w-100 ${stylesThree.chooseModal}  `}>
                <div className="col-lg-6 paddingSetLG ">
                  <input
                    className={`${stylesThree.enterName} ${stylesThree.enyerSecondNameWidth}`}
                    placeholder="First Name"
                    type="text"
                    {...register("firstname")}
                  />
                  <div className={`mt-2 text-danger block text-sm`}>
                    {errors?.firstname?.message}
                  </div>
                </div>
                <div className="col-lg-6 paddingSetLG">
                  <input
                    className={`${stylesThree.enterName} ${stylesThree.enyerSecondNameWidth}`}
                    placeholder="Last Name"
                    type="text"
                    {...register("lastname")}
                  />
                  <div className={`mt-2 text-danger block text-sm`}>
                    {errors?.lastname?.message}
                  </div>
                </div>
              </div>

              <div className={`row w-100 ${stylesThree.chooseModal}`}>
                <div className="col-lg-6 paddingSetLG">
                  <input
                    className={`${stylesThree.enterName} ${stylesThree.enyerSecondNameWidth}`}
                    placeholder="Email"
                    type="text"
                    {...register("email")}
                  />
                  <div className={`mt-2 text-danger block text-sm`}>
                    {errors?.firstname?.message}
                  </div>
                </div>
                <div className="col-lg-6 paddingSetLG">
                  <input
                    className={`${stylesThree.enterName} ${stylesThree.enyerSecondNameWidth}`}
                    placeholder="Mobile Number"
                    type="text"
                    {...register("mobile")}
                  />
                  <div className={`mt-2 text-danger block text-sm`}>
                    {errors?.mobile?.message}
                  </div>
                </div>
              </div>

              <div
                className={` ${stylesThree.privacyPolicyText} ${stylesThree.chooseModalSubmit}`}
              >
                <button className={stylesThree.am} type="submit">
                  <b className={stylesThree.contactUs}>Submit</b>
                  <img
                    className={stylesThree.amChild}
                    alt=""
                    src="/group-457.svg"
                  />
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LiveTrainning;
