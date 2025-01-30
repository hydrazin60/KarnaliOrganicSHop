import React from "react";

export default function FourImageCOmbileProduct() {
  const itemImagePhoto = [
    {
      id: 1,
      name: "small",
      imageLink: "smallImage1.jpg",
    },
    {
      id: 2,
      name: "small",
      imageLink: "smallImage2.jpg",
    },
    {
      id: 3,
      name: "small",
      imageLink: "smallImage3.jpg",
    },
    {
      id: 4,
      name: "small",
      imageLink: "smallImage4.jpg",
    },
    {
      id: 9,
      name: "larger",
      imageLink: "largeImage1.jpg",
    },
    {
      id: 11,
      name: "larger",
      imageLink: "largeimage3.jpg",
    },
    {
      id: 12,
      name: "larger",
      imageLink: "largeimage4.jpg",
    },
    {
      id: 14,
      name: "larger",
      imageLink: "largeimage6.jpg",
    },
  ];
  return (
    <div >
      <div className=" h-[22rem] bg-white rounded-md w-[25rem] p-4 border shadow-md border-gray-300 ">
        <p className="text-2xl font-bold w-full text-center mb-3">
          Laptop Shopping Center
        </p>
        <div className="grid grid-cols-2 gap-4">
          {itemImagePhoto
            .filter((image) => image.name === "small")
            .map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={image.imageLink}
                  alt="itemImage"
                  className="h-28 w-40 object-cover rounded-md"
                />
                <p className="text-sm font-bold">Laptop</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
