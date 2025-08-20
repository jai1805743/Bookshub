import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faSearch,
  faCartShopping,
  faUserCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navsection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 bg-white shadow-md z-50">
      {/* NAV CONTAINER */}
      <div className="flex items-center justify-between px-4 py-3 lg:px-10">
        {/* LEFT (Mobile Menu Button) */}
        <button
          className="lg:hidden font-extralight border-2 border-black rounded-full text-2xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* CENTER (Logo) */}
        <h1 className="text-2xl lg:text-3xl font-extralight absolute lg:left-32  left-1/2 transform -translate-x-1/2">
          Bookshub
        </h1>

        {/* RIGHT (Cart for Mobile) */}
        <Link to="/cart" className="lg:hidden">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl hover:text-red-500 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-10 mx-auto">
          <Link
            to="/"
            className="text-xl font-semibold p-3 hover:bg-black hover:text-white rounded-md"
          >
            HOME
          </Link>
          <Link
            to="/book_collection"
            className="text-xl font-semibold p-3 hover:bg-black hover:text-white rounded-md"
          >
            BOOK COLLECTION
          </Link>
          <Link
            to="/about"
            className="text-xl font-semibold p-3 hover:bg-black hover:text-white rounded-md"
          >
            ABOUT
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex gap-4">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-2xl hover:text-slate-400 cursor-pointer"
          />
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl hover:text-red-500 cursor-pointer"
            />
          </Link>
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-2xl hover:text-slate-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen px-4 pb-4" : "max-h-0"
        }`}
      >
        <Link
          to="/"
          className="block text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md"
        >
          HOME
        </Link>
        <Link
          to="/book_collection"
          className="block text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md"
        >
          BOOK COLLECTION
        </Link>
        <Link
          to="/about"
          className="block text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md"
        >
          ABOUT
        </Link>

        {/* Mobile Icons */}
        <div className="flex gap-4 pt-3">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-2xl hover:text-slate-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-2xl hover:text-slate-400 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navsection;
