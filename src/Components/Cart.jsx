import React from 'react'
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Icon } from "@iconify/react";

const Cart = () => {
  const [subTotal, setSubTotal] = React.useState(0);
  const [totalBillingAmount, setTotalBillingAmount] = React.useState(0);
  const [taxes, setTaxes] = React.useState(10);
  const [shippingCharge, setShippingCharge] = React.useState(40);
  
  
  const cartData = useSelector((state) => {
    return state.data.cart;
  });

  React.useEffect(()=>{
    let totalPrice = 0;
    for (const key in cartData) {
      totalPrice += cartData[key].price * cartData[key].count;
    }
    setSubTotal(Math.round(totalPrice * 100) / 100);
    if(totalPrice===0){
      setTaxes(0);
      setShippingCharge(0);
    }else{
      setTaxes(10);
      setShippingCharge(40);
    }
    setTotalBillingAmount(
      Math.round((subTotal + taxes + shippingCharge) * 100) / 100
    );
  },[setSubTotal, cartData, subTotal, taxes, shippingCharge])
  return (
    <div className="w-screen px-24 flex flex-col items-center">
      {cartData && Object.keys(cartData).length > 0 ? (
        <div className="py-2">
          <div className="text-3xl text-red-500 uppercase font-semibold py-7 bg-slate-500s">
            Get free shipping with{" "}
            <span className="text-4xl font-extrabold text-slate-700 tracking-widest">
              Pal store+
            </span>{" "}
            on every order, every time.
          </div>
          <div className="flex flex-col bg-slate-100 border-2 shadow-xl p-2 border-solid border-slate-200 rounded">
            <h1 className="uppercase font-bold pt-2 pb-3 px-5 text-sky-500">
              Your Cart({cartData && Object.keys(cartData).length})
            </h1>
            <div className="flex justify-between ">
              <div
                className="bg-slate-100 rounded flex-grow overflow-y-scroll"
                style={{ maxHeight: "450px" }}
                id="productList"
              >
                {cartData &&
                  Object.keys(cartData).map((key) => (
                    <CartProduct product={cartData[key]} key={key} />
                  ))}
              </div>
              <div
                className="bg-slate-700 ml-5 p-5 rounded font-semibold"
                style={{ minWidth: "300px" }}
              >
                <h1 className="text-sky-500 text-2xl uppercase underline tracking-widest">
                  Summary
                </h1>
                <div className="my-4 border-b shadow py-2 border-solid border-slate-500 rounded-lg w-full px-5">
                  <span className="uppercase text-xl text-slate-300 tracking-widest ">
                    Sub Total:
                  </span>
                  {"  "}
                  <span className="font-semibold text-sky-300">
                    ${subTotal}
                  </span>
                </div>
                <div className="border-b shadow py-2 border-solid border-slate-500 rounded-lg w-full px-5">
                  <span className="uppercase text-xl text-slate-300 tracking-widest ">
                    Shipping:
                  </span>
                  {"  "}
                  <span className="font-semibold text-sky-300">
                    ${shippingCharge}
                  </span>
                </div>
                <div className="border-b shadow py-2 border-solid border-slate-500 rounded-lg w-full px-5">
                  <span className="uppercase text-xl text-slate-300 tracking-widest ">
                    Taxes:
                  </span>
                  {"  "}
                  <span className="font-semibold text-sky-300">${taxes}</span>
                </div>
                <div className=" mt-12 border-2 py-2 border-double border-sky-500 rounded-xl w-full px-5">
                  <span className="uppercase text-xl text-red-500 tracking-widest ">
                    Total:
                  </span>
                  {"  "}
                  <span className="font-semibold text-sky-300 tracking-wider">
                    ${totalBillingAmount}
                  </span>
                </div>
                <div className=" mt-12 border-2 py-2 border-double border-sky-500 rounded w-full px-5 bg-sky-500 uppercase flex items-center justify-center text-xl font-semibold text-slate-300 tracking-widest cursor-pointer">
                  <Icon icon="clarity:lock-solid" className="inline" />
                  Checkout
                  <Icon icon="emojione:right-arrow" className="inline" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex flex-col items-center  p-5 bg-slate-300 rounded-xl">
          <h3 className="text-3xl tracking-widest text-red-600 font-bold mb-5">
            Your cart is Empty!
          </h3>
          <img
            src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="empty cart"
            style={{ width: "500px", height: "400px" }}
            className="shadow-2xl rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Cart
