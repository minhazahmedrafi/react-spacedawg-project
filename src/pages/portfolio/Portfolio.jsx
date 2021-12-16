import React from "react";
import "./portfolio.scss";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SelectWorks from "../../components/selectWorks/SelectWorks";

const Portfolio = () => {
  return (
    <>
      <main className="portfolio">
        <Navbar />
        <div className="portfolioContent">
          <SelectWorks />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Portfolio;
