import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

export default function Header() {
  return (
    <header className="shadow-md shadow-blue-300 p-1  bg-black text-white ">
      <div className="flex items-center gap-1 ">
        <div className="flex w-28 p-3  items-center  justify-center border-2 rounded-[3px] border-black hover:border-gray-200">
          <img
            src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png"
            alt="logo"
            className=" inline-block "
          />
        </div>
        <div className="flex items-center flex-col border-2 rounded-[3px] border-black hover:border-gray-200 py-2 px-1">
          <div>
            <p className="text-xs font-medium text-gray-300">Deliver to</p>
          </div>
          <div className="flex items-center">
            <span>
              <IoLocationOutline />
            </span>
            <p className="text-sm font-medium text-gray-300 mx-1">Nepal</p>
          </div>
        </div>
        <div className=" bg-white text-black h-10 flex items-center justify-between rounded-md ">
          <div className="flex items-center">
            <div className="flex items-center p-2 border-r-[1px] border-gray-400 rounded-l-md bg-gray-200">
              <p className="text-sm font-medium text-gray-700">All</p>
              <span>
                <FaCaretDown className="cursor-pointer text-sm" />
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Amazon..."
                className="outline-none h-full w-[60vw] px-2"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center p-[10px] bg-yellow-400 rounded-r-md ">
              <FaSearch size={20} className="cursor-pointer " />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 border-2 rounded-[3px] border-black hover:border-gray-200 p-2 py-4">
          <span>
            <FaFlagCheckered />
          </span>
          <p className=" font-semibold uppercase text-sm ">En</p>
          <span>
            <FaCaretDown className="cursor-pointer text-xs text-zinc-400" />
          </span>
        </div>
        <div className=" border-2 rounded-[3px] border-black hover:border-gray-200 p-2 py-2 ">
          <div>
            <p className="font-semibold text-xs">Hello, sign in</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-sm">Account & Lists</p>
            <span>
              <FaCaretDown className="cursor-pointer text-xs text-zinc-400" />
            </span>
          </div>
        </div>
        <div className=" border-2 rounded-[3px] border-black flex flex-col hover:border-gray-200 p-2 ">
          <p className="font-semibold text-xs">Returns</p>
          <p className="font-semibold text-sm">& Orders</p>
        </div>
        <div className=" relative border-2 rounded-[3px] border-black flex flex-col hover:border-gray-200 p-2 px-4 ">
          <span>
            <SlBasket size={30} className="cursor-pointer " />
          </span>
          <div className="absolute top-0 right-5 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
            <p className="font-semibold text-xs ">0</p>
          </div>
          <p className="font-semibold text-xs absolute bottom-2 -right-1 ">Cart</p>
        </div>
      </div>
    </header>
  );
}

/* <div className="flex h-10  w-[60vw]  items-center border-2 border-gray-300 rounded-md  bg-white shadow-sm text-black">
          <div className="flex items-center justify-center h-10 px-4 bg-gray-200 border-r border-gray-300 rounded-l-md">
            <p className="text-sm font-medium text-gray-700">All</p>
          </div>
          <div className="flex-1">
            <input
              type="text"
              className="h-8 w-full px-3 text-sm outline-none"
              placeholder="Search Amazon..."
            />
          </div>
          <div className="flex items-center justify-center h-10 px-4 bg-yellow-500 rounded-r-md">
            <FaSearch size={20} />
          </div>
        </div>*/
