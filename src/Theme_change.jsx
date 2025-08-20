import React, { useState } from "react";

const Theme_change = (props) => {
  const [bg, setBg] = useState(props.backgroundColor);
  const [text, setText] = useState(props.color);

  const toggleTheme = () => {
    setBg(bg === "black" ? "white" : "black");
    setText(text === "white" ? "black" : "white");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen transition-colors duration-500"
      style={{ backgroundColor: bg }}
    >
      <h1 className="text-3xl font-bold p-4" style={{ color: text }}>
        Welcome to my world
      </h1>
      <button
        onClick={toggleTheme}
        className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Theme Change
      </button>
    </div>
  );
};

export default Theme_change;
