import React from "react";
import "./home.scss";
import images from "../../images/export/exportImages";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ServiceItem from "../../components/servicesItem/ServiceItem";
import SelectWorks from "../../components/selectWorks/SelectWorks";
import TeamMembers from "../../components/teamMembers/TeamMembers";
import RecentNews from "../../components/recentNews/RecentNews";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

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
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
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
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1 8H15"
                                  stroke="#31A8E0"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
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
                    <div className="carousel-item">
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
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1 8H15"
                                  stroke="#31A8E0"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
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
                    <div className="carousel-item">
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
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1 8H15"
                                  stroke="#31A8E0"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
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
      {/* Services */}
      <ServiceItem />
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 8H15"
                      stroke="#31A8E0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 8H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                            fillOpacity="0.3"
                          />
                          <rect
                            x="9"
                            y="9"
                            width="109"
                            height="70"
                            rx="35"
                            fill="#31A8E0"
                            fillOpacity="0.7"
                          />
                          <path
                            d="M54 32L73.4444 44.5L54 57V32Z"
                            stroke="#FAFAFA"
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
      {/* RecentNews */}
      <RecentNews />
      {/* Select Works */}
      <SelectWorks />
      {/* Team Section */}
      <TeamMembers />
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
      {/* Testimonials */}
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
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <div className="col-lg-4">
                <SwiperSlide>
                  <div className="singleTestimonial ms-2 ms-sm-0">
                    <div className="leftInfo">
                      <div className="review">
                        <p className="text">
                          <i className="fas fa-quote-left me-2"></i>
                          Your continued support and aggressive technology have
                          convinced me that signing another optimization
                          contract with Aseona, Inc. is the best approach in
                          maintaining our edge over the competition
                          <i className="fas fa-quote-right ms-2"></i>
                        </p>
                      </div>
                      <div className="nameStar">
                        <div className="leftName">
                          <p>Centa Simpson</p>
                          <span>Centa Simpson</span>
                        </div>
                        <div className="rightStars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className="clientImage">
                      <img src={images.Client1} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-4">
                <SwiperSlide>
                  <div className="singleTestimonial ms-2 ms-sm-0">
                    <div className="leftInfo">
                      <div className="review">
                        <p className="text">
                          <i className="fas fa-quote-left me-2"></i>
                          Your continued support and aggressive technology have
                          convinced me that signing another optimization
                          contract with Aseona, Inc. is the best approach in
                          maintaining our edge over the competition
                          <i className="fas fa-quote-right ms-2"></i>
                        </p>
                      </div>
                      <div className="nameStar">
                        <div className="leftName">
                          <p>Centa Simpson</p>
                          <span>Centa Simpson</span>
                        </div>
                        <div className="rightStars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className="clientImage">
                      <img src={images.Client2} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-4">
                <SwiperSlide>
                  <div className="singleTestimonial ms-2 ms-sm-0">
                    <div className="leftInfo">
                      <div className="review">
                        <p className="text">
                          <i className="fas fa-quote-left me-2"></i>
                          Your continued support and aggressive technology have
                          convinced me that signing another optimization
                          contract with Aseona, Inc. is the best approach in
                          maintaining our edge over the competition
                          <i className="fas fa-quote-right ms-2"></i>
                        </p>
                      </div>
                      <div className="nameStar">
                        <div className="leftName">
                          <p>Centa Simpson</p>
                          <span>Centa Simpson</span>
                        </div>
                        <div className="rightStars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className="clientImage">
                      <img src={images.Client3} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
