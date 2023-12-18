import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import {
  updateProductQuantityInCart,
  removeProductFromCart,
} from "../Utils/Redux.js";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const updateQuantity = (isInc)=>{
    product.count = isInc ? product.count + 1 : product.count>0 ?product.count - 1: 0; 
    dispatch(updateProductQuantityInCart(product));
  }
  const deleteProduct = ()=>{
    dispatch(removeProductFromCart(product));
  }
  return (
    <div className="bg-white p-2 flex items-center border border-solid border-slate-300">
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "100px" }}
        className="shadow-2xl rounded-xl p-2 border border-solid border-slate-300"
      />
      <div className="ml-5">
        <div className="flex items-center">
          <h2 className="mr-2 text-xl font-bold text-skay-400">{product.title}</h2>
          {product.count===0 ? <button className="mx-3 border-2 border-solid border-red-500 rounded-full flex justify-center items-center" style={{width:"20px",height:"20px"}}>
            <Icon
              icon="octicon:x-12"
              className={`text-xl font-semibold text-red-500`}
              onClick={deleteProduct}
            />
          </button> : ''}
        </div>
        <div className="myf-1">
          <span className="font-semibold  tracking-wider  mr-3">Category:</span>{" "}
          {product.category}
        </div>
        <div className="my-1">
          <span className="font-semibold  tracking-wider mr-3">Quantity:</span>
          <button
            className="bg-yellow-300 py-1 px-2 rounded-ss-xl 
          rounded-bl-xl border-t border-b border-solid border-yellow-300 font-bold"
            onClick={() => updateQuantity(false)}
          >
            -
          </button>
          <span className="py-1 px-5 border-t-2 border-b-2 border-solid border-yellow-300">
            {product.count}
          </span>
          <button
            className="bg-yellow-300 py-1 px-2 rounded-ee-xl 
          rounded-tr-xl border-t border-b border-solid border-yellow-300 font-bold"
            onClick={() => updateQuantity(true)}
          >
            +
          </button>
        </div>
        <div>
          <span className="font-semibold tracking-wider  mr-3">
            Price of {product.count}:
          </span>{" "}
          {product.price * product.count}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
