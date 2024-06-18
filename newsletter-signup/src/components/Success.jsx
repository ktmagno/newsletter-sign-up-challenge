import successIcon from "../assets/images/icon-success.svg";
import { useState } from "react";
import Content from "./Content";

function Success({ name, onCloseSuccess }) {
  const handleDismissClick = () => {
    onCloseSuccess();
  };

  return (
    <div className="success-message">
      <img src={successIcon} alt="success"></img>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>{name}</b>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button type="button" onClick={handleDismissClick}>
        Dismiss message
      </button>
    </div>
  );
}

export default Success;
