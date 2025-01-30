import React from "react";

export default function BigImage() {
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
    <>
      {" "}
      <div className="flex flex-wrap gap-7 mb-8 ">
        {itemImagePhoto
          .filter((image) => image.name === "larger")
          .map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-md border-gray-300 bg-white h-auto"
            >
              <p className="text-2xl font-bold w-full text-center mb-4">
                Get your game on
              </p>
              <img
                src={image.imageLink}
                alt="itemImage"
                className="h-72 w-[23rem] rounded-md object-center overflow-hidden object-cover"
              />
              <p className="text-blue-400 font-semibold mt-2">Shop Gaming</p>
            </div>
          ))}
      </div>
    </>
  );
}
