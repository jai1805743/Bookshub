import React from "react";
import Secondlayout from "./Secondlayout";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";

const Second_data = ({ addToCart, removeFromCart, cart }) => {
  const toggleCart = (item) => {
    if (cart.find((c) => c.id === item.id)) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
    }
  };

  const Book_details = [
    { id: 1, image: image2, name: "The Violet and the Tom", price: "$799" },
    { id: 2, image: image3, name: "Control", price: "$699" },
    { id: 3, image: image4, name: "The Emperor's Wolf", price: "$850" },
    { id: 4, image: image5, name: "The Lodestar of Ys", price: "$799" },
    { id: 5, image: image6, name: "The Necromancer's Light", price: "$699" },
  ];

  return (
    <div className="border p-6 m-3 border-black rounded-xl bg-gray-100">
      <div className="text-center py-5 mb-8 border p-6 m-3">
        <h1 className="lg:text-4xl  text-2xl font-bold">New Release Books</h1>
        <p className="text-gray-600 mt-2 lg:text-lg  text-sm">
          Discover the most exciting new books of August 2025.
        </p>
      </div>

      <div className="grid justify-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {Book_details.map((item) => (
          <Secondlayout
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
        <button className="bg-black text-white lg:px-20 px-10  rounded-lg lg:py-3 py-2 text-lg font-light hover:border-2 hover:bg-white hover:text-black hover:border-black">
          View All
        </button>
      </div>
    </div>
  );
};

export default Second_data;
