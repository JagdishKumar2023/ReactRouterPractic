import React from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const thapa = useNavigate();

  const goToHome = () => {
    thapa("/");
  };

  return (
    <div id="navContainer">
      <section>
        <h1>Contact Page</h1>
        <button onClick={goToHome}>go to Home Page</button>
      </section>
      {/* <Header /> */}
    </div>
  );
};
