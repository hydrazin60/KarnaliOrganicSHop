import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function Home() {
  const HeaderImages = [
    {
      id: 1,
      imageLink: "https://m.media-amazon.com/images/I/71VcGrxQRBL._SX3000_.jpg",
    },
    {
      id: 2,
      imageLink: "https://m.media-amazon.com/images/I/71VcGrxQRBL._SX3000_.jpg",
    },
    {
      id: 3,
      imageLink: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    },
    {
      id: 4,
      imageLink: "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    },
    {
      id: 5,
      imageLink: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    },
  ];

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
      id: 5,
      name: "small",
      imageLink: "smallImage5.jpg",
    },
    {
      id: 6,
      name: "small",
      imageLink: "smallImage6.jpg",
    },
    {
      id: 7,
      name: "small",
      imageLink: "smallImage7.jpg",
    },
    {
      id: 8,
      name: "small",
      imageLink: "smallImage8.jpg",
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
    <main className="overflow-hidden w-full h-screen flex justify-center relative">
      <div className="w-full lg:w-[95vw] lg:h-[70vh] flex items-center justify-center">
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          loop={true}
          className="w-full h-full"
          spaceBetween={10}
          slidesPerView={1}
        >
          {HeaderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${image.imageLink})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:w-[93vw] absolute top-[30%] z-10 left-13 w-full h-full flex justify-center">
        <div className="flex flex-wrap  gap-3 justify-center    overflow-hidden   py-5 rounded-md   w-full h-full">
          {itemImagePhoto
            .filter((image) => image.name === "larger")
            .map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center  rounded-md p-4 border border-gray-300 bg-white h-fit"
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
      </div>
    </main>
  );
}
