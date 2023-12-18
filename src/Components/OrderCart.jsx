import React from 'react'
import { Icon } from "@iconify/react";

const OrderCart = ({order}) => {
  return (
    <div className="bg-white border-s-4 border-t border-r-2 border-b border-solid  border-s-sky-400 border-t-teal-300 border-e-green-400 border-b-sky-400 py-2 px-5 rounded  rounded-bl-xl rounded-tr-xl shadow-lg m-2 flex justify-between items-center">
      <span className="text-slate-400 font-semibold">
        <Icon
          icon={
            order.status === "Order Completed" ||
            order.status === "Order Cancelled"
              ? `lets-icons:order`
              : `material-symbols:order-play`
          }
          className="text-2xl text-slate-500 icon"
        />
        Order: {order.id}
      </span>
      <span className="text-slate-400 font-semibold">
        <Icon
          icon="clarity:date-solid"
          className="text-2xl text-slate-500 icon font-bold"
        />
        {" " + order.date}
      </span>
      <span>
        <Icon
          icon={
            order.status === "Order Completed"
              ? "grommet-icons:status-good"
              : order.status === "Order Cancelled"
              ? "ph:x-circle-bold"
              : "heroicons-solid:status-online"
          }
          className={`text-2xl  icon ${
            order.status === "Order Completed"
              ? "text-purple-700"
              : order.status === "Order Cancelled"
              ? "text-red-500"
              : "text-green-500"
          }`}
        />
        {" " + order.status}
      </span>
      <span className="text-slate-400 font-semibold">
        <Icon
          icon="ant-design:dollar-outlined"
          className="text-2xl text-slate-500 icon"
        />
        {" " + order.amount}
      </span>
      <button className="bg-teal-300 p-1 rounded px-3 text-slate-400 font-semibold tracking-widest">
        <Icon icon="arcticons:vtracking" className="icon text-3xl text-white font-bold" />
        Track
      </button>
    </div>
  );
}

export default OrderCart
