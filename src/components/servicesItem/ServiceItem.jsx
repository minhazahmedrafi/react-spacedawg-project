import React from "react";
import "./serviceitem.scss";
import { Link } from "react-router-dom";
import images from "../../images/export/exportImages";

const ServiceItem = () => {
  return (
    <section className="program" id="program">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="singleProgram">
              <div className="topIcon">
                <img src={images.Program01} alt="" />
                <h4>Business Planing</h4>
                <p>
                  The development of your next business plan will be executed by
                  a brilliant team who will indicate your grand success.
                </p>
              </div>
              <div className="programOverlayContent">
                <div className="overlayContent">
                  <h3>Business Planning</h3>
                  <Link to="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="19.5" stroke="#fff" />
                      <path
                        d="M20 13V27"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 20H27"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="singleProgram">
              <div className="topIcon">
                <img src={images.Program01} alt="" />
                <h4>Program Managment</h4>
                <p>
                  The development of your next business plan will be executed by
                  a brilliant team who will indicate your grand success.
                </p>
              </div>
              <div className="programOverlayContent">
                <div className="overlayContent">
                  <h3>Program Managment</h3>
                  <Link to="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="19.5" stroke="#fff" />
                      <path
                        d="M20 13V27"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 20H27"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="singleProgram">
              <div className="topIcon">
                <img src={images.Design01} alt="" />
                <h4>Design Solution</h4>
                <p>
                  The development of your next business plan will be executed by
                  a brilliant team who will indicate your grand success.
                </p>
              </div>
              <div className="programOverlayContent">
                <div className="overlayContent">
                  <h3>Design Solution</h3>
                  <Link to="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="19.5" stroke="#fff" />
                      <path
                        d="M20 13V27"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 20H27"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItem;
