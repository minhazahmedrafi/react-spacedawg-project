import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ServiceItem from "../../components/servicesItem/ServiceItem";
import "./services.scss";

const Services = () => {
  return (
    <>
      <main className="servicePage">
        <Navbar />
        <div className="serviceContent">
          <ServiceItem />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
