import React from "react";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div id="navContainer">
      {/* <header>
        <a href="#">Logo</a>
        <nav id="navBar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header> */}
      <Header />
      {/* <section>
        <h1>Home Page</h1>
      </section> */}
    </div>
  );
};
