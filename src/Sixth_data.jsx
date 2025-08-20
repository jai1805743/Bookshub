import React from "react";
import image16 from "./assets/image16.jpg";
import image17 from "./assets/image17.jpg";
import image18 from "./assets/image18.jpg";
import image19 from "./assets/image19.jpg";
import image20 from "./assets/image20.jpg";

const Sixth_data = () => {
  const Book_details = [
    { image: image16, name: "The Shadows Beyond" },
    { image: image17, name: "The Gunfighters" },
    { image: image18, name: "Mark Twain" },
    {
      image: image19,
      name: "The Fate of the Day",
    },
    {
      image: image20,
      name: "Realm of Ice and Sky",
    },
  ];

  return (
    <div className="">
      {/* Title Section */}
      <div className="text-center py-5 mb-8 border p-6 m-3">
        <h1 className="lg:text-4xl  text-2xl font-bold">Favorite Authors</h1>
        <p className="text-gray-600 mt-2 lg:text- text-sm">
          Since you haven't provided the names of your favorite authors yet,
          I'll give you a few examples of how you can write an introduction that
          you can easily customize.
        </p>
      </div>

      {/* Book Cards */}
      <div className="grid justify-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {Book_details.map((item, index) => (
          <div
            key={index}
            className="lg:w-40 w-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-fit m-5  shadow-md"
            />
            <h2 className="mt-2 text-center text-lg font-bold hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-lg text-gray-800">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sixth_data;
