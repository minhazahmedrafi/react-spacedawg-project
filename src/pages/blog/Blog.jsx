import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import RecentNews from "../../components/recentNews/RecentNews";
import "./blog.scss";

const Blog = () => {
  return (
    <>
      <main className="blogPage">
        <Navbar />
        <div className="blogPageContent">
          <RecentNews />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Blog;
