import React from "react";

import SideBar from "../../components/sidebar/SideBar";
import Section from "../../components/section/Section";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="main">
        <SideBar />
        <Section />
      </div>
    </div>
  );
}

export default Home;
