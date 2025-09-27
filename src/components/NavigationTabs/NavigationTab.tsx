import React from "react";

export default function NavigationTabs() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex space-x-4 xs:space-x-6 sm:space-x-8">
          <button className="py-3 xs:py-4 border-b-2 border-black text-sm xs:text-sm font-medium text-black whitespace-nowrap">
            For you
          </button>
          <button className="py-3 xs:py-4 border-b-2 border-transparent text-sm xs:text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
            Featured
          </button>
        </div>
      </div>
    </div>
  );
}