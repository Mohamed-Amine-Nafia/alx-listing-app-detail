import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        ALXListing
      </div>

      {/* Navigation - types of accommodation */}
      <nav className="flex space-x-4 mt-2 md:mt-0">
        {["Rooms", "Mansion", "Countryside", "Villa", "Apartment"].map(
          (type) => (
            <a
              key={type}
              href="#"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {type}
            </a>
          )
        )}
      </nav>

      {/* Search bar */}
      <div className="mt-2 md:mt-0">
        <input
          type="search"
          placeholder="Search properties..."
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sign In / Sign Up */}
      <div className="mt-2 md:mt-0 space-x-3">
        <button className="text-blue-600 font-semibold hover:underline">
          Sign In
        </button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
