import React from "react";
import "../style.css";
import "../styles/chat.css";

const Chat = ({ className, ...props }) => {
  return (
    <div className={`desktop9 ${className}`} {...props}>
     
    
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
      <form className="outer">
        <div className="mainMessageBox">
          <input
            type="text"
            className="body"
            placeholder="Type a new message here"
          />
          <div className="icon-container">
            <img className="paperclip" src="outline-messages-coversation-paperclip0.svg" alt="Paperclip" />
            <img className="emojis" src="emojis0.svg" alt="Emojis" />
            <img className="send" src="./assets/send_icon.png" alt="Send" />
          </div>
        </div>
      </form>
      <div className="home"></div>
      <div className="caseSnapAi">CaseSnap AI</div>
      
    </div>
  );
};

export default Chat;
