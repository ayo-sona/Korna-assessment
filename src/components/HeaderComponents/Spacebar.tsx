import React from "react";
import { Search } from "lucide-react";

export default function Spacebar() {
  return (
    <div className="w-full sm:flex-1 sm:max-w-md sm:mx-8">
      <div className="relative">
        <Search className="absolute left-3 xs:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 xs:w-5 xs:h-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 xs:pl-12 pr-3 xs:pr-4 py-2 xs:py-2.5 bg-gray-50 rounded-full text-sm xs:text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 transition-all"
        />
      </div>
    </div>
  );
}