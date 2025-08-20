import React from "react";
import bgimage from "./assets/bgimage.jpg"; // fixed variable name
import { Link } from "react-router-dom";

const Firstlayout = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center min-h-screen text-center"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="  p-8 rounded-lg text-black max-w-lg">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-2xl font-bold mb-4">
            This Month
          </h1>
          <p className="mb-6 lg:text-lg md:text-sm text-xs">
            Here are some standout new book releases in August 2025 across
            genres and regions:
          </p>
          <Link to="/read_more">
            <button className="border-2 border-black lg:px-10 lg:py-4 md:px-5 md:py-2 px-3  py-1 rounded-lg hover:bg-black hover:text-white text-black transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Firstlayout;
