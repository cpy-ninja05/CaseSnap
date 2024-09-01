import React from "react";
import "../style.css";
import "../styles/chat.css";

const Chat = ({ className, ...props }) => {
  return (
    <div className={`desktop9 ${className}`} {...props}>
      <div className="rectangle31"></div>
      <div className="search2">Search</div>
      <img className="search1" src="search-10.svg" alt="Search" />
      <div className="sidebar">
        <div className="frame666">
          <img className="frame668" src="frame-6680.svg" alt="Frame" />
          <div className="rectangle2967"></div>
          <div className="welcome-text">
            Welcome to CaseSnap AI, your smart legal assistant! I'm here to
            help simplify your legal journey by gathering key details and
            organizing your case information in a clear and concise way. Together,
            we can streamline the legal process, saving you time and making sure
            your concerns are accurately conveyed to your legal team.
          </div>
        </div>
      </div>
      <div className="outer">
        <div className="mainMessageBox">
          <div className="body">Type a new message here</div>
          <img className="send" src="send0.svg" alt="Send" />
          <img className="emojis" src="emojis0.svg" alt="Emojis" />
          <img
            className="paperclip"
            src="outline-messages-coversation-paperclip0.svg"
            alt="Paperclip"
          />
          <div className="frame3017"></div>
        </div>
      </div>
      <div className="home"></div>
      <div className="caseSnapAi">CaseSnap AI</div>
      
    </div>
  );
};

export default Chat;
