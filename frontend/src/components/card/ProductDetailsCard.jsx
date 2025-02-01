import React from "react";

export default function ProductDetailsCard() {
  const itemImagePhoto = [
    {
      id: 1,
      name: "small",
      imageLink: "https://images.pexels.com/photos/18105/pexels-photo.jpg", // Small Laptop
    },
    {
      id: 2,
      name: "small",
      imageLink: "https://images.pexels.com/photos/18106/pexels-photo.jpg", // Small Gaming Mouse
    },
    {
      id: 3,
      name: "small",
      imageLink:
        "https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg", // Small Keyboard
    },
    {
      id: 4,
      name: "small",
      imageLink:
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg", // Small Monitor
    },
    {
      id: 9,
      name: "larger",
      imageLink:
        "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg", // Large Laptop
    },
    {
      id: 11,
      name: "larger",
      imageLink:
        "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg", // Large Gaming PC
    },
    {
      id: 12,
      name: "larger",
      imageLink:
        "https://images.pexels.com/photos/1359321/pexels-photo-1359321.jpeg", // Large Headphones
    },
    {
      id: 14,
      name: "larger",
      imageLink:
        "https://images.pexels.com/photos/595267/pexels-photo-595267.jpeg", // Large Mechanical Keyboard
    },
  ];

  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {itemImagePhoto.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden flex flex-col items-center  border pb-10"
          >
            <div className="w-full flex items-center justify-center bg-gray-100 p-4">
              <img
                src={item.imageLink}
                alt="Product"
                className=" h-[300px] object-contain "
              />
            </div>
            <div className="text-start mt-2 px-2">
              <p className="text-gray-700 font-medium text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae explicabo dolorem reiciendis similique vero minima
                itaque praesentium veniam
              </p>
              <p className="text-yellow-500 text-lg mt-2">★★★★★</p>
              <p className="text-gray-600 mt-1 font-semibold">
                Options: <span className="text-sm">2 sizes</span>{" "}
              </p>

              <button className=" border border-zinc-500 px-2 py-1 rounded-full mt-4 hover:bg-zinc-100">
                See Options
              </button>

              <p className="text-gray-800 text-sm mt-3">
                Available from $48.13
                <span className="text-blue-600"> (19 used & new offers)</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
