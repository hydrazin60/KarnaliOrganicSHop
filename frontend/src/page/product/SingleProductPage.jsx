import ProductDetailsCard from "@/components/card/ProductDetailsCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

export default function SingleProductPage() {
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
  ];
  const [activeImage, setActiveImage] = React.useState(" ");
  return (
    <div className="flex w-full h-full flex-col px-20 py-10   ">
      <div className="flex w-full h-full gap-10 border-b-2 border-zinc-400 pb-10 flex-wrap">
        <div className="flex h-full w-1/3  flex-col gap-10">
          <div className="flex h-full w-full gap-3">
            <div className="flex flex-col gap-2">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-16 w-20 rounded-md overflow-hidden cursor-pointer object-cover  "
              />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-16  w-20  rounded-md overflow-hidden cursor-pointer object-cover  "
              />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-16  w-20  rounded-md overflow-hidden cursor-pointer object-cover  "
              />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-16  w-20  rounded-md overflow-hidden cursor-pointer object-cover  "
              />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-16  w-20  rounded-md overflow-hidden cursor-pointer object-cover  "
              />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-16  w-20  rounded-md overflow-hidden cursor-pointer object-cover  "
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-[425px] rounded-md overflow-hidden cursor-pointer object-cover  "
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">Ask Rufus</p>
            <div className="flex gap-3 flex-wrap">
              <Button className="bg-[#b3e7f0] hover:bg-[#82e0f0] text-[#087f94]">
                What do customers say?
              </Button>
              <Button className="bg-[#b3e7f0] hover:bg-[#82e0f0] text-[#087f94]">
                Does it allow adding external gpu?
              </Button>
              <Button className="bg-[#b3e7f0] hover:bg-[#82e0f0] text-[#087f94]">
                Can its ram be upgraded later
              </Button>
              <Button className="bg-[#237281] rounded-full hover:bg-[#114852] text-[#fff]">
                ASK something else
              </Button>
            </div>
          </div>
        </div>
        <div className="flex h-full w-1/2 relative flex-col gap-10 bg-yellow-300 ">
          <div className="h-[700px] absolute top-1 w-[800px] bg-slate-700">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="preview"
              className="h-full w-full object-cover overflow-hidden"
            />
          </div>
          <div className="border-b-[1px] border-zinc-400 py-2 flex flex-col gap-3">
            <p className="text-3xl font-semibold">
              HP Victus 15.6 i5 Gaming Laptop, 15.6" FHD 1920*1080 144Hz, Intel
              Core i5-12450H, NVIDIA GeForce RTX 3050, 32GB RAM, 1TB SSD,
              Backlit KB, Touchpad, SD Card Reader, Webcam, HDMI, Wi-Fi 6, W11
              H, Blue
            </p>
            <p className="text-[#007185] ">Visit the HP Store</p>
            <div className="text-[#007185] text-sm flex gap-3">
              <p className="border-r-[2px] border-zinc-700 pr-3"> 114 rating</p>
              <p className="border-r-[2px] border-zinc-700 pr-3">
                5,000 reviews
              </p>
              <p>Search this Page</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3">
              <div className="h-48 w-48 bg-red-500"></div>
              <div className="h-48 w-48 bg-red-500"></div>
              <div className="h-48 w-48 bg-red-500"></div>
            </div>
            <div className="flex flex-col gap-3  border-b-[1px] border-zinc-400">
              <span className="flex gap-10 text-start">
                <p className="font-semibold text-md"> Brand</p>
              </span>
              <span className="flex gap-10 text-start">
                <p className="font-semibold text-md">Model Name</p>
              </span>
              <span className="flex gap-10 text-start">
                <p className="font-semibold text-md">Screen Size</p>
              </span>
              <span className="flex gap-10 ">
                <p className="font-semibold text-md">CPU Model</p>
              </span>
              <span className="flex gap-10 text-start">
                <p className="font-semibold text-md"> Hard Disk Size</p>
              </span>
              <span className="flex gap-1 items-center cursor-pointer">
                <FaAngleDown />
                <p className=" text-[#007185]">See more</p>
              </span>
            </div>
            <div>
              <p className="font-semibold text-lg">About this item</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate perferendis quidem esse ex aperiam pariatur atque eos
                sit expedita non est veritatis ratione nisi adipisci repellendus
                quos debitis, modi animi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-10 ">
        <div className="w-full flex flex-col gap-11">
          <p className="font-semibold text-3xl">
            Brand in this category on Amazon
          </p>
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
                    Recusandae explicabo dolorem reiciendis similique vero
                    minima itaque praesentium veniam
                  </p>
                  <p className="text-yellow-500 text-lg mt-2">★★★★★</p>
                  <p className="text-gray-600 mt-1 font-semibold">
                    Options: <span className="text-sm">2 sizes</span>{" "}
                  </p>

                  <div className="flex w-full justify-between">
                    <button className=" border border-zinc-500 px-2 py-1 rounded-full mt-4 hover:bg-zinc-100">
                      See Options
                    </button>
                    <div className=" relative border-black flex items-center justify-center gap-2 text-center  py-2 px-1 hover:border-gray-200 cursor-pointer ">
                      <span className="h-6 w-6 flex items-center justify-center border p-1 rounded hover:bg-zinc-200 hover:border-red-600">
                        <FaMinus />
                      </span>
                      <span>
                        <SlBasket className="cursor-pointer" size={30} />
                      </span>
                      <div className="absolute top-0 right-9 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
                        <p className="font-semibold text-xs text-white">2</p>
                      </div>
                      <span className="h-6 w-6 flex items-center justify-center border p-1 rounded hover:bg-zinc-200 hover:border-red-600">
                        <FaPlus />
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-800 text-sm mt-3">
                    Available from $48.13
                    <span className="text-blue-600">
                      {" "}
                      (19 used & new offers)
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
