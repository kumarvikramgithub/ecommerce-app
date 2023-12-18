import React from 'react'
// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {useDispatch} from 'react-redux'
import {toggleCart} from '../Utils/Redux.js'
const Navbar = () => {
  const [isCartDispaly, setIsCartDispaly] = React.useState(false)
  const dispatch = useDispatch();
  const showCart = () =>{
    dispatch(toggleCart(!isCartDispaly));
    setIsCartDispaly(!isCartDispaly);
  }
  return (
    <div className="w-full bg-sky-400 flex justify-between items-center px-20 py-3">
      <div className="logo">
        <a
          href="/"
          className="no-underline text-4xl font-extrabold text-slate-700 tracking-widest"
        >
          Pal Store
        </a>
      </div>
      <div>
        <a
          href="/"
          className="text-3xl text-slate-300 mx-5 hover:text-slate-100"
        >
          Home
        </a>
        <a
          href="/"
          className="text-xl text-slate-300 mx-5 hover:text-slate-100"
        >
          Product
        </a>
        <a
          href="/"
          className="text-xl text-slate-300 mx-5 hover:text-slate-100"
        >
          Services
        </a>
      </div>
      <div className="flex items-center">
        <div className="mx-5">
          <input
            type="text"
            placeholder="Search products"
            className="outline-none p-2 text-lg rounded-ss-xl rounded-bl-xl"
          />
          <button className="bg-slate-100 p-2 text-lg font-medium tracking-wider  rounded-ee-xl rounded-tr-xl">
            Search
          </button>
        </div>
        <div className="text-slate-200 flex items-center font-semibold tracking-widest">
          <Icon
            icon="material-symbols-light:order-approve-outline"
            className={`text-4xl font-semibold text-purple-100
            cursor-pointer`}
          />
        </div>
        <div className="mx-5">
          <Icon
            icon={isCartDispaly ? "octicon:x-12" : "uil:cart"}
            className={`text-4xl font-semibold ${
              isCartDispaly ? "text-red-500" : "text-purple-100"
            } cursor-pointer`}
            onClick={showCart}
          />
        </div>
        <div className="text-slate-200 flex items-center font-semibold tracking-widest">
          <Icon
            icon="mingcute:user-4-fill"
            className={`text-4xl font-semibold text-purple-100
            cursor-pointer`}
          />
          Vikram
        </div>
      </div>
    </div>
  );
}

export default Navbar
