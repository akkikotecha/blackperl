import { FunctionComponent } from "react";
import styles from "./ReviewCertificateAll.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
const FrameComponent: FunctionComponent = () => {
  const data = [
    {
      imgURL: "/review/16.png",
    },
    {
      imgURL: "/review/17.png",
    },
    {
      imgURL: "/review/18.png",
    },
    {
      imgURL: "/review/19.png",
    },
    {
      imgURL: "/review/20.png",
    },
    {
      imgURL: "/review/21.png",
    },
    {
      imgURL: "/review/22.png",
    },
    {
      imgURL: "/review/23.png",
    },
    {
      imgURL: "/review/24.png",
    },
    {
      imgURL: "/review/24_1.png",
    },
    {
      imgURL: "/review/25.png",
    },
    {
      imgURL: "/review/25_1.png",
    },
    {
      imgURL: "/review/26.png",
    },
    {
      imgURL: "/review/27.png",
    },
    {
      imgURL: "/review/28.png",
    },
    {
      imgURL: "/review/28_1.png",
    },
    {
      imgURL: "/review/29.png",
    },
    {
      imgURL: "/review/30.png",
    },
    {
      imgURL: "/review/31.png",
    },
    {
      imgURL: "/review/32.png",
    },
    {
      imgURL: "/review/33.PNG",
    },
    {
      imgURL: "/review/34.PNG",
    },
    {
      imgURL: "/review/35.PNG",
    },
    {
      imgURL: "/review/36.PNG",
    },
    {
      imgURL: "/review/37.png",
    },
    {
      imgURL: "/review/38.png",
    },

  ];

  return (
    <section className={styles.callToActionWrapper}>
      <div className={styles.callToAction}>
        <div className="container ps-5">
          <div className={`row ps-1 ${styles.mobileShowHide}`}>
            {data.map((single) => (
              <div className="col-lg-6 col-md-6">
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

          <div
            className={`row ps-1 justify-content-center ${styles.mobileShow}`}
          >
            <Carousel>
              {data.map((single) => (
                <Carousel.Item>
                  <div className="col-lg-12 col-md-12 ps-lg-5 ps-sm-5 ps-md-5">
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
                </Carousel.Item>
              ))}
              {/* <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
            </Carousel>
          </div>
        </div>
        <div className="container ps-0">
          <div className="row">
            <div className="col-lg-12 text-center mt-5 ps-0 mb-5">
              <Link to="/review"> <button className={`btn btn-warning ${styles.btnViewMore}`}>
                Back
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
