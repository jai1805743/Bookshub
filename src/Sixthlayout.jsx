import React from "react";

const Sixthlayout = ({ image, name }) => {
  return (
    <div className="lg:w-40  hover:scale-105 transition-transform duration-300">
      {/* Full Image */}
      {image && (
        <img
          src={image}
          alt={name}
          className="lg:w-full lg:h-56 w-1/2 h-32 shadow-md"
        />
      )}

      {/* Name */}
      <h2 className="mt-2 text-center lg:text-sm text-xs font-medium text-gray-800">
        {name}
      </h2>
    </div>
  );
};

export default Sixthlayout;
