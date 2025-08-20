import React, { useState } from "react";
import { generateBill } from "./bill"; // ✅ Import bill generator

const Cart = ({ cart, removeFromCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBuy = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-300">
      <h1 className="lg:text-3xl text-2xl font-light text-black mb-6">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid lg:gap-6 gap-3 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg lg:w-3/4 w-40  p-5 h-fit shadow-lg flex flex-col  items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="lg:w-80 lg:h-80 w-40 h-40 object-cover lg:m-5 m-1 rounded-lg"
              />
              <h2 className="mt-4 lg:text-lg h-20 text-sm font-semibold">
                {item.name}
              </h2>
              <p className="text-blue-600 h-5 font-bold">{item.price}</p>
              <button
                onClick={() => handleBuy(item)}
                className="mt-4 bg-[#5C4033] text-white lg:px-6 px-4 py-2 rounded-lg hover:bg-black transition"
              >
                Buy Now
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 lg:px-6  px-4 py-2 m-5 bg-green-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Receipt Popup */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 lg:w-96  w-80 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">
              📜 Bill Receipt
            </h2>
            <div className="border-t border-b py-4">
              <p className="text-lg">
                <span className="font-semibold">Book:</span> {selectedItem.name}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Price:</span>{" "}
                {selectedItem.price}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Quantity:</span> 1
              </p>
              <p className="text-lg font-bold mt-2">
                Total: ₹
                {parseFloat(selectedItem.price.replace(/[^0-9.]/g, "")) + 50}
              </p>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={closePopup}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => {
                  generateBill(selectedItem); // ✅ Use bill.js method
                  closePopup();
                }}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Confirm & Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
