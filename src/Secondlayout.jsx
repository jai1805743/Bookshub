import React from "react";

const Secondlayout = ({ image, name, price, inCart, toggleCart }) => {
  return (
    <div className="bg-white rounded-xl space-y-4 shadow-lg overflow-hidden lg:w-60  w-40 hover:scale-105 hover:shadow-xl transition-transform duration-300">
      {image && (
        <img
          src={image}
          alt={name}
          className="lg:w-full w-40 lg:h-80 h-40 m-2  object-cover lg:p-3"
        />
      )}
      <div className="p-4 text-center flex flex-col justify-between lg:h-[200px]h-[100px]">
        <h1 className="lg:text-lg  h-20 font-semibold text-gray-800 line-clamp-2 shadow-sm">
          {name}
        </h1>
        <h2 className="text-xl font-bold py-4 text-blue-600 mt-2">{price}</h2>
        <button
          className={`mt-auto w-full py-2 rounded-lg transition duration-300 bg-[#F4A460] hover:bg-[#f67402] font-extralight text-xl text-white`}
          style={{ height: "45px" }}
          onClick={toggleCart}
          disabled={inCart}
        >
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Secondlayout;
