import React, { useState } from "react";
import "../style.css";
import "../styles/signup.css";

export const Desktop7 = ({ className, ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle the signup logic here
    console.log("Signup with:", email, password);
  };

  return (
    <div className={styles.desktop7 + " " + className}>
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.form}>
        <div className={styles.frame52}>
          <div className={styles.frame50}>
            <label htmlFor="email" className={styles.email}>
              Email
            </label>
          </div>
          <div className={styles.frame47}>
            <input
              type="email"
              id="email"
              className={styles.enterYourEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className={styles.password}>
          <div className={styles.frame53}>
            <div className={styles.frame51}>
              <label htmlFor="password" className={styles.password2}>
                Password
              </label>
            </div>
            <div className={styles.frame49}>
              <input
                type="password"
                id="password"
                className={styles.enterYourPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <img className={styles.bxHide} src="bx-hide0.svg" alt="Hide" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.signInAnSignUp}>
        <button className={styles.buttonSignIn} onClick={handleSignup}>
          <div className={styles.continue}>Continue</div>
        </button>
      </div>
      {/* Additional elements can remain as they are */}
      {/* Add aria labels, roles, and alt attributes where applicable */}
    </div>
  );
};

export default Desktop7;
