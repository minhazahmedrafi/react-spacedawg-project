import React from "react";
import "./teammembers.scss";
import images from "../../images/export/exportImages";
import { Link } from "react-router-dom";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <div className="col-lg-3 col-md-6">
                <SwiperSlide>
                  <div className="singlePerson px-3 px-sm-0">
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
                </SwiperSlide>
              </div>
              <div className="col-lg-3 col-md-6">
                <SwiperSlide>
                  <div className="singlePerson px-3 px-sm-0">
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
                </SwiperSlide>
              </div>
              <div className="col-lg-3 col-md-6">
                <SwiperSlide>
                  <div className="singlePerson px-3 px-sm-0">
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
                </SwiperSlide>
              </div>
              <div className="col-lg-3 col-md-6">
                <SwiperSlide>
                  <div className="singlePerson px-3 px-sm-0">
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
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
