import React from 'react'
import OrderCart from "./OrderCart";
  

const Order = () => {
  const ordersData = {
    1: {
      id: 11111,
      status: "Order Received",
      amount: 500,
      date: "18-12-2023 10:11 AM",
    },
    2: {
      id: 22222,
      status: "Order Completed",
      amount: 300,
      date: "01-12-2023 10:11 AM",
    },
    3: {
      id: 33333,
      status: "Order Cancelled",
      amount: 5002,
      date: "18-12-2023 10:11 AM",
    },
    4: {
      id: 44444,
      status: "Order Completed",
      amount: 3500,
      date: "18-12-2023 10:11 AM",
    },
    5: {
      id: 55555,
      status: "Order Completed",
      amount: 100,
      date: "18-12-2023 10:11 AM",
    },
    6: {
      id: 66666,
      status: "Order Completed",
      amount: 900,
      date: "18-12-2023 10:11 AM",
    },
    7: {
      id: 77777,
      status: "Order Completed",
      amount: 400,
      date: "18-12-2023 10:11 AM",
    },
    8: {
      id: 88888,
      status: "Order Completed",
      amount: 1500,
      date: "18-03-2022 10:11 PM",
    },
    9: {
      id: 99999,
      status: "Order Completed",
      amount: 5100,
      date: "18-09-2023 13:11 AM",
    },
    10: {
      id: 10101,
      status: "Order Cancelled",
      amount: 500,
      date: "18-02-2023 10:11 AM",
    },
    11: {
      id: 11110,
      status: "Order Completed",
      amount: 500,
      date: "18-10-2023 10:11 AM",
    },
    12: {
      id: 12121,
      status: "Order Completed",
      amount: 500,
      date: "18-12-2023 10:11 AM",
    },
  };
  return (
    <div className="bg-slate-100 px-10 clear-both">
    <div></div>
      <h1 className="text-3xl text-teal-500 uppercase font-semibold py-7 bg-slate-500s text-center">
        It's time to{" "}
        <span className="font-extrabold text-slate-400 tracking-widest italic">
          BOOK A NEW ORDER
        </span>{" "}
        with a 25% Discount{" "}
        <a
          href="/"
          className="text-slate-100 hover:underline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-md"
        >
          Order Now
        </a>
      </h1>
      <div className="flex flex-col bg-slate-100 border-2 shadow-xl p-2 border-solid border-slate-200 rounded">
        <h3 className="uppercase font-bold pt-2 pb-3 px-5 text-sky-500">
          Your Orders({ordersData && Object.keys(ordersData).length})
        </h3>
        <div className="flex justify-between">
          <div
            className="bg-slate-100 rounded flex-grow overflow-y-scroll"
            style={{ maxHeight: "450px" }}
            id="productList"
          >
            {ordersData &&
              Object.keys(ordersData).map((key) => (
                <OrderCart order={ordersData[key]} key={key} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order
