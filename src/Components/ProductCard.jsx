import { useState } from 'react'
import { Icon } from "@iconify/react";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../Utils/Redux.js";

const ProductCard = ({product}) => {

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const addProductInCart = () => {
    setCount(count=>count+1);
    product.count = count+1;
    dispatch(addProductToCart(product));
  };
  // const addProductToWishlist = () => {
  //   setCount((count) => count + 1);
  //   product.count = count + 1;
  //   dispatch(addProductToCart(product));
  // };
  return (
    <div
      className="shadow-xl p-3 m-3 rounded-md border border-solid border-slate-300"
      style={{ width: "270px" }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "150px" }}
      />
      <h3 className="my-2 font-bold tracking-wide text-lg">
        {product.title.length > 20
          ? product.title.substring(0, 20) + `...`
          : product.title}
      </h3>
      <h4 className="text-lg font-semibold text-sky-300">
        Price: $ {product.price}
      </h4>
      <p className="text-justify h-20 mt-2 text-slate-400">
        {product.description.length > 100
          ? product.description.substring(0, 90) + ` ...`
          : product.description}
      </p>
      <div className="flex justify-between my-2">
        <button
          className="bg-yellow-400 p-1 px-2 rounded-sm text-slate-500 font-semibold tracking-wider"
          onClick={() => addProductInCart(product)}
        >
          Add to Cart
        </button>
        {count > 0 ? (
          <span className="text-md text-green-500 font-semibold  tracking-widest border border-solid border-sky-500 rounded-md p-1">
            Added {count}
            <Icon icon="icon-park-outline:correct" className="inline" />
          </span>
        ) : null}
        <button
          className="bg-slate-400 p-1 px-2 rounded-sm text-slate-200 font-semibold tracking-wider"
          title="Add to Wishlist"
        >
          <Icon icon="bi:heart-fill" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard
