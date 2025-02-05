import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { use } from "react";
import { Cookie } from "lucide-react";
import AdminSideBar from "@/components/Admin/AdminSideBar";

export default function ManageUsers() {
  const user = useSelector((state) => state?.user?.user);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    if (!user?._id) {
      console.log("User ID not found");
      toast.error("Unauthorized access! Please log in again.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/amazoneClone/user_management/admin/user_manage`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          withCredentials: true,
        }
      );
      setUsers(res.data.data);
      toast.success(res.data.message || "Users fetched successfully");
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [user]);

  return (
    <div className="flex  w-full bg-zinc-800 text-white">
      <AdminSideBar />
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
            {users?.map((user) => (
              <tbody className="border-b border-zinc-600 " key={user?._id}>
                <tr className="hover:bg-black hover:border-b cursor-pointer  hover:border-red-600">
                  <th className="text-xs text-zinc-400 px-10  py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p>{user?.email}</p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-3   py-1">
                    <div className=" flex flex-row gap-2">
                      <span>
                        {user?.profileImage ? (
                          <img
                            src={user?.profileImage}
                            alt="profile"
                            className="h-8 w-8 object-cover rounded-full"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                        )}
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-2   py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p>{user?.fullName}</p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400   py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p> {user?.createdAt.slice(0, 10)} </p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-5  py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        <p>{user?.userType}</p>
                      </span>
                    </div>
                  </th>
                  <th className="text-xs text-zinc-400 px-5    py-2">
                    <div className=" flex flex-row gap-2">
                      <span>
                        {user?.address?.map((address) => (
                          <div key={address?.id}>
                            <p>{address?.district}</p>
                          </div>
                        ))}
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
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
