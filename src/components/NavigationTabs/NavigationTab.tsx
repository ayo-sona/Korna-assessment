import React from "react";
import "./NavigationTab.css";

export default function NavigationTabs() {
  return (
    <div className="navigation-container">
      <div className="navigation-wrapper">
        <div className="navigation-tabs">
          <button className="tab-button active">
            For you
          </button>
          <button className="tab-button">
            Featured
          </button>
        </div>
      </div>
    </div>
  );
}