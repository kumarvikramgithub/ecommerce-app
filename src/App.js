import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Products from "./Components/Products.jsx";
import Order from "./Components/Order.jsx";
import TrackOrder from "./Components/TrackOrder.jsx";
import { useSelector } from "react-redux";

import Cart from "./Components/Cart.jsx";
function App() {
  const isDisplayCart = useSelector((state) => {
    return state.data.isDisplayCart;
  });
  return (
    <div className="w-screen">
      <Navbar />
      {isDisplayCart ? <Cart /> : <Products />}
      <TrackOrder />
      <Order/>
    </div>
  );
}

export default App;
