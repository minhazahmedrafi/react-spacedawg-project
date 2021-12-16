import React from "react";
import "./contact.scss";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <>
      <main className="contactPage">
        <Navbar />
        <section className="contactContent">
          <div className="container">
            <div className="wrapper">
              <div className="form">
                <div className="newsTitle">
                  <h3>Contact Us</h3>
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
                <form id="submit-form" action="">
                  <p>
                    <input
                      id="name"
                      className="form-input"
                      type="text"
                      placeholder="Your Name*"
                    />
                    <small className="name-error"></small>
                  </p>
                  <p>
                    <input
                      id="email"
                      className="form-input"
                      type="email"
                      placeholder="Your Email*"
                    />
                    <small className="name-error"></small>
                  </p>
                  <p className="full-width">
                    <input
                      id="company-name"
                      className="form-input"
                      type="text"
                      placeholder="Company Name*"
                      required
                    />
                    <small></small>
                  </p>
                  <p className="full-width">
                    <textarea
                      minlength="20"
                      id="message"
                      cols="30"
                      rows="7"
                      placeholder="Your Message*"
                      required
                    ></textarea>
                    <small></small>
                  </p>
                  <p className="full-width">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      checked
                    />{" "}
                    Yes, I would like to receive communications by call / email
                    about Company's services.
                  </p>
                  <p className="full-width">
                    <input
                      type="submit"
                      className="submit-btn"
                      value="Submit"
                    />
                    <button className="reset-btn" onclick="reset()">
                      Reset
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
