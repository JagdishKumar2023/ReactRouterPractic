import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

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
      <Outlet />
    </div>
  );
};
