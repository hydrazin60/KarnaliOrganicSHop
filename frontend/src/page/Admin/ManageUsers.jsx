import { Input } from "@/components/ui/input";
import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function ManageUsers() {
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="flex  w-full bg-zinc-800 text-white">
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
      <div className="h-[100vh] w-full flex  flex-col py-10  gap-1 ">
        <div className="flex flex-col gap-12 ml-10 ">
          <div>
            <h1 className="text-3xl font-semibold">Manage Users</h1>
          </div>
          <div className="flex gap-10 text-zinc-400 ">
            <p className="font-semibold border-b-4 border-zinc-800 pb-1 hover:border-zinc-600 cursor-pointer ">
              Admin User
            </p>
            <p className=" font-semibold border-b-4 border-zinc-800 pb-1 hover:border-zinc-600 cursor-pointer">
              Delivery Person
            </p>
            <p className=" font-semibold border-b-4 border-zinc-800 pb-1 hover:border-zinc-600 corpus-pointer">
              Customer
            </p>
          </div>
        </div>
        <div className="w-full border-t border-zinc-600 border-b">
          <input
            placeholder="Search User ......."
            className=" bg-zinc-800 w-full border-none placeholder:text-gray-400 outline-none px-10 p-2  "
          />
        </div>
        <div>
          <table className="table-auto w-full text-left text-sm text-gray-500 overflow-x-scroll ">
            <thead className="border-b border-zinc-600">
              <th className="text-[0.9rem]  text-zinc-400 font-medium px-10 py-2">
                email
              </th>
              <th className="text-[0.9rem]  v text-zinc-400 font-medium px-4 py-2">
                profile
              </th>
              <th className=" text-[0.9rem]  text-zinc-400 font-medium px-4 py-2">
                Name
              </th>
              <th className=" text-[0.9rem]   text-zinc-400 font-medium px-4 py-2 flex items-center gap-1">
                <p>Date</p>
              </th>
              <th className="text-[0.9rem]  text-zinc-400 font-medium px-4 py-2">
                user Role
              </th>
              <th className=" text-[0.9rem]   text-zinc-400 font-medium px-4 py-2">
                Address
              </th>
              <th className=" text-[0.9rem]   text-zinc-400 font-medium px-4 py-2">
                User Status
              </th>
            </thead>
            <tbody className="border-b border-zinc-600 ">
              <tr className="hover:bg-black hover:border-b cursor-pointer  hover:border-red-600">
                <th className="text-xs text-zinc-400 px-10  py-2">
                  <div className=" flex flex-row gap-2">
                    <span>
                      <p>pandeyjiban@gmail.com</p>
                    </span>
                  </div>
                </th>
                <th className="text-xs text-zinc-400 px-3   py-1">
                  <div className=" flex flex-row gap-2">
                    <span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt=""
                        className="w-9"
                      />
                    </span>
                  </div>
                </th>
                <th className="text-xs text-zinc-400 px-2   py-2">
                  <div className=" flex flex-row gap-2">
                    <span>
                      <p>jiban pandey</p>
                    </span>
                  </div>
                </th>
                <th className="text-xs text-zinc-400   py-2">
                  <div className=" flex flex-row gap-2">
                    <span>
                      <p>2025/12/3</p>
                    </span>
                  </div>
                </th>
                <th className="text-xs text-zinc-400 px-5  py-2">
                  <div className=" flex flex-row gap-2">
                    <span>
                      <p>Admin</p>
                    </span>
                  </div>
                </th>
                <th className="text-xs text-zinc-400 px-5    py-2">
                  <div className=" flex flex-row gap-2">
                    <span>
                      <p>Bhaktapur , Nepal</p>
                    </span>
                  </div>
                </th>
                <th className="text-xs text-zinc-400 px-5   py-2">
                  <div className=" flex flex-row gap-2">
                    <span className="flex flex-row gap-2 items-center">
                      <p>Active</p>
                      <div className="w-6 h-6 rounded-full bg-green-600"></div>
                    </span>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
