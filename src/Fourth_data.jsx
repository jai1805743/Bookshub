import React from "react";
import Fourthlayout from "./Fourthlayout";
import image7 from "./assets/image7.jpg";
import image8 from "./assets/image8.jpg";
import image9 from "./assets/image9.jpg";
import image10 from "./assets/image10.jpg";
import image11 from "./assets/image11.jpg";

const Fourth_data = ({ addToCart, removeFromCart, cart = [] }) => {
  const toggleCart = (item) => {
    if (cart.find((c) => c.id === item.id)) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
    }
  };

  const Book_details = [
    {
      id: 1,
      image: image7,
      name: "The Shadows Beyond",
      oldPrice: "$999",
      price: "$799",
    },
    {
      id: 2,
      image: image8,
      name: "The Gunfighters: How Texas Made the West Wild",
      oldPrice: "$899",
      price: "$699",
    },
    {
      id: 3,
      image: image9,
      name: "Mark Twain",
      oldPrice: "$999",
      price: "$850",
    },
    {
      id: 4,
      image: image10,
      name: "The Fate of the Day: The War for America, Fort Ticonderoga to Charleston, 1777-1780",
      oldPrice: "$999",
      price: "$799",
    },
    {
      id: 5,
      image: image11,
      name: "Realm of Ice and Sky: Triumph, Tragedy, and History's Greatest Arctic Rescue",
      oldPrice: "$899",
      price: "$699",
    },
  ];

  return (
    <div className="border p-6 m-3 border-black rounded-xl bg-gray-100">
      <div className="text-center py-5 mb-8 border p-6 m-3">
        <h1 className="lg:text-4xl text-2xl font-bold">Bestselling Books</h1>
        <p className="text-gray-600 mt-2">
          Discover the most exciting new books of August 2025.
        </p>
      </div>

      {/* Book Cards */}
      <div className="grid justify-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {Book_details.map((item) => (
          <Fourthlayout
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            inCart={!!cart.find((c) => c.id === item.id)}
            toggleCart={() => toggleCart(item)}
          />
        ))}
      </div>

      <div className="flex justify-center items-center py-5">
        <button className="bg-black text-white lg:px-20 px-10 rounded-lg lg:py-3 py-2 text-lg font-light hover:border-2 hover:bg-white hover:text-black hover:border-black">
          View All
        </button>
      </div>
    </div>
  );
};

export default Fourth_data;
