// import React from "react";

// export default function HomeProduct() {
//   const itemImagePhoto = [
//     {
//       id: 1,
//       name: "small",
//       imageLink: "smallImage1.jpg",
//     },
//     {
//       id: 2,
//       name: "small",
//       imageLink: "smallImage2.jpg",
//     },
//     {
//       id: 3,
//       name: "small",
//       imageLink: "smallImage3.jpg",
//     },
//     {
//       id: 4,
//       name: "small",
//       imageLink: "smallImage4.jpg",
//     },

//     {
//       id: 9,
//       name: "larger",
//       imageLink: "largeImage1.jpg",
//     },
//     {
//       id: 11,
//       name: "larger",
//       imageLink: "largeimage3.jpg",
//     },
//     {
//       id: 12,
//       name: "larger",
//       imageLink: "largeimage4.jpg",
//     },
//     {
//       id: 14,
//       name: "larger",
//       imageLink: "largeimage6.jpg",
//     },
//   ];
//   return (
//     <div className="w-[95%] mx-auto ">
//       <main className=" z-10">
//         <div>
//           <div className="flex items-center gap-8">
//             {itemImagePhoto
//               .filter((image) => image.name === "larger")
//               .map((image, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center p-4 border rounded-md border-gray-300 bg-white h-fit"
//                 >
//                   <p className="text-2xl font-bold w-full text-center mb-4">
//                     Get your game on
//                   </p>
//                   <img
//                     src={image.imageLink}
//                     alt="itemImage"
//                     className="h-72 w-96 rounded-md object-center overflow-hidden object-cover"
//                   />
//                   <p className="text-blue-400 font-semibold mt-2">
//                     Shop Gaming
//                   </p>
//                 </div>
//               ))}
//           </div>
//           <div className="flex items-center gap-8">
//             {itemImagePhoto
//               .filter((image) => image.name === "small")
//               .map((image, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center p-4 border rounded-md border-gray-300 bg-white h-fit"
//                 >
//                   <p className="text-2xl font-bold w-full text-center mb-4">
//                     Get your game on
//                   </p>
//                   <img
//                     src={image.imageLink}
//                     alt="itemImage"
//                     className="h-72 w-96 rounded-md object-center overflow-hidden object-cover"
//                   />
//                   <p className="text-blue-400 font-semibold mt-2">
//                     Shop Gaming
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>

//         <div> </div>
//       </main>
//     </div>
//   );
// }

import React from "react";

export default function HomeProduct() {
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
    <div className="w-[99%] mx-auto ">
      <main className="z-10   ">
        <div className="flex flex-wrap gap-6 mb-8">
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
                  className="h-72 w-96 rounded-md object-center overflow-hidden object-cover"
                />
                <p className="text-blue-400 font-semibold mt-2">Shop Gaming</p>
              </div>
            ))}
        </div>

        {/* Smaller Items */}
        <div className="flex flex-wrap gap-8">
          {itemImagePhoto
            .filter((image) => image.name === "small")
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
                  className="h-72 w-96 rounded-md object-center overflow-hidden object-cover"
                />
                <p className="text-blue-400 font-semibold mt-2">Shop Gaming</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
