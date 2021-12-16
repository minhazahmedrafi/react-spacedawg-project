import React from "react";
import "./teammembers.scss";
import images from "../../images/export/exportImages";
import { Link } from "react-router-dom";

const TeamMembers = () => {
  return (
    <>
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
    </>
  );
};

export default TeamMembers;
