import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navsection from "./Navsection";
import Firstlayout from "./Firstlayout";
import Second_data from "./Second_data";
import Thirdlayout from "./Thirdlayout";
import Fourth_data from "./Fourth_data";
import Fifthlayout from "./Fifthlayout";
import Sixth_data from "./Sixth_data";
import Seventhlayout from "./Seventhlayout"; // ✅ fixed spelling
import Footer from "./Footer";
import Cart from "./Cart";
import Theme_change from "./Theme_change";
import Book_collection from "./Book_collection";
import About from "./About";
import Read_more from "./Read_more";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (!cart.find((c) => c.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  return (
    <Router>
      {/* Pass props here */}
      <Navsection cart={cart} removeFromCart={removeFromCart} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Firstlayout />
              <Second_data
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
              <Thirdlayout />
              <Fourth_data
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
              <Fifthlayout />
              <Sixth_data />
              <Seventhlayout /> {/* ✅ fixed here */}
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/book_collection" element={<Book_collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/read_more" element={<Read_more />} />
      </Routes>
    </Router>
  );
};

export default App;
