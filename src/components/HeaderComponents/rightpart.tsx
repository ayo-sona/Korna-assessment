import React from "react";
import { Edit3, Bell } from "lucide-react";

export default function Rightpart() {
    return (
      <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-6">
        <button className="flex items-center space-x-1 xs:space-x-2 text-gray-600 hover:text-gray-800">
          <Edit3 className="w-4 h-4 xs:w-5 xs:h-5" />
          <span className="hidden md:block text-sm xs:text-base">Write</span>
        </button>
        <Bell className="w-5 h-5 xs:w-6 xs:h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-black rounded-full flex-shrink-0"></div>
      </div>
    );
}