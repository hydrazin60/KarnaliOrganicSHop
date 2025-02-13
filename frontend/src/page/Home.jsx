// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import HomeProduct from "@/components/product/HomeProduct";

// export default function Home() {
//   const HeaderImages = [
//     {
//       id: 1,
//       imageLink: "https://m.media-amazon.com/images/I/71VcGrxQRBL._SX3000_.jpg",
//     },
//     {
//       id: 2,
//       imageLink: "https://m.media-amazon.com/images/I/71VcGrxQRBL._SX3000_.jpg",
//     },
//     {
//       id: 3,
//       imageLink: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
//     },
//     {
//       id: 4,
//       imageLink: "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
//     },
//     {
//       id: 5,
//       imageLink: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
//     },
//   ];

//   return (
//     <main className="overflow-hidden   px-10 flex justify-center relative mb-14 ">
//       <div className="w-full     flex items-center justify-center">
//         <Swiper
//           navigation={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[Navigation, Autoplay]}
//           loop={true}
//           className="w-full h-full"
//           spaceBetween={10}
//           slidesPerView={1}
//         >
//           {HeaderImages.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="relative w-full h-full"
//                 style={{
//                   backgroundImage: `url(${image.imageLink})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               ></div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="absolute top-80 bg-gray-100  w-[93%] h-auto z-10">
//         <HomeProduct />
//       </div>
//     </main>
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import HomeProduct from "@/page/product/HomeProduct";

export default function Home() {
 
  const HeaderImages = [
    {
      id: 1,
      imageLink: "https://m.media-amazon.com/images/I/71VcGrxQRBL._SX3000_.jpg",
    },
    {
      id: 2,
      imageLink: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    },
    {
      id: 3,
      imageLink: "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    },
    {
      id: 4,
      imageLink: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    },
  ];

  const [loding, setLoding] = React.useState(true);
  const [data, setData] = React.useState([]);

  return (
    <main className="bg-gray-100 relative flex justify-center ">
      <div className="w-full  ">
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          loop={true}
          className="w-full"
          spaceBetween={10}
          slidesPerView={1}
        >
          {HeaderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[70vh] bg-center bg-cover"
                style={{
                  backgroundImage: `url(${image.imageLink})`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-1/2  z-20 flex">
        <HomeProduct />
      </div>
    </main>
  );
}
