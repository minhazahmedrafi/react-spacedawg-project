import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TeamMembers from "../../components/teamMembers/TeamMembers";
import "./team.scss";

const Team = () => {
  return (
    <>
      <main className="teamPage">
        <Navbar />
        <div className="teamPageContent">
          <TeamMembers />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Team;
