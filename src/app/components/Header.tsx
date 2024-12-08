import React from 'react';
import Link from 'next/link';
import { Search, Bell, Settings, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] h-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-blue-600 font-bold text-2xl">
          MORENT
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">            
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Settings className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="ml-2">
            <img
              src="/Profil.png"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;