import React from "react";
import { Search } from "lucide-react";
import './Searchbar.css';

export default function Searchbar() {
  return (
    <>
      {/* Desktop Search Bar */}
      <div className="desktop-search">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>
    </>
  );
}