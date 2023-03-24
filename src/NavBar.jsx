import React from "react";
import { Link } from "react-router-dom";

import "./css/NavBar.css";
import './css/Page.css';

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="left">
        <Link to='/' className="pagetitle">JQSX<span className="pagetitle end">.eu</span></Link>
      </div>
      <div className="right">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export function Footer() {
    return <div className="Footer">
        <p>Copyright 2023 Franciszek Rakowiecki</p>
    </div>;
}
