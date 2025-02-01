import React from "react";

export default function AdminAccountDashboard() {
  const adminOptions = [
    {
      title: "Manage Users",
      description: "View, edit, or remove user accounts",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "Manage Order Lists",
      description: "Add, update, or remove internship listings",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      title: "manage Products",
      description: "Approve or reject company registrations",
      image:
        "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg",
    },
    {
      title: "upload Products",
      description: "Approve or reject company registrations",
      image:
        "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg",
    },
    {
      title: "User Messages",
      description: "View and respond to user inquiries",
      image:
        "https://images.pexels.com/photos/2058130/pexels-photo-2058130.jpeg",
    },
    {
      title: "Site Analytics",
      description: "Track website traffic and user engagement",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    },
    {
      title: "Platform Settings",
      description: "Configure platform settings and security",
      image:
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    },
  ];

  return (
    <div className="flex flex-col gap-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {adminOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 h-40 border border-zinc-400 cursor-pointer hover:bg-gray-100 rounded-lg shadow-md"
          >
            <div>
              <img
                src={option.image}
                alt=""
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>

            <div>
              <p className="text-lg font-semibold">{option.title}</p>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-zinc-300 py-10 ">
        <div className="border p-4 border-zinc-400 rounded-xl pb-10">
          <p className="font-semibold text-xl ">Ordering and shopping</p>
          <p className="text-lg font-semibold"> preferences</p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Address
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Orders
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Messages
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Subscriptions
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
        </div>
        <div className="border p-4 border-zinc-400 rounded-xl pb-10">
          <p className="font-semibold text-xl ">Ordering and shopping</p>
          <p className="text-lg font-semibold"> preferences</p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Address
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Orders
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Messages
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Subscriptions
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
        </div>
        <div className="border p-4 border-zinc-400 rounded-xl pb-10">
          <p className="font-semibold text-xl ">Ordering and shopping</p>
          <p className="text-lg font-semibold"> preferences</p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Address
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Orders
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Messages
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Subscriptions
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
        </div>
        <div className="border p-4 border-zinc-400 rounded-xl pb-10">
          <p className="font-semibold text-xl ">Ordering and shopping</p>
          <p className="text-lg font-semibold"> preferences</p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Address
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Orders
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Messages
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Subscriptions
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
        </div>
        <div className="border p-4 border-zinc-400 rounded-xl pb-10">
          <p className="font-semibold text-xl ">Ordering and shopping</p>
          <p className="text-lg font-semibold"> preferences</p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Address
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Orders
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Messages
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Subscriptions
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
          <p className="text-[#2162A1] text-lg cursor-pointer hover:text-black  hover:underline ">
            Your Recommendations
          </p>
        </div>
      </div>
    </div>
  );
}
