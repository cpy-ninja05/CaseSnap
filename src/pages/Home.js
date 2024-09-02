import React from "react";
import "../style.css";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text">{""}</div>
          <div className="background">
            <div className="filter">
              <div className="frame" />
            </div>
          </div>
          <img className="hero-shadow" alt="Hero shadow" src="./assets/hero-shadow.png" />
          <div className="headings">
            <div className="text-wrapper">Streamline Legal Dispute</div>
            <p className="serving-humanity">
              Serving Humanity, Serving Justice
              <br />
              CaseSnap Society
            </p>
            <p className="div">
              Compassion drives us. Together, we serve, uplift, enhance courtroom efficiency and support fairer, quicker
              resolutions.
            </p>
            <a href="/signup">
            <button className="donate-button">
              Join Now
            </button>
            </a>
           
          </div>
          <div className="text-wrapper-3">CaseSnap AI</div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="text-wrapper-4">About Us</div>
            </div>
            <div className="nav-item">
              <div className="text-wrapper-4">What We Do</div>
            </div>
            <div className="nav-item">
              <div className="text-wrapper-4">Get Involved</div>
            </div>
            <div className="nav-item">
              <div className="text-wrapper-4">Knowledge Corner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
