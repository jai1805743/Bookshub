import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaAmazon,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F4E1B0] text-gray-800 pt-14 pb-8 relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44C172.63,75.27,0,120,0,120V0H1200V27.35c0,0-255.39,46.21-494.69,30.66S321.39,56.44,321.39,56.44Z"
            className="fill-[#F4E1B0]"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Brand */}
        <div>
          <h1 className="lg:text-3xl text-2xl font-bold text-gray-900 flex items-center gap-2">
            📚 BooksHub
          </h1>
          <p className="mt-4 lg:text-sm text-xs leading-relaxed">
            Your one-stop shop for books that inspire, entertain, and educate.
            Whether you love fiction, biographies, or self-growth, we’ve got
            something for you.
          </p>
        </div>

        {/* About Books */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            About Books
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Award Winners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                eBooks & Audiobooks
              </a>
            </li>
          </ul>
        </div>

        {/* Authors */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Authors</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Featured Authors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Author Interviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Writing Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition">
                Upcoming Book Signings
              </a>
            </li>
          </ul>
        </div>

        {/* Socials & Amazon */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Follow Us
          </h2>
          <div className="flex space-x-3 mb-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 bg-white shadow rounded-full hover:bg-orange-500 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Amazon Icon */}
          <div className="flex items-center gap-2 mt-3">
            <FaAmazon className="text-2xl text-gray-700 hover:text-orange-600 transition" />
            <span className="text-sm text-gray-700">Shop on Amazon</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} BooksHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
