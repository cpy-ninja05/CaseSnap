import React from "react";
import "../style.css";
import "../styles/login.css";

export const Login = ({ className, ...props }) => {
  return (
    <div className={`desktop6 ${className}`}>
      <div className="logIn">Log in </div>
      <div className="form">
        <div className="frame52">
          <div className="frame50">
            <div className="email">Email </div>
          </div>
          <div className="frame47">
            <div className="enterYourEmail">Enter your email </div>
          </div>
        </div>
        <div className="password">
          <div className="frame53">
            <div className="frame51">
              <div className="password2">Password </div>
            </div>
            <div className="frame49">
              <div className="enterYourPassword">
                Enter your password{" "}
              </div>
              <img className="bxHide" src="bx-hide0.svg" alt="Hide Password" />
            </div>
          </div>
          <div className="frame55">
            <div className="frame54">
              <div className="rectangle8"></div>
              <div className="rememberMe">Remember me </div>
            </div>
            <div className="forgotPassword">Forgot Password </div>
          </div>
        </div>
      </div>
      <div className="signInAnSignUp">
        <div className="buttonSignIn">
          <div className="continue">Continue </div>
        </div>
      </div>
      <div className="ellipse45"></div>
      <div className="ellipse47"></div>
      <div className="ellipse48"></div>
      <div className="ellipse49"></div>
      <div className="frame61">
        <div className="rectangle9"></div>
        <div className="rectangle10"></div>
        <div className="rectangle11"></div>
      </div>
      <img className="vector11" src="vector-110.svg" alt="Vector" />
      <img className="image" src="image0.png" alt="Decorative" />
      <div className="rectangle7"></div>
      <div className="ellipse46"></div>
      <div className="togetherWeCanRefineJustice">
        Together, we
        <br />
        <br /> can refine justice{" "}
      </div>
      <div className="ourActivites">
        <div className="ourActivities">Our Activities </div>
        <img className="arrow3" src="arrow-30.svg" alt="Arrow" />
      </div>
      <div className="frame62">
        <img className="group36628" src="group-366280.svg" alt="Group" />
        <div className="caseSnapAi">CaseSnap AI </div>
      </div>
      <div className="ellipse66"></div>
      <div className="ellipse67"></div>
      <div className="buttonSignIn2">
        <div className="signIn">Sign in </div>
      </div>
      <div className="frame3012">
        <div className="signUp">Sign up </div>
      </div>
      <div className="frame3013"></div>
      <div className="frame3014"></div>
    </div>
  );
};

export default Login;
