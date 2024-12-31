import React from "react";
import { IoMdMenu } from "react-icons/io";

export default function NavigationBar() {
  return (
    <div className="bg-gray-800 text-white  ">
      <div className="flex items-center  ">
        <div className="flex items-center justify-center gap-1  px-3 py-2 border-2 rounded-[3px] border-slate-800 hover:border-gray-200 ">
          <span>
            <IoMdMenu className="text-2xl " />
          </span>
          <p className="text-sm font-medium">All</p>
        </div>
        <div className=" flex items-center justify-center px-3 py-2 border-2 rount-[3px] border-slate-800 hover:border-gray-200 ">
          <p className="font-semibold text-sm">Today's Deals</p>
        </div>
        <div className=" flex items-center justify-center px-3 py-2 border-2 rount-[3px] border-slate-800 hover:border-gray-200 ">
          <p className="font-semibold text-sm">Customer Service</p>
        </div>
        <div className=" flex items-center justify-center px-3 py-2 border-2 rount-[3px] border-slate-800 hover:border-gray-200 ">
          <p className="font-semibold text-sm">Registry</p>
        </div>
        <div className=" flex items-center justify-center px-3 py-2 border-2 rount-[3px] border-slate-800 hover:border-gray-200 ">
          <p className="font-semibold text-sm">Gift Cards</p>
        </div>
        <div className=" flex items-center justify-center px-3 py-2 border-2 rount-[3px] border-slate-800 hover:border-gray-200 ">
          <p className="font-semibold text-sm">Sell</p>
        </div>
      </div>
    </div>
  );
}
