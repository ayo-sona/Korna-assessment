import React from 'react';
import Searchbar from './components/HeaderComponents/Searchbar';
import Rightpart from './components/HeaderComponents/rightpart';
import './Header.css';
import { ExternalLink } from "lucide-react"

export default function Header() {
  return (
    <header className="header">
        <button className="open-in-app-btn">
            <span>open in app <ExternalLink size={12} /></span>
        </button>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <h1 className="logo">Medium</h1>
          </div>
          
          {/* Search Bar */}
          <Searchbar />
          
          {/* Actions */}
          <div className="actions-section">
            {/* Right side actions */}
            <Rightpart />
          </div>
        </div>
      </div>
    </header>
  );
}