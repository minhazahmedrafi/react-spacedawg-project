import React from "react";
import "./recentnews.scss";
import images from "../../images/export/exportImages";
import { Link } from "react-router-dom";

const RecentNews = () => {
  return (
    <>
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 1V5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 1V5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 9H19"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 1V5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 1V5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 9H19"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 1V5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 1V5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 9H19"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
    </>
  );
};

export default RecentNews;
