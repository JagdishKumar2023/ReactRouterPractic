import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div id="navContainer">
      <section>
        <h1>About Page</h1>
        {/* <Header /> */}
        <button onClick={() => goToContact()}>go to contact page</button>
      </section>
    </div>
  );
};
