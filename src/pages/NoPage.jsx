import React from "react";
import { Link } from "react-router-dom";

import "../css/Page.css";

export default function NoPage() {
  return (
    <div className="Page">
      <div className="Panel">
        <div className="container">
          <h1>This page doesn't exist...</h1>
          <Link className="Link" to="/">
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}
