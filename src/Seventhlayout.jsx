import React from "react";
import { FaSearch } from "react-icons/fa";
import image14 from "./assets/image14.jpg";

const Sevnthlayout = () => {
  return (
    <div className="relative w-screen">
      {/* Full-width image */}
      <img
        src={image14}
        className="w-screen  h-[400px] object-cover"
        alt="Banner"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content aligned at bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center px-4">
        <h1 className="text-white text-xl sm:text-4xl font-bold mb-4 drop-shadow-lg text-center">
          Discover Your Next Favorite Book
        </h1>

        {/* Search bar container */}
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search books, authors, genres..."
            className="w-full py-3 pl-12 pr-4 rounded-xl shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Sevnthlayout;
