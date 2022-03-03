import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className="container">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/home">{props.homeName}</Link>
            </li>
            <li>
              <Link to="/experience">{props.exp}</Link>
            </li>
            <li>
              <Link to="/project">{props.projectName}</Link>
            </li>
            <li>
              <Link to="/contact">{props.contactus}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
