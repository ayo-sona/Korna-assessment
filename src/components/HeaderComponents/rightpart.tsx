import React from "react";
import { Edit3, Bell, Search } from "lucide-react";
import "./Rightpart.css";


export default function Rightpart() {
  return (
    <div className="rightpart-container">
      <button className="mobile-search-button">
        <Search className="mobile-search-icon" />
      </button>
      <button className="write-button">
        <Edit3 className="write-icon" />
        <span className="write-text">Write</span>
      </button>
      <Bell className="notification-icon" />
      <div className="profile-avatar"></div>
    </div>
  );
}
