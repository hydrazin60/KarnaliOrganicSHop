import React from "react";

export default function AccountDashboard() {
  const userOptions = [
    {
      title: "Your Orders",
      description: "Track, return, or buy things again",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
    {
      title: "Your Messages",
      description: "Manage payment options and gift cards",
      image:
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    },
    {
      title: "Your Addresses",
      description: "Edit, add, or remove addresses",
      image: "https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg",
    },
    {
      title: "Payment Methods",
      description: "Manage payment options and gift cards",
      image:
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    },

    {
      title: "Login & Security",
      description: "Edit login, name, and mobile number",
      image: "https://images.pexels.com/photos/18106/pexels-photo.jpg",
    },
    {
      title: "Your History",
      description: "Edit login, name, and mobile number",
      image: "https://images.pexels.com/photos/18106/pexels-photo.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {userOptions.map((option, index) => (
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
