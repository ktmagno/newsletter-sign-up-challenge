import Content from "./components/Content.jsx";
import { useState } from "react";
import Success from "./components/Success.jsx";
import Footer from "./components/Footer.jsx";

function App(props) {
  const [show, setShow] = useState("true");

  return (
    <>
      <div className="signup">{show ? <Content /> : <Success />}</div>;
      <Footer />
    </>
  );
}

export default App;
