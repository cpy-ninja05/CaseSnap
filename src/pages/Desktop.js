import React from "react";
import "../styles/homeafterlogin.css"; // Import the CSS file directly

export const Desktop = ({ className, ...props }) => {
  return (
    <div className={`desktop8 ${className}`}>
      <div className="text"></div>
      <div className="background">
        <img className="cover" src="cover0.png" alt="Cover" />
        <div className="filter">
          <div className="frame3010">
            <div className="frame3011">
              <div className="container"></div>
              <div className="rectangle2966"></div>
              <div className="group3189">
                <div className="loupe1">
                  <img className="group" src="group0.svg" alt="Group" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="heroShadow" src="hero-shadow0.svg" alt="Hero Shadow" />
      <div className="headings">
        <div className="streamlineLegalDispute">
          Streamline Legal Dispute{" "}
        </div>
        <div className="servingHumanityServingJusticeCaseSnapSociety">
          Serving Humanity, Serving Justice
          <br />
          CaseSnap Society{" "}
        </div>
        <div className="compassionDrivesUsTogetherWeServeUpliftEnhanceCourtroomEfficiencyAndSupportFairerQuickerResolutions">
          Compassion drives us. Together, we serve, uplift, enhance courtroom
          efficiency and support fairer, quicker resolutions.{" "}
        </div>
        <div className="donateButton">
          <div className="chatNow">Chat Now! </div>
        </div>
      </div>
      <div className="caseSnapAi">CaseSnap AI </div>
      <div className="navItems">
        <div className="navItem">
          <div className="aboutUs">About Us </div>
        </div>
        <div className="navItem">
          <div className="whatWeDo">What We Do </div>
        </div>
        <div className="navItem">
          <div className="getInvolved">Get Involved </div>
        </div>
        <div className="navItem">
          <div className="knowledgeCorner">Knowledge Corner </div>
        </div>
      </div>
    </div>
  );
};
