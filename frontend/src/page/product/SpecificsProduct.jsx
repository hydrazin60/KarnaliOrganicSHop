import React from "react";
import BigImage from "../../components/card/BigImage";
import ProductDetailsCard from "../../components/card/ProductDetailsCard";

export default function SpecificsProduct() {
  return (
    <div className="w-full flex flex-col gap-6 ">
      <div className="w-full flex justify-between px-10 border-2 shadow-sm py-2">
        <p className="text-md">
          1-48 of over 5000 results for{" "}
          <span className="text-red-600">"Gaming"</span>
        </p>
        <p className="text-md font-semibold">Sort by : </p>
      </div>
      <div className="w-full  flex gap-2 ">
        <div className="flex flex-col gap-2 w-1/5 p-4">
          <div className="border-b border-gray-300  py-3">
            <p className="text-md font-semibold">Explore Related Product</p>
            <p className="text-[15px] "> Gaming headset</p>
            <p className="text-[15px]"> Gaming mouse</p>
            <p className="text-[15px]"> Gaming keyboard</p>
            <p className="text-[15px]"> Gaming pc</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div>
              <p className="text-md font-semibold">Price</p>
              <p className="text-md font-semibold ">0$ - 100$</p>
              <input type="range" className="w-full" />
              <p className="text-[15px] text-blue-600">Reset price range</p>
            </div>
            <div>
              <p className="text-md font-semibold">Deals & Discounts</p>
              <p>All Discounts</p>
              <p>Today's Deals</p>
            </div>
            <div>
              <p className="text-md font-semibold">Customer Reviews</p>
            </div>
            <div>
              <p className="text-md font-semibold">Department</p>
              <p className="text-md">Computers & Accessories</p>
              <p className="text-md">PC Games & Consoles</p>
              <p className="text-md">Furniture</p>
              <p className="text-md pl-3">Game & Recreation Room Furniture</p>
            </div>
            <div className="flex flex-col">
              <p className="text-md font-semibold">Brands</p>
              <label>
                <input type="checkbox" /> Apple
              </label>
              <label>
                <input type="checkbox" /> Asus
              </label>
              <label>
                <input type="checkbox" /> Dell
              </label>
              <label>
                <input type="checkbox" /> HP
              </label>
              <label>
                <input type="checkbox" /> Lenovo
              </label>
              <label>
                <input type="checkbox" /> MSI
              </label>
            </div>
            <div>
              <p className="text-md font-semibold">All Top Brands</p>
              <label>
                <input type="checkbox" /> Top Brands
              </label>
            </div>
          </div>
        </div>
        <div className=" w-4/5">
          <ProductDetailsCard />
        </div>
      </div>
    </div>
  );
}
