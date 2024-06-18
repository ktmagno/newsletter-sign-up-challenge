import desktopIllustration from "../assets/images/illustration-desktop.svg";
import mobileIllustration from "../assets/images/illustration-mobile.svg";
import Success from "./Success";
import { Component, useEffect, useState } from "react";

function Content(props) {
  const [email, setEmail] = useState("");
  const [successPage, setSuccessPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [view, setView] = useState(window.innerWidth);

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (e) => {
    const pattern = /^[^\s@,#?$+]+@[^\s@,#?$+]+\.[^\s@,#?$+]{2,6}$/;

    if (pattern.test(email)) {
      e.stopPropagation();
      setSuccessPage(true);
      console.log("form submission success!");
    } else if (!pattern.test(email) && email !== "") {
      e.stopPropagation();
      setErrorMessage(true);
      console.log("form submission unsuccessful");
    }
  };

  const handleCloseSuccess = () => {
    setSuccessPage(false);
    setEmail("");
    setErrorMessage("");
  };

  useEffect(() => {
    const handleScreenSize = () => {
      setView(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return successPage ? (
    <Success name={email || "guest"} onCloseSuccess={handleCloseSuccess} />
  ) : (
    <div className="newsletter">
      <div className="left-side">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="offers">
          <li>
            <span>Product discovery and building what matters</span>
          </li>
          <li>
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li>
            <span>And much more!</span>
          </li>
        </ul>

        <form onSubmit={handleSubscribe}>
          <div className="user-email">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="text"
              id="email"
              placeholder="email@company.com"
              autoComplete="off"
              value={email}
              onChange={handleEmail}
            />

            <span className="error-message">
              {errorMessage && <p>Valid email required</p>}
            </span>
          </div>

          <button type="button" className="signup-btn" onClick={validateEmail}>
            Subscribe to monthly newsletter
          </button>
          {successPage && <Success email={email} />}
        </form>
      </div>

      <div className="right-side">
        <img
          src={view >= 376 ? desktopIllustration : mobileIllustration}
          alt="sign up"
        />
      </div>
    </div>
  );
}

export default Content;
