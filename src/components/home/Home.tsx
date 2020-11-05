import React from "react";
import "./Home.css";

export function Home() {
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="./assets/mylogo1.png" alt="logo" />
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li className="menu-item">Simple</li>
            <li className="menu-item">Advanced</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
