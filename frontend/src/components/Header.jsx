import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import NavigationBar from "./NavigationBar";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Header() {
  const user = useSelector((state) => state?.user?.user);
  
  console.log(user);
  const navigate = useNavigate();
  return (
    <>
      <main className="shadow-md shadow-blue-300 p-1  bg-black text-white overflow-hidden ">
        <div className="flex items-center gap-1 ">
          <div className="flex w-28 p-3  items-center cursor-pointer  justify-center border-2 rounded-[3px] border-black hover:border-gray-200">
            <img
              src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png"
              alt="logo"
              className=" inline-block "
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex items-center cursor-pointer flex-col border-2 rounded-[3px] border-black hover:border-gray-200 py-2 px-1">
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
          <div className="flex items-center gap-1 cursor-pointer border-2 rounded-[3px] border-black hover:border-gray-200 p-2 py-4">
            <span>
              <FaFlagCheckered />
            </span>
            <p className=" font-semibold uppercase text-sm ">En</p>
            <span>
              <FaCaretDown className="cursor-pointer text-xs text-zinc-400" />
            </span>
          </div>
          <div className="relative">
            {user ? (
              <div
                className=" border-2 cursor-pointer  rounded-[3px] border-black hover:border-gray-200 p-2 py-2 "
                onClick={() => navigate(`/user/dashbord/${user?._id}`)}
              >
                <div>
                  {
                    <p className="font-semibold text-xs">
                      Hello,
                      {user?.fullName.length > 10
                        ? user?.fullName.slice(0, 10) + "..."
                        : user?.fullName}{" "}
                    </p>
                  }
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-sm">Account & Lists</p>
                  <span>
                    <FaCaretDown className="cursor-pointer text-xs text-zinc-400" />
                  </span>
                </div>
              </div>
            ) : (
              <div className=" border-2 cursor-pointer rounded-[3px] border-black hover:border-gray-200 p-2 py-2 ">
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-xs">Hello,</p>
                  <Link to="/login" className="font-semibold text-sm">
                    Sign in
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-sm">Account & Lists</p>
                  <span>
                    <FaCaretDown className="cursor-pointer text-xs text-zinc-400" />
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className=" border-2 rounded-[3px] border-black flex flex-col cursor-pointer hover:border-gray-200 p-2 ">
            <p className="font-semibold text-xs">Returns</p>
            <p className="font-semibold text-sm">& Orders</p>
          </div>
          <div className=" relative  border-2 rounded-[3px] border-black flex items-center justify-center text-center  py-2 px-1 hover:border-gray-200 cursor-pointer ">
            <span>
              <SlBasket className="cursor-pointer" size={35} />
            </span>
            <div className="absolute top-0 right-9 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
              <p className="font-semibold text-xs">0</p>
            </div>
            <span>
              <p className="font-semibold text-sm ">Cart</p>
            </span>
          </div>
        </div>
      </main>
      <main>
        <NavigationBar />
      </main>
    </>
  );
}
