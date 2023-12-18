import React from 'react'
import { Icon } from "@iconify/react";

const TrackOrder = () => {
  const order = {
    id: 11111,
    status: "Order Completed",
    amount: 500,
    date: "18-12-2023 10:11 AM",
  };
  return (
    <div>
      <div className="bg-slate-100 px-32 py-8">
        <h1 className="text-3xl font-semibold text-teal-500 pb-1 border-b-2 border-solid border-slate-200">
          Order No:{" "}
          <span className="font-semibold text-purple-600">#{order.id}</span>
        </h1>
        <div className="flex py-5 justify-between">
          <div>
            <p className="tracking-wide text-lg font-medium text-sky-300">
              Your order is
            </p>
            <p className="tracking-widest text-4xl font-extrabold py-2">
              Delivered
            </p>
            <p className="tracking-wide text-lg font-semibold">
              as on 25 Dec 2023, Monday
            </p>
          </div>
          <div className="bg-slate-200 p-3 rounded-md flex flex-col justify-center">
            {order.status === "Order Completed" && (
              <div className="hover:underline font-semibold text-yellow-700 text-lg tracking-wide hover:cursor-pointer">
                <Icon
                  icon="ic:twotone-replay-circle-filled"
                  className="icon text-2xl"
                />{" "}
                Return Order
              </div>
            )}
            {order.status === "Order Completed" && (
              <div className="hover:underline font-semibold text-teal-400 text-lg tracking-wide py-1 hover:cursor-pointer">
                <Icon icon="ri:exchange-fill" className="icon text-2xl" />{" "}
                Exchange Item(s)
              </div>
            )}
            {order.status !== "Order Completed" && (
              <div className="hover:underline font-semibold text-red-700 text-lg tracking-wide pd-1 hover:cursor-pointer">
                <Icon icon="oi:circle-x" className="icon text-xl mr-1" /> Cancel
                Order
              </div>
            )}
            {order.status === "Order Received" && (
              <div className="font-semibold text-slate-700 text tracking-wide pt-2 border-t-2 border-solid border-slate-300 mt-2">
                <p>For Delivery queries</p>
                <a href="/" className="text-sky-400 hover:underline">
                  Contact Us
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-5 px-8 flex justify-center">
        <div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-teal-400"></div>
            <div className="border-2 border-solid border-slate-500 w-48 "></div>
          </div>
          <div className="py-5">
            <p className="font-medium text-sky-400 py-2">
              <Icon
                icon="lets-icons:order-fill"
                className="icon text-4xl -ml-2"
              />
              Order Received
            </p>
            <p>{order.date}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-teal-400"></div>
            <div className="border-2 border-solid border-slate-500 w-48"></div>
          </div>
          <div className="py-5">
            <p className="font-medium text-sky-400 py-2">
              <Icon
                icon="material-symbols-light:order-approve-sharp"
                className="icon text-4xl -ml-2"
              />
              Order Confirmed
            </p>
            <p>{order.date}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-teal-400"></div>
            <div className="border-2 border-solid border-slate-500 w-48"></div>
          </div>
          <div className="py-5">
            <p className="font-medium text-sky-400 py-2">
              <Icon icon="mdi:truck-delivery" className="icon text-4xl -ml-2" />
              Order Dispatch
            </p>
            <p>{order.date}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-teal-400"></div>
            <div className="border-2 border-solid border-slate-500 w-48"></div>
          </div>
          <div className="py-5">
            <p className="font-medium text-sky-400 py-2">
              <Icon
                icon="carbon:delivery-parcel"
                className="icon text-4xl -ml-2"
              />
              In Transit
            </p>
            <p>{order.date}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-teal-400"></div>
            <div className="border-2 border-solid border-slate-500 w-48"></div>
          </div>
          <div className="py-5">
            <p className="font-medium text-sky-400 py-2">
              <Icon
                icon="game-icons:delivery-drone"
                className="icon text-4xl -ml-2"
              />
              Ready For Delivery
            </p>
            <p>{order.date}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-teal-400"></div>
            {/* <div className="border-2 border-solid border-slate-500 w-48"></div> */}
          </div>
          <div className="py-5">
            <p className="font-medium text-sky-400 py-2">
              <Icon icon="et:happy" className="icon text-4xl -ml-2" />
              Delivered
            </p>
            <p>{order.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackOrder
