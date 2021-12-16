import React from "react";
import "./footer.scss";
import images from "../../images/export/exportImages";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fotterLogo footerTitle">
                <img src={images.Logo} alt="" />
              </div>
              <div className="foooterAddress">
                <div className="sigleAddress">
                  <i className="fas fa-map-marker-alt"></i>
                  <svg
                    width="1"
                    height="30"
                    viewBox="0 0 1 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="1" height="25" rx="0.5" fill="#31A8E0" />
                  </svg>

                  <span>
                    Plot - 99, Road - 11, Block - C, Banani,
                    <br /> Dhaka - 1213, Bangladesh.
                  </span>
                </div>
                <div className="sigleAddress">
                  <i className="fas fa-mobile-alt"></i>
                  <svg
                    className="mobileSeparetor"
                    width="1"
                    height="30"
                    viewBox="0 0 1 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="1" height="25" rx="0.5" fill="#31A8E0" />
                  </svg>

                  <span>
                    <a href="tel:+8801843331223">+8801843331223</a>
                  </span>
                </div>
                <div className="sigleAddress">
                  <i className="fab fa-telegram-plane"></i>
                  <svg
                    width="1"
                    height="30"
                    viewBox="0 0 1 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="1" height="25" rx="0.5" fill="#31A8E0" />
                  </svg>

                  <span>
                    <a href="mailto:info@agileminds.com">info@agileminds.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className=" footerTitle">
                <h3>Links</h3>
              </div>
              <div className="contactLinks">
                <div className="leftLinks">
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>Home</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>Team</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>Services</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>FAQ</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>About us</span>
                  </Link>
                </div>
                <div className="rightLinks">
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>Gallery</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>Testimonials</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>Contact</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>News</span>
                  </Link>
                  <Link to="#">
                    <svg
                      width="33"
                      height="5"
                      viewBox="0 0 33 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="2" width="30" height="1" fill="#31A8E0" />
                      <circle cx="30.5" cy="2.5" r="2.5" fill="#31A8E0" />
                    </svg>
                    <span>Portfolio</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className=" footerTitle">
                <h3>Newsletter</h3>
              </div>
              <div className="newsletter">
                <div className="newsLetterInfo">
                  <p>Send us a newsletter to get update</p>
                  <div className="inputs">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email Address"
                        aria-label="Your Email Address"
                        aria-describedby="basic-addon2"
                      />
                      <Link to="#" className="telBtn btn" id="basic-addon2">
                        <i className="fab fa-telegram-plane"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="store">
                  <div className="appStore">
                    <a href="#header">
                      <img src={images.AppStore} alt="" />
                    </a>
                  </div>
                  <div className="playStore">
                    <a href="#header">
                      <img src={images.GooglePLay} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyRight">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyrightContent">
                  <div className="leftContent">
                    <p>
                      2021 © All rights reserved |{" "}
                      <span>
                        <a href="#header">SpaceDawg</a>
                      </span>
                    </p>
                  </div>
                  <div className="rightContent">
                    <a href="#header">
                      <i className="fas fa-chevron-up"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
