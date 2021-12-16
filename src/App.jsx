import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/service/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Team from "./pages/team/Team";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
