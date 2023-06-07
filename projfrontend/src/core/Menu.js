// Navigation Bar

import React from "react";
// npm install react-router-dom@5.2.0 we need to use 5.2.0 dom to use withRouter
import { Link, withRouter } from "react-router-dom";


// To provide styling to current page in Nav Bar
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};


// functional component
const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/user/dashboard")}
          className="nav-link"
          to="/user/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          A. Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signup")}
          className="nav-link"
          to="/signup"
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signin")}
          className="nav-link"
          to="/signin"
        >
          Sign In
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signout")}
          className="nav-link"
          to="/signout"
        >
          Signout
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
