import React from "react";
import { Link } from "react-router-dom";
import images from "../../images/export/exportImages";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="subHeader">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="subCall">
                <span>
                  Call for free Consultation: <Link to="#">+8801843331223</Link>
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="subCall">
                <span>
                  Working Time: <Link to="#">+Sun-Thu/ 10.00Am-6.00Pm</Link>
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-end">
              <div className="subCall">
                <span className="subIconsTitle">
                  Follow Us On:
                  <div className="subIcons">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={images.Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {" "}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#31A8E0" />
                <path
                  d="M26 18H14"
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29 14H11"
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29 22H11"
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 26H14"
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link homeActive"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/services"}
                  className="nav-link servicesActive"
                  href="#"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/portfolio"}
                  className="nav-link portfolioActive"
                  href="#"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/team"} className="nav-link teamActive" href="#">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/blog"} className="nav-link blogActive" href="#">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/contact"}
                  className="nav-link contactActive"
                  href="#"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
