import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function AdminSideBar() {
  const user = useSelector((state) => state?.user?.user);
  return (
    <>
      {/* <div className="h-fit border-b w-1/4 flex flex-col gap-9 items-center border-r border-zinc-500 py-10">
        <div className="flex flex-col items-center gap-6 border-b pb-10 w-full border-zinc-500">
          <img
            src={user?.profileImage}
            alt="profile"
            className="h-48 w-48 object-cover overflow-hidden rounded-full cursor-pointer"
          />
          <span>
            <h1 className="text-center text-zinc-900 font-semibold text-lg">
              {user?.fullName}
            </h1>
            <h1 className="text-center text-zinc-500 cursor-pointer">
              {user?.address[0].district}
            </h1>
          </span>
        </div>
        <div className="flex flex-col gap-2 border-b w-full items-center border-zinc-500 pb-10">
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-900 font-semibold text-lg">
              Branch Country :
            </p>
            <p className="text-center text-zinc-600 text-sm">
              {user?.address[0].country}
            </p>
          </span>
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-900 font-semibold text-lg">
              Branch District :
            </p>
            <p className="text-center text-zinc-600 text-sm">
              {user?.address[0].district}
            </p>
          </span>
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-900 font-semibold text-lg">
              Branch Area :
            </p>
            <p className="text-center text-zinc-600 text-sm">
              {user?.address[0].area}
            </p>
          </span>
        </div>

        <div className="flex gap-9 items-center justify-center w-full pb-10">
          <p className="text-center text-zinc-900 font-semibold text-lg cursor-pointer">
            Total Orders :
          </p>
          <div className="flex items-center gap-2 relative cursor-pointer">
            <span>
              <SlBasket className="cursor-pointer" size={35} />
            </span>
            <div className="absolute top-0 right-[40px] bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
              <p className="font-semibold text-xs">0</p>
            </div>
            <span>
              <p className="font-semibold text-sm">Cart</p>
            </span>
          </div>
        </div>
      </div> */}
      <div className="h-ful border-b w-1/4 flex flex-col gap-9 items-center border-r border-zinc-500 py-10">
        <div className="flex flex-col items-center gap-6 border-b pb-10 w-full border-zinc-500">
          <img
            src={user?.profileImage}
            alt="profile"
            className="h-48 w-48 object-cover overflow-hidden rounded-full cursor-pointer"
          />
          <span>
            <h1 className="text-center text-zinc-100 font-semibold text-lg">
              {user?.fullName}
            </h1>
            <h1 className="text-center text-zinc-300 cursor-pointer">
              {user?.address[0].district}
            </h1>
          </span>
        </div>
        <div className="flex flex-col gap-2 border-b w-full items-center border-zinc-500 pb-10">
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-100 font-semibold text-lg">
              Branch Country :
            </p>
            <p className="text-center text-zinc-200 text-sm">
              {user?.address[0].country}
            </p>
          </span>
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-100 font-semibold text-lg">
              Branch District :
            </p>
            <p className="text-center text-zinc-200 text-sm">
              {user?.address[0].district}
            </p>
          </span>
          <span className="flex gap-9 items-center cursor-pointer">
            <p className="text-center text-zinc-100 font-semibold text-lg">
              Branch Area :
            </p>
            <p className="text-center text-zinc-200 text-sm">
              {user?.address[0].area}
            </p>
          </span>
        </div>
        <div className="flex gap-9 items-center justify-center w-full pb-10">
          <p className="text-center text-zinc-100 font-semibold text-lg cursor-pointer">
            Total Orders :
          </p>
          <div className="flex items-center gap-2 relative cursor-pointer">
            <span>
              <SlBasket className="cursor-pointer" size={35} />
            </span>
            <div className="absolute top-0 right-[40px] bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
              <p className="font-semibold text-xs">0</p>
            </div>
            <span>
              <p className="font-semibold text-sm">Cart</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
