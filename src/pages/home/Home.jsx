import React from "react";
import "./home.scss";
import images from "../../images/export/exportImages";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <header className="header" id="header">
        <Navbar />
        <div className="headerBanner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="headerBannerContent">
                        <h1>
                          Growing Business <br /> With Us
                        </h1>
                        <div className="bottomText">
                          <span>Discover your Experience With Us</span>
                          <svg
                            width="304"
                            height="5"
                            viewBox="0 0 304 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect y="2" width="300" height="1" fill="#1DA1F2" />
                            <circle
                              cx="301.5"
                              cy="2.5"
                              r="2.5"
                              fill="#1DA1F2"
                            />
                          </svg>
                        </div>
                        <div className="headerBannerButtons">
                          <div className="bannerleftButton">
                            <Link to="#">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 1V15"
                                  stroke="#31A8E0"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M1 8H15"
                                  stroke="#31A8E0"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Read More
                            </Link>
                          </div>
                          <div className="bannerrightButton">
                            <Link to="#">
                              <svg
                                width="66"
                                height="18"
                                viewBox="0 0 66 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M60.288 17V5.096L57.744 5.504V2.264L64.152 1.304V17H60.288Z"
                                  fill="#31A8E0"
                                />
                                <rect
                                  x="4"
                                  y="8"
                                  width="45"
                                  height="1"
                                  fill="#31A8E0"
                                />
                                <circle
                                  cx="2.5"
                                  cy="8.5"
                                  r="2.5"
                                  fill="#31A8E0"
                                />
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                width="43"
                                height="18"
                                viewBox="0 0 43 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M30.744 17V15.2C31.176 14.304 31.728 13.504 32.4 12.8C33.088 12.096 33.832 11.384 34.632 10.664C35.368 9.992 35.952 9.456 36.384 9.056C36.816 8.656 37.12 8.272 37.296 7.904C37.488 7.536 37.584 7.096 37.584 6.584C37.584 5.272 36.736 4.616 35.04 4.616C34.384 4.616 33.736 4.696 33.096 4.856C32.456 5 31.848 5.184 31.272 5.408V2.072C31.896 1.848 32.624 1.664 33.456 1.52C34.304 1.376 35.144 1.304 35.976 1.304C37.784 1.304 39.16 1.76 40.104 2.672C41.048 3.584 41.52 4.864 41.52 6.512C41.52 7.44 41.304 8.248 40.872 8.936C40.44 9.608 39.792 10.32 38.928 11.072C38.288 11.616 37.712 12.12 37.2 12.584C36.704 13.032 36.28 13.512 35.928 14.024H41.664V17H30.744Z"
                                  fill="#FAFAFA"
                                />
                                <rect
                                  x="4"
                                  y="9"
                                  width="20"
                                  height="1"
                                  fill="#FAFAFA"
                                />
                                <circle
                                  cx="2.5"
                                  cy="9.5"
                                  r="2.5"
                                  fill="#FAFAFA"
                                />
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                width="43"
                                height="18"
                                viewBox="0 0 43 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M35.568 17.24C35.12 17.24 34.592 17.208 33.984 17.144C33.376 17.08 32.776 16.992 32.184 16.88C31.608 16.752 31.128 16.608 30.744 16.448V13.232C31.4 13.536 32.104 13.752 32.856 13.88C33.608 14.008 34.312 14.072 34.968 14.072C35.976 14.072 36.728 13.936 37.224 13.664C37.736 13.392 37.992 12.896 37.992 12.176C37.992 11.616 37.776 11.208 37.344 10.952C36.928 10.696 36.32 10.568 35.52 10.568H33L33.264 7.856H35.352C36.168 7.856 36.76 7.728 37.128 7.472C37.496 7.2 37.68 6.768 37.68 6.176C37.68 5.616 37.456 5.192 37.008 4.904C36.576 4.616 35.872 4.472 34.896 4.472C34.208 4.472 33.512 4.552 32.808 4.712C32.104 4.856 31.496 5.048 30.984 5.288V2.12C31.544 1.896 32.24 1.704 33.072 1.544C33.92 1.384 34.768 1.304 35.616 1.304C37.568 1.304 39.056 1.72 40.08 2.552C41.12 3.368 41.64 4.416 41.64 5.696C41.64 6.432 41.48 7.12 41.16 7.76C40.856 8.4 40.384 8.88 39.744 9.2C40.48 9.456 41.024 9.872 41.376 10.448C41.744 11.024 41.928 11.72 41.928 12.536C41.928 13.608 41.656 14.496 41.112 15.2C40.568 15.888 39.816 16.4 38.856 16.736C37.912 17.072 36.816 17.24 35.568 17.24Z"
                                  fill="#FAFAFA"
                                />
                                <rect
                                  x="4"
                                  y="8"
                                  width="20"
                                  height="1"
                                  fill="#FAFAFA"
                                />
                                <circle
                                  cx="2.5"
                                  cy="8.5"
                                  r="2.5"
                                  fill="#FAFAFA"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="headerBannerContent">
                        <h1>
                          Growing Business <br /> With Us
                        </h1>
                        <div className="bottomText">
                          <span>Discover your Experience With Us</span>
                          <svg
                            width="304"
                            height="5"
                            viewBox="0 0 304 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect y="2" width="300" height="1" fill="#1DA1F2" />
                            <circle
                              cx="301.5"
                              cy="2.5"
                              r="2.5"
                              fill="#1DA1F2"
                            />
                          </svg>
                        </div>
                        <div className="headerBannerButtons">
                          <div className="bannerleftButton">
                            <Link to="#">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 1V15"
                                  stroke="#31A8E0"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M1 8H15"
                                  stroke="#31A8E0"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Read More
                            </Link>
                          </div>
                          <div className="bannerrightButton">
                            <Link to="#">
                              <svg
                                width="66"
                                height="18"
                                viewBox="0 0 66 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M60.288 17V5.096L57.744 5.504V2.264L64.152 1.304V17H60.288Z"
                                  fill="#fff"
                                />
                                <rect
                                  x="4"
                                  y="8"
                                  width="45"
                                  height="1"
                                  fill="#fff"
                                />
                                <circle cx="2.5" cy="8.5" r="2.5" fill="#fff" />
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                width="43"
                                height="18"
                                viewBox="0 0 43 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M30.744 17V15.2C31.176 14.304 31.728 13.504 32.4 12.8C33.088 12.096 33.832 11.384 34.632 10.664C35.368 9.992 35.952 9.456 36.384 9.056C36.816 8.656 37.12 8.272 37.296 7.904C37.488 7.536 37.584 7.096 37.584 6.584C37.584 5.272 36.736 4.616 35.04 4.616C34.384 4.616 33.736 4.696 33.096 4.856C32.456 5 31.848 5.184 31.272 5.408V2.072C31.896 1.848 32.624 1.664 33.456 1.52C34.304 1.376 35.144 1.304 35.976 1.304C37.784 1.304 39.16 1.76 40.104 2.672C41.048 3.584 41.52 4.864 41.52 6.512C41.52 7.44 41.304 8.248 40.872 8.936C40.44 9.608 39.792 10.32 38.928 11.072C38.288 11.616 37.712 12.12 37.2 12.584C36.704 13.032 36.28 13.512 35.928 14.024H41.664V17H30.744Z"
                                  fill="#31A8E0"
                                />
                                <rect
                                  x="4"
                                  y="9"
                                  width="20"
                                  height="1"
                                  fill="#31A8E0"
                                />
                                <circle
                                  cx="2.5"
                                  cy="9.5"
                                  r="2.5"
                                  fill="#31A8E0"
                                />
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                width="43"
                                height="18"
                                viewBox="0 0 43 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M35.568 17.24C35.12 17.24 34.592 17.208 33.984 17.144C33.376 17.08 32.776 16.992 32.184 16.88C31.608 16.752 31.128 16.608 30.744 16.448V13.232C31.4 13.536 32.104 13.752 32.856 13.88C33.608 14.008 34.312 14.072 34.968 14.072C35.976 14.072 36.728 13.936 37.224 13.664C37.736 13.392 37.992 12.896 37.992 12.176C37.992 11.616 37.776 11.208 37.344 10.952C36.928 10.696 36.32 10.568 35.52 10.568H33L33.264 7.856H35.352C36.168 7.856 36.76 7.728 37.128 7.472C37.496 7.2 37.68 6.768 37.68 6.176C37.68 5.616 37.456 5.192 37.008 4.904C36.576 4.616 35.872 4.472 34.896 4.472C34.208 4.472 33.512 4.552 32.808 4.712C32.104 4.856 31.496 5.048 30.984 5.288V2.12C31.544 1.896 32.24 1.704 33.072 1.544C33.92 1.384 34.768 1.304 35.616 1.304C37.568 1.304 39.056 1.72 40.08 2.552C41.12 3.368 41.64 4.416 41.64 5.696C41.64 6.432 41.48 7.12 41.16 7.76C40.856 8.4 40.384 8.88 39.744 9.2C40.48 9.456 41.024 9.872 41.376 10.448C41.744 11.024 41.928 11.72 41.928 12.536C41.928 13.608 41.656 14.496 41.112 15.2C40.568 15.888 39.816 16.4 38.856 16.736C37.912 17.072 36.816 17.24 35.568 17.24Z"
                                  fill="#FAFAFA"
                                />
                                <rect
                                  x="4"
                                  y="8"
                                  width="20"
                                  height="1"
                                  fill="#FAFAFA"
                                />
                                <circle
                                  cx="2.5"
                                  cy="8.5"
                                  r="2.5"
                                  fill="#FAFAFA"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="headerBannerContent">
                        <h1>
                          Growing Business <br /> With Us
                        </h1>
                        <div className="bottomText">
                          <span>Discover your Experience With Us</span>
                          <svg
                            width="304"
                            height="5"
                            viewBox="0 0 304 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect y="2" width="300" height="1" fill="#1DA1F2" />
                            <circle
                              cx="301.5"
                              cy="2.5"
                              r="2.5"
                              fill="#1DA1F2"
                            />
                          </svg>
                        </div>
                        <div className="headerBannerButtons">
                          <div className="bannerleftButton">
                            <Link to="#">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 1V15"
                                  stroke="#31A8E0"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M1 8H15"
                                  stroke="#31A8E0"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Read More
                            </Link>
                          </div>
                          <div className="bannerrightButton">
                            <Link to="#">
                              <svg
                                width="66"
                                height="18"
                                viewBox="0 0 66 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M60.288 17V5.096L57.744 5.504V2.264L64.152 1.304V17H60.288Z"
                                  fill="#fff"
                                />
                                <rect
                                  x="4"
                                  y="8"
                                  width="45"
                                  height="1"
                                  fill="#fff"
                                />
                                <circle cx="2.5" cy="8.5" r="2.5" fill="#fff" />
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                width="43"
                                height="18"
                                viewBox="0 0 43 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M30.744 17V15.2C31.176 14.304 31.728 13.504 32.4 12.8C33.088 12.096 33.832 11.384 34.632 10.664C35.368 9.992 35.952 9.456 36.384 9.056C36.816 8.656 37.12 8.272 37.296 7.904C37.488 7.536 37.584 7.096 37.584 6.584C37.584 5.272 36.736 4.616 35.04 4.616C34.384 4.616 33.736 4.696 33.096 4.856C32.456 5 31.848 5.184 31.272 5.408V2.072C31.896 1.848 32.624 1.664 33.456 1.52C34.304 1.376 35.144 1.304 35.976 1.304C37.784 1.304 39.16 1.76 40.104 2.672C41.048 3.584 41.52 4.864 41.52 6.512C41.52 7.44 41.304 8.248 40.872 8.936C40.44 9.608 39.792 10.32 38.928 11.072C38.288 11.616 37.712 12.12 37.2 12.584C36.704 13.032 36.28 13.512 35.928 14.024H41.664V17H30.744Z"
                                  fill="#FAFAFA"
                                />
                                <rect
                                  x="4"
                                  y="9"
                                  width="20"
                                  height="1"
                                  fill="#FAFAFA"
                                />
                                <circle
                                  cx="2.5"
                                  cy="9.5"
                                  r="2.5"
                                  fill="#FAFAFA"
                                />
                              </svg>
                            </Link>
                            <Link to="#">
                              <svg
                                width="43"
                                height="18"
                                viewBox="0 0 43 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M35.568 17.24C35.12 17.24 34.592 17.208 33.984 17.144C33.376 17.08 32.776 16.992 32.184 16.88C31.608 16.752 31.128 16.608 30.744 16.448V13.232C31.4 13.536 32.104 13.752 32.856 13.88C33.608 14.008 34.312 14.072 34.968 14.072C35.976 14.072 36.728 13.936 37.224 13.664C37.736 13.392 37.992 12.896 37.992 12.176C37.992 11.616 37.776 11.208 37.344 10.952C36.928 10.696 36.32 10.568 35.52 10.568H33L33.264 7.856H35.352C36.168 7.856 36.76 7.728 37.128 7.472C37.496 7.2 37.68 6.768 37.68 6.176C37.68 5.616 37.456 5.192 37.008 4.904C36.576 4.616 35.872 4.472 34.896 4.472C34.208 4.472 33.512 4.552 32.808 4.712C32.104 4.856 31.496 5.048 30.984 5.288V2.12C31.544 1.896 32.24 1.704 33.072 1.544C33.92 1.384 34.768 1.304 35.616 1.304C37.568 1.304 39.056 1.72 40.08 2.552C41.12 3.368 41.64 4.416 41.64 5.696C41.64 6.432 41.48 7.12 41.16 7.76C40.856 8.4 40.384 8.88 39.744 9.2C40.48 9.456 41.024 9.872 41.376 10.448C41.744 11.024 41.928 11.72 41.928 12.536C41.928 13.608 41.656 14.496 41.112 15.2C40.568 15.888 39.816 16.4 38.856 16.736C37.912 17.072 36.816 17.24 35.568 17.24Z"
                                  fill="#31A8E0"
                                />
                                <rect
                                  x="4"
                                  y="8"
                                  width="20"
                                  height="1"
                                  fill="#31A8E0"
                                />
                                <circle
                                  cx="2.5"
                                  cy="8.5"
                                  r="2.5"
                                  fill="#31A8E0"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Program Section */}
      <section className="program" id="program">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="singleProgram">
                <div className="topIcon">
                  <img src={images.Program01} alt="" />
                  <h4>Business Planing</h4>
                  <p>
                    The development of your next business plan will be executed
                    by a brilliant team who will indicate your grand success.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 20H27"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                    The development of your next business plan will be executed
                    by a brilliant team who will indicate your grand success.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 20H27"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                    The development of your next business plan will be executed
                    by a brilliant team who will indicate your grand success.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 20H27"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
      {/* PartnerShip */}
      <section className="partnerShip" id="partnerShip">
        <div className="container">
          <div className="row" style={{ display: "flex", alignItems: "end" }}>
            <div className="col-lg-5">
              <div className="partnerShipLeft">
                <h3>
                  We’re a global stakeholder relations and partnership building
                  consultancy.
                </h3>
                <p>
                  Collaborate Consulting exists to find the place where to being
                  seemingly disparate interests meet. From that point of the
                  connection, we create platforms.
                </p>
                <Link to="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1V15"
                      stroke="#31A8E0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 8H15"
                      stroke="#31A8E0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-7 partnerBg">
              <div className="partnerShipRight">
                <img src={images.Businessman} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  more about us */}
      <section className="aboutUS" id="aboutUS">
        <div className="overlayImage">
          <img className="img-fluid" src={images.AboutOverlay} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="innerAbout">
                <div className="aboutusContent">
                  <span>More About Us</span>
                  <h4>
                    15 years of quality and <br /> successful projects
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare sem sed quam tempus aliquet vitae eget dolor.
                    Proin eu ultrices libero. Curabitur vulputate vestibulum
                    elementum. Suspendisse id neque a nibh mollis blandit.
                  </p>
                  <Link to="#">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V15"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 8H15"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Read More
                  </Link>
                </div>
                <div className="aboutMembers">
                  <div className="image">
                    <img src={images.Aboutmembers} alt="" />
                    <div className="imgOverlay">
                      <Link to={"#"}>
                        <svg
                          width="127"
                          height="88"
                          viewBox="0 0 127 88"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="127"
                            height="88"
                            rx="44"
                            fill="#31A8E0"
                            fill-opacity="0.3"
                          />
                          <rect
                            x="9"
                            y="9"
                            width="109"
                            height="70"
                            rx="35"
                            fill="#31A8E0"
                            fill-opacity="0.7"
                          />
                          <path
                            d="M54 32L73.4444 44.5L54 57V32Z"
                            stroke="#FAFAFA"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project done */}
      <div className="completeProject">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="allProjectsInfo">
                <div className="singleInfo">
                  <h2>13</h2>
                  <h6>Happy Client</h6>
                  <div className="hoverDesign"></div>
                </div>
                <div className="singleInfo">
                  <h2>101</h2>
                  <h6>Job Done</h6>
                  <div className="hoverDesign"></div>
                </div>
                <div className="singleInfo">
                  <h2>19</h2>
                  <h6>Experience</h6>
                  <div className="hoverDesign"></div>
                </div>
                <div className="singleInfo">
                  <h2>199</h2>
                  <h6>Project Done</h6>
                  <div className="hoverDesign"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="recentNews" id="recentNews">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="newsTitle">
                <h3>Recent News</h3>
                <svg
                  width="303"
                  height="5"
                  viewBox="0 0 303 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="2" width="300" height="1" fill="#31A8E0" />
                  <circle cx="300.5" cy="2.5" r="2.5" fill="#31A8E0" />
                </svg>
              </div>
              <div className="singleNews">
                <div className="leftImage">
                  <img src={images.Newsperson01} alt="" />
                </div>
                <div className="rightContent">
                  <p className="paraContent">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <hr />
                  <Link to={"#"}>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 1V5"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 1V5"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 9H19"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>August 15</span>, 2022
                    </p>
                  </Link>
                </div>
              </div>
              <div className="singleNews">
                <div className="leftImage">
                  <img src={images.Newsperson02} alt="" />
                </div>
                <div className="rightContent">
                  <p className="paraContent">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <hr />
                  <Link to={"#"}>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 1V5"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 1V5"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 9H19"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>August 15</span>, 2022
                    </p>
                  </Link>
                </div>
              </div>
              <div className="singleNews">
                <div className="leftImage">
                  <img src={images.Newsperson03} alt="" />
                </div>
                <div className="rightContent">
                  <p className="paraContent">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <hr />
                  <Link to={"#"}>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 1V5"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 1V5"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 9H19"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>August 15</span>, 2022
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rightFaq">
                <div className="newsTitle">
                  <h3>FAQs</h3>
                  <svg
                    width="303"
                    height="5"
                    viewBox="0 0 303 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="2" width="300" height="1" fill="#31A8E0" />
                    <circle cx="300.5" cy="2.5" r="2.5" fill="#31A8E0" />
                  </svg>
                </div>
                <div className="faqAccordion">
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Project scheduling and management
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">
                          We began our operations a few decades ago and have
                          grown due to excellent relationships with our clients.
                          We started out small, with just a few people and a
                          small office, but today we have offices in multiple
                          countries with hundreds of people working inside them.
                          We started out small, with just a few people and a
                          small office, but today we have offices in multiple
                          countries with hundreds of people working inside them.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Perform value engineering
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Which finance consulting services you provide?
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingFour"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseFour"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseFour"
                        >
                          Fundamental analysis services
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingFour"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style
                          each element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Select Works */}
      <section className="selectWorks" id="selectWorkd">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsTitle">
                <h3>Selected Works</h3>
                <svg
                  width="303"
                  height="5"
                  viewBox="0 0 303 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="2" width="300" height="1" fill="#31A8E0" />
                  <circle cx="300.5" cy="2.5" r="2.5" fill="#31A8E0" />
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="leftWorks">
                <div className="singleImg">
                  <img src={images.Work1} alt="" />
                  <div className="workImgOverlay">
                    <div className="overlayInnerButton">
                      <Link to={"#"}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.0004 18.9999L14.6504 14.6499"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                      <Link to={"#"}>
                        <svg
                          width="23"
                          height="20"
                          viewBox="0 0 23 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="singleImg">
                  <img src={images.Work2} alt="" />
                  <div className="workImgOverlay">
                    <div className="overlayInnerButton">
                      <Link to={"#"}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.0004 18.9999L14.6504 14.6499"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                      <Link to={"#"}>
                        <svg
                          width="23"
                          height="20"
                          viewBox="0 0 23 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="leftWorks">
                <div className="singleImg">
                  <img src={images.Work4} alt="" />
                  <div className="workImgOverlay">
                    <div className="overlayInnerButton">
                      <Link to={"#"}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.0004 18.9999L14.6504 14.6499"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                      <Link to={"#"}>
                        <svg
                          width="23"
                          height="20"
                          viewBox="0 0 23 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="singleImg">
                  <img src={images.Work3} alt="" />
                  <div className="workImgOverlay">
                    <div className="overlayInnerButton">
                      <Link to={"#"}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.0004 18.9999L14.6504 14.6499"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                      <Link to={"#"}>
                        <svg
                          width="23"
                          height="20"
                          viewBox="0 0 23 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="team" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsTitle">
                <h3>Our Team Member</h3>
                <svg
                  width="303"
                  height="5"
                  viewBox="0 0 303 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="2" width="300" height="1" fill="#31A8E0" />
                  <circle cx="300.5" cy="2.5" r="2.5" fill="#31A8E0" />
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="singlePerson">
                <img src={images.Member01} alt="" />
                <div className="memberInfo">
                  <h4 className="name">Gwen Johnson</h4>
                  <p className="title">Founder & CEO</p>
                  <div className="socialIcons">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="singlePerson">
                <img src={images.Member02} alt="" />
                <div className="memberInfo">
                  <h4 className="name">Thomas Olsen</h4>
                  <p className="title">Regional Leader</p>
                  <div className="socialIcons">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="singlePerson">
                <img src={images.Member03} alt="" />
                <div className="memberInfo">
                  <h4 className="name">Manny Maceda</h4>
                  <p className="title">Managing Partner</p>
                  <div className="socialIcons">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="singlePerson">
                <img src={images.Member04} alt="" />
                <div className="memberInfo">
                  <h4 className="name">James Allen</h4>
                  <p className="title">Chief Executive</p>
                  <div className="socialIcons">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* trusted us */}
      <section className="trustedUs">
        <div className="bgOverlayMap">
          <img src={images.Map} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsTitle">
                <h3>Trusted us</h3>
                <svg
                  width="303"
                  height="5"
                  viewBox="0 0 303 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="2" width="300" height="1" fill="#31A8E0" />
                  <circle cx="300.5" cy="2.5" r="2.5" fill="#31A8E0" />
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="allLogos text-center">
                <img src={images.Alogo} alt="" />
                <img src={images.Blogo} alt="" />
                <img src={images.Clogo} alt="" />
                <img src={images.Dlogo} alt="" />
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12">
              <div className="allLogos text-center">
                <img src={images.Elogo} alt="" />
                <img src={images.Flogo} alt="" />
                <img src={images.Glogo} alt="" />
                <img src={images.Hlogo} alt="" />
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12">
              <div className="allLogos text-center">
                <img src={images.Ilogo} alt="" />
                <img src={images.Jlogo} alt="" />
                <img src={images.Klogo} alt="" />
                <img src={images.Llogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsTitle">
                <h3 className="text-white">Testimonial</h3>
                <svg
                  width="303"
                  height="5"
                  viewBox="0 0 303 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="2" width="300" height="1" fill="#31A8E0" />
                  <circle cx="300.5" cy="2.5" r="2.5" fill="#31A8E0" />
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="singleTestimonial">
                <div className="leftInfo">
                  <div className="review">
                    <p className="text">
                      <i class="fas fa-quote-left me-2"></i>
                      Your continued support and aggressive technology have
                      convinced me that signing another optimization contract
                      with Aseona, Inc. is the best approach in maintaining our
                      edge over the competition
                      <i class="fas fa-quote-right ms-2"></i>
                    </p>
                  </div>
                  <div className="nameStar">
                    <div className="leftName">
                      <p>Centa Simpson</p>
                      <span>Centa Simpson</span>
                    </div>
                    <div className="rightStars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="clientImage">
                  <img src={images.Client1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleTestimonial">
                <div className="leftInfo">
                  <div className="review">
                    <p className="text">
                      <i class="fas fa-quote-left me-2"></i>
                      Your continued support and aggressive technology have
                      convinced me that signing another optimization contract
                      with Aseona, Inc. is the best approach in maintaining our
                      edge over the competition
                      <i class="fas fa-quote-right ms-2"></i>
                    </p>
                  </div>
                  <div className="nameStar">
                    <div className="leftName">
                      <p>Centa Simpson</p>
                      <span>Centa Simpson</span>
                    </div>
                    <div className="rightStars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="clientImage">
                  <img src={images.Client2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleTestimonial">
                <div className="leftInfo">
                  <div className="review">
                    <p className="text">
                      <i class="fas fa-quote-left me-2"></i>
                      Your continued support and aggressive technology have
                      convinced me that signing another optimization contract
                      with Aseona, Inc. is the best approach in maintaining our
                      edge over the competition
                      <i class="fas fa-quote-right ms-2"></i>
                    </p>
                  </div>
                  <div className="nameStar">
                    <div className="leftName">
                      <p>Centa Simpson</p>
                      <span>Centa Simpson</span>
                    </div>
                    <div className="rightStars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="clientImage">
                  <img src={images.Client3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fotterLogo footerTitle">
                <img src={images.Logo} alt="" />
              </div>
              <div className="foooterAddress">
                <div className="sigleAddress">
                  <i class="fas fa-map-marker-alt"></i>
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
                  <i class="fas fa-mobile-alt"></i>
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
                    <a href="tel:8801843331223">+8801843331223</a>
                  </span>
                </div>
                <div className="sigleAddress">
                  <i class="fab fa-telegram-plane"></i>
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
                      <i class="fas fa-chevron-up"></i>
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

export default Home;
