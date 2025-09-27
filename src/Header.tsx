import React from 'react';
import { Menu, ExternalLink} from 'lucide-react';
import Spacebar from './components/HeaderComponents/Spacebar';
import Rightpart from './components/HeaderComponents/rightpart';

const Header = () => {
    return (
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="flex lg:hidden justify-center py-2 bg-gray-50 border-b border-gray-100">
          <button className="flex items-center text-center text-gray-600 hover:text-gray-800 px-4 py-1 rounded-full hover:bg-gray-100 transition-colors">
            <span className="text-sm">open in app</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-2 xs:py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Menu */}
            <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-1 xs:space-x-2">
                <Menu className="w-5 h-5 xs:w-6 xs:h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
                <h1 className="text-xl xs:text-2xl font-bold text-black">Medium</h1>
              </div>
            </div>
  
            {/* Center - Search (Hidden on small mobile, visible on larger screens) */}
            <div className="hidden sm:block md:px-2 flex-1 max-w-md mx-4">
              <Spacebar />
            </div>
  
            {/* Right part */}
            <div className="flex-shrink-0">
              <Rightpart />   
            </div>

          </div>
          
          {/* Mobile search bar - Shows below main header on small screens */}
          <div className="sm:hidden mt-2 pt-2 border-t border-gray-100">
            <Spacebar />
          </div>
        </div>
      </header>
    );
  };

  export default Header;