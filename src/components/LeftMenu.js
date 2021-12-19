import React from "react";
import { NavLink } from "react-router-dom";

const LeftMenu = () => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" hidden />
      <nav className="nav">
        <label htmlFor="nav-toggle" className="nav-toggle"></label>
        <h2>Menu</h2>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Colors list
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              Add color
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LeftMenu;
