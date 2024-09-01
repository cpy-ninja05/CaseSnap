import React from "react";
import "../style.css";  // Ensure this path is correct
import "../styles/knowledgecorner.css";

export const KnowledgeCorner = ({ className, ...props }) => {
  return (
    <div className={`desktop5 ${className}`} {...props}>
      <div className="newsAndEvents">
        <div className="frame3007">
          <div className="frame2999">
            <div className="frame2998">
              <div className="knowledgeCorner">Knowledge Corner</div>
              <div className="line171"></div>
            </div>
            <div className="knowledgeClarityProgress">
              Knowledge, Clarity, Progress
            </div>
          </div>
        </div>
        <div className="frame3009">
          <div className="group3326">
            <img className="image" src="image0.png" alt="Knowledge Image" />
          </div>
          <div className="frame3008">
            <div className="keepLearning">Keep Learning</div>
            <div className="weProvideQuestionsWhichActivelyChangeWithProvisionToSolutions">
              We provide questions which actively change with provision to solutions
            </div>
            <div className="readThis">Read This</div>
          </div>
        </div>
        <div className="frame29992">
          <div className="clear">Clear</div>
        </div>
        <div className="frame3010">
          <div className="concise">Concise</div>
        </div>
        <div className="frame30082">
          <div className="efficient">Efficient</div>
        </div>
        <div className="frame30092">
          <div className="accurate">Accurate</div>
        </div>
        <div className="home">Home</div>
      </div>
    </div>
  );
};

export default KnowledgeCorner;
