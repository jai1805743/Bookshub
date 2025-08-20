import React from "react";
import { Link } from "react-router-dom";
import harry from "./assets/harry_potter.jpg";

const Read_more = () => {
  return (
    <div className="bg-[#F9F5F0] min-h-screen font-serif">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#C6A87D] via-[#DCC9A5] to-[#EDE3D1] text-gray-900 py-24 px-6 text-center overflow-hidden">
        <h1 className="lg:text-6xl text-2xl font-extrabold mb-6 drop-shadow-md animate-fade-in">
          This Month Special at Bookshub
        </h1>
        <p className="lg:text-lg text-sm md:text-xl max-w-2xl mx-auto text-gray-700 animate-fade-in">
          Every page is a step deeper into imagination, every story is a journey
          waiting to unfold.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={harry}
            alt="Harry Potter Book"
            className="rounded-2xl shadow-lg transform hover:scale-105 transition"
          />

          <div className="absolute -bottom-6 -right-6 bg-[#5C4033] text-white px-4 py-2 rounded-lg shadow-md text-sm">
            Since 2025 ✨
          </div>
        </div>
        <div>
          <h2 className="lg:text-4xl text-2xl font-bold text-[#5C4033] mb-4">
            A Journey Beyond the Pages
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At <span className="font-semibold">Book Haven</span>, reading is not
            just a habit — it’s a soulful experience. With warm tones, wooden
            shelves, and the aroma of fresh pages, our bookshop is designed to
            feel like home.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Here, every book whispers stories of comfort, wisdom, and timeless
            beauty — curated to give you more than just words, but memories to
            cherish.
          </p>
        </div>
      </section>

      {/* ⭐ New Release Section */}
      <section className="bg-[#FFFDF7] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="lg:text-3xl text-2xl font-bold text-[#5C4033] mb-12">
            📖 New Releases This Week
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Book 1 */}
            <div className="flex flex-col justify-center items-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition hover:-translate-y-2">
              <img
                src="https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg"
                alt="The Silent Echo"
                className="rounded-lg mb-4 h-56 lg:w-full  object-cover"
              />
              <h3 className="lg:text-xl text-lg font-semibold text-[#5C4033]">
                The Silent Echo
              </h3>
              <p className="text-gray-600 lg:text-sm text-xs mt-2">
                A gripping mystery novel where secrets echo louder than words.
              </p>
              <button className="mt-4 bg-[#5C4033] text-white lg:px-4 py-2  px-3 rounded-lg hover:bg-[#4A3328] transition">
                Buy Now
              </button>
            </div>

            {/* Book 2 */}
            <div className=" flex flex-col justify-center items-center p-6 rounded-xl  bg-white shadow-md hover:shadow-xl transition hover:-translate-y-2">
              <img
                src="https://m.media-amazon.com/images/I/81gepf1eMqL.jpg"
                alt="Tales of Tomorrow"
                className="rounded-lg mb-4 h-56 lg:w-full object-cover"
              />
              <h3 className="lg:text-xl text-lg font-semibold text-[#5C4033]">
                Tales of Tomorrow
              </h3>
              <p className="text-gray-600 lg:text-sm text-xs mt-2">
                A futuristic sci-fi journey exploring love and survival.
              </p>
              <button className="mt-4 bg-[#5C4033] text-white lg:px-4 py-2 rounded-lg px-3 hover:bg-[#4A3328] transition">
                Buy Now
              </button>
            </div>

            {/* Book 3 */}
            <div className="flex flex-col justify-center items-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition hover:-translate-y-2">
              <img
                src="https://m.media-amazon.com/images/I/81p1L85KinL.jpg"
                alt="Whispers of the Wind"
                className="rounded-lg mb-4 h-56 lg:w-full object-cover"
              />
              <h3 className="lg:text-xl text-lg font-semibold text-[#5C4033]">
                Whispers of the Wind
              </h3>
              <p className="text-gray-600 lg:text-sm text-xs mt-2">
                A heartwarming romance that flows like the evening breeze.
              </p>
              <button className="mt-4 bg-[#5C4033] text-white lg:px-4 py-2 rounded-lg px-3 hover:bg-[#4A3328] transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#FFFDF7] py-20 px-6 text-center">
        <blockquote className="italic lg:text-2xl text-xl text-[#5C4033] max-w-3xl mx-auto leading-relaxed">
          “A room without books is like a body without a soul.”
        </blockquote>
        <p className="mt-4 text-gray-600">— Marcus Tullius Cicero</p>
      </section>

      {/* CTA */}
      <section className="bg-[#DCC9A5] text-gray-900 py-20 px-6 text-center relative">
        <h2 className="lg:text-3xl text-2xl font-bold mb-4">
          Start Your Next Story 🌼
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          Take home a book, carry away an experience. Let’s begin your next
          chapter together.
        </p>
        <Link to="/book_collection">
          <button className="bg-[#5C4033] text-white font-semibold lg:px-8 lg:py-4 px-5 py-3 rounded-xl hover:bg-[#4A3328] transition transform hover:scale-105 shadow-lg">
            Explore Collections
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Read_more;
